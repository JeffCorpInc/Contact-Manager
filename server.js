// Boiler Plate Code for express

// imports
const express = require("express");
const connectDB = require("./Config/db")
const path = require('path')

// intialize express
const app = express();
connectDB();

// init middleware
app.use(express.json({ extended:false}));

// to make an EndPoint || "Simple API for app level"
// app.get("/" , (req,res) => res.json({msg : "Hello World"}))

// Adding Routes
app.use('/api/users' , require('./Routes/users'))
app.use('/api/auth' , require('./Routes/auth'))
app.use('/api/contacts' , require('./Routes/contacts'))

// if static files on production server
if( process.env.NODE_ENV === 'production' ){
    
    // set static folder
    app.use(express.static('client/build'));

    // Apart from file above, we'll load this file 
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}   


// PORT : if in production || else developement 
const PORT = process.env.PORT || 5000;

// Built-in listener    
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));