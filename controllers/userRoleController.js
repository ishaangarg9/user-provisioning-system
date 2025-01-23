const UserRole = require('../models/userRole');

// Assign a role to a user
const assignRole = async (req, res) => {
    try {
        const { userId, roleId } = req.body;

        if (!userId || !roleId) {
            return res.status(400).json({ error: 'User ID and Role ID are required' });
        }

        const existingAssignment = await UserRole.findOne({ userId, roleId });
        if (existingAssignment) {
            return res.status(400).json({ error: 'Role already assigned to this user' });
        }

        const userRole = new UserRole({ userId, roleId });
        await userRole.save();
        res.status(201).json(userRole);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// List all user-role assignments (filter by user or role)
const getUserRoles = async (req, res) => {
    try {
        const { userId, roleId } = req.query;
        const query = {};

        if (userId) query.userId = userId;
        if (roleId) query.roleId = roleId;

        const userRoles = await UserRole.find(query).populate('userId roleId');
        res.status(200).json(userRoles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Remove a role assignment from a user
const removeUserRole = async (req, res) => {
    try {
        const userRole = await UserRole.findByIdAndDelete(req.params.id);
        if (!userRole) {
            return res.status(404).json({ error: 'User-role assignment not found' });
        }
        res.status(200).json({ message: 'Role assignment removed successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { assignRole, getUserRoles, removeUserRole };
