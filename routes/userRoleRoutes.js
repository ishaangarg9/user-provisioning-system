const express = require('express');
const { assignRole, getUserRoles, removeUserRole } = require('../controllers/UserRoleController');
const router = express.Router();

router.post('/users', assignRole);
router.get('/users', getUserRoles);
router.delete('/users/:id', removeUserRole);

module.exports = router;
