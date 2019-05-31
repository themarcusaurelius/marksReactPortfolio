const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true,   
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);