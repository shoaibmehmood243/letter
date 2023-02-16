const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Username is required.'], unique: true },
    email: { type: String, required: true },
    number: { type: Number, required: [true, 'Phone number is required.'], unique: true },
    password: { type: String, required: [true, 'Password is required.'], min: 6 },
}, {
    timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;