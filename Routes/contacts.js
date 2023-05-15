// Get, Create, Update, and Delete contacts

// imports
const express = require('express');
const router = express.Router();
const { validationResult, check} = require('express-validator');
const auth = require('../middleware/auth')

const User = require('../models/User');
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    Get all the User's contacts
// access   Private

router.get("/" ,auth, async (req,res) => {

    try {
        
        // get all the contacts of currently signed in user
        const contacts = await Contact.find({ user: req.user.id }).sort({
            date: -1
        })
        res.json(contacts);

    } catch (error) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

// @route   POST api/contacts
// @desc    Update the new contacts
// access   Private

router.post("/" ,[ auth , [

    check('name',"Name is Required").not().isEmpty()

]], async (req,res) => {

    // Validtation Result is a func. to run checks
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const {name,email, phone,type }= req.body;

    try {
        
        const newContact = new Contact({
          
            name,
            email,
            phone,
            type,
            // for specific user using id
            user: req.user.id
        })

        // saved to DB
        const contact = await newContact.save();

        res.json(contact);

    } catch (err) {

        console.error(err.message);
        res.status(500).send("Server Error");
    }
})


// @route   PUT api/contacts:id
// @desc    Update the existing contacts
// access   Private

router.put("/:id" , (req,res) => {
    res.send("Update the existing contacts")
})


// @route   DELETE api/contacts:id
// @desc    Delete the contacts
// access   Private

router.delete("/:id" , (req,res) => {
    res.send("Delete the contacts")
})

module.exports = router;