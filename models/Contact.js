// Contact Model Ready for MongoDB

const mongoose = require("mongoose");

const ConactSchema = mongoose.Schema({

    // every contact have there own contacts
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: 'Personal'
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('contact', ConactSchema);
