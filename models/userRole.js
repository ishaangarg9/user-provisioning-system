const mongoose = require('mongoose');
const userRoleSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
    assignedDate: { type: Date, default: Date.now },
});
userRoleSchema.index({ userId: 1, roleId: 1 }, { unique: true }); // Prevent duplicate assignments
module.exports = mongoose.model('UserRole', userRoleSchema);
