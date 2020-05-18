const mongoose = require('mongoose');

const registerUsers = mongoose.Schema({
    displayName:{
        type: String, required: true, trim: true
    },
    email:{
        type: String, required: true, trim: true
    },
    password:{
        type: String, trim: true, required: true
    },
    date:{
        type: Date,
        default : Date.now
    }
});
module.exports = mongoose.model('registerUsers',registerUsers);