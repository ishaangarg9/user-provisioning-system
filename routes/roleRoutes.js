const express = require('express');
const { createRole, getRoles , getRoleById, updateRole, deleteRole } = require('../controllers/roleController');
const router = express.Router();

router.post('/roles', createRole);
router.get('/roles', getRoles);
router.get('/roles/:id', getRoleById);
router.put('/roles/:id', updateRole);
router.delete('/roles/:id', deleteRole);

module.exports = router;