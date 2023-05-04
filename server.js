// Boiler Plate Code for express

// imports
const express = require("express");
const connectDB = require("./Config/db")

connectDB();

// intialize express
const app = express();

// to make an EndPoint || "Simple API for app level"
app.get("/" , (req,res) => res.json({msg : "Hello World"}))

// Adding Routes
app.use('/api/users' , require('./Routes/users'))
app.use('/api/auth' , require('./Routes/auth'))
app.use('/api/contacts' , require('./Routes/contacts'))


// PORT : if in production || else developement 
const PORT = process.env.PORT || 5000;

// Built-in listener    
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));