// It would've access of request and response, It's Func. is to check wheather header has auth or not

// imports
const jwt = require("jsonwebtoken");
const config = require('config')


// Auth Middleware checking the token avaialability and verifying it
module.exports = function(req, res, next){

    // get the token
    const token = req.header("x-auth-token");

    // if token doesn't exist
    if(!token){

        return res.status(401).json({msg: "Authentication Denied, Token Missing"})
    }

   try {
    
        // verify token
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded.user;
        
        // it'll execute to the next middleware
        next();

    } catch (err) {
        
        res.status(401).json({msg: "Invalid Token"})
    }
     
}