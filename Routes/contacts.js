// Get, Create, Update, and Delete contacts

const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all the User's contacts
// access   Private

router.get("/" , (req,res) => {
    res.send("Get all the Contacts")
})

// @route   POST api/contacts
// @desc    Update the new contacts
// access   Private

router.post("/" , (req,res) => {
    res.send("Update the new Contacts")
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