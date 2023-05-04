// import mongoose and config
const mongoose = require('mongoose');
const config = require('config');

// config for global variables
const db = config.get("mongoURI")

// connect DB using mongoose
const connectDB = () => {mongoose.connect(db, {
    
        // to prevent errors intially
        // userNewUrlParser: true,
        // useCreatIndex: true,
        // useFindAndModify: false

    }).then(()=> console.log("Database is connected")).catch(err =>{

        console.error(err.message);
        process.exit(1);
    });
}

module.exports = connectDB;