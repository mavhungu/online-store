const mongoose = require('mongoose');

const login = mongoose.Schema({
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
module.exports = mongoose.model('login',login);