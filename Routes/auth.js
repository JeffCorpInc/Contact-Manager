// Creating API to Authenticate "users"

// imports
const express = require('express');
const router = express.Router();
const { validationResult, check} = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('config')
const auth = require("../middleware/auth")

const User = require('../models/User');


// @route   GET api/auth
// @desc    Get logged in User Details
// access   Private

router.get("/" , auth, async (req,res) => {

    // getting user details using token which we get in "auth middleware"
    try {
        
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
        
    } catch (err) {
        
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});


// @route   POST api/auth
// @desc    Authorizing the User Details & Get the token | for login
// access   Public

router.post("/" ,[
    
    check("email","Please Enter Valid Email").isEmail(),
    check("password",'Please Enter a Password').exists()
    
],  async (req,res) => {

    // Validtation Result is a func. to run checks
    const errors = validationResult(req);

    if(!errors.isEmpty()){

        return res.status(400).json({errors: errors.array()})
    }

    // destruturing
    const {email,password}= req.body;

    try {

        // find Email in DB
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg : "A User with this Email doesn't Exist."})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg: "Incorrect Password"})
        }

        // user id from DB
        const payload = {
            user: {
                id: user.id
            }
        }

        // jwt token create
        jwt.sign(payload, config.get('jwtSecret'), {
            
                expiresIn: 360000

            }, (err,token)=>{

            if(err) throw err;
            res.json({token});
        });

        
    } catch (error) {
        
        console.error(err.message);
        res.status(500).send("server error");
    }
})


module.exports = router;