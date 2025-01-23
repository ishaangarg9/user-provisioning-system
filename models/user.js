const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    createdDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model('User', userSchema);
