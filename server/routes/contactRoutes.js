// Routes para formulario de contacto

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/ContactController');

// Ruta para manejar el envío de mensajes de contacto
router.post('/contact', contactController.sendUserMessage);

module.exports = router;
