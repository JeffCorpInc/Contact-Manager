// Authentication for "users"

const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in User Details
// access   Private

router.get("/" , (req,res) => {
    res.send("Get logged in User")
})

// @route   POST api/auth
// @desc    Authorize the User Details & Get the token
// access   Public
// done remove it tommorrow

router.post("/" , (req,res) => {
    res.send("Login the User")
})


module.exports = router;