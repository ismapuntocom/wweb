//Ruta oara reservas
const express = require('express');
const router = express.Router();
const { crearReserva,obtenerReservasDelUsuario } = require('../controllers/ReservasController'); // Importa la función crearReserva desde el controlador
const authenticateToken = require('../middleware/authenticateToken');

router.post('/crear-reserva',authenticateToken ,crearReserva); // Utiliza la función como manejador de la ruta POST
router.get('/misreservas/:usuarioid',authenticateToken, obtenerReservasDelUsuario);

module .exports = router;   