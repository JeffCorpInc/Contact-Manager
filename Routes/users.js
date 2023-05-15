// Creating API to register User to DB 

// imports
const express = require('express');
const router = express.Router();
const { validationResult, check} = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('config')

const User = require('../models/User');


// @route   POST api/users
// @desc    Register a user
// access   Public  

router.post('/', [

    // messages for errors
    check('name','please enter a name').not().isEmpty(),
    check('email','please enter valid email').isEmail(),
    check('password','please enter password atleast 6 characters').isLength({min:6})

] , async (req,res) => {

    // validtationresult is a func to run checks
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    // destructuring | creating new user into DB using this logic with hashing and email check
    const {name, email, password} = req.body;

    try {
        
        // find Email in DB
        let user = await User.findOne({email: email});
        if (user) {
            return res.status(400).json({msg: 'A User with this email is already exists.'})
        } else{

            user = new User({
                name,
                email,
                password
            });
    
            // salt is a protocol/algorithm used to make plane text a hash
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);
    
            await user.save();
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        // jwt token create
        jwt.sign(payload, config.get('jwtSecret'), {
            
                expiresIn: 3600000

            }, (err,token)=>{

            if(err) throw err;
            res.json({token});
        });



    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;