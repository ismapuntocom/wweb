const express = require('express');
const router = express.Router();
const { obtenerFechasDisponibles } = require('../controllers/FechasController');
const FechasController = require('../controllers/FechasController')


// Ruta para obtener las fechas disponibles
router.get('/fechas-disponibles', obtenerFechasDisponibles);


router.post('/generar-fechas', async (req, res) => {
    const experienciaId = req.body.experienciaId; // Acceder al parámetro de cuerpo

    try {
        await FechasController.generarFechasDisponibles(experienciaId);
        res.status(200).json({ message: 'Fechas generadas y cargadas exitosamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al generar y cargar fechas.' });
    }
});

module.exports = router;