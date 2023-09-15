// Manejo de las rutas de usuarios
const express = require('express');
const router = express.Router();
const { registerUser, getUsers,loginUser } =  require('../controllers/AuthController')
const authenticateToken = require('../middleware/authenticateToken');


// Ruta para el registro de usuarios
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', authenticateToken, getUsers);

module.exports = router;
