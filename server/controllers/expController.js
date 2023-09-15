// controlador de experiencias
const Experiencia = require('../models/experiencia');

exports.obtenerExperiencias = async (req, res) => {
  try {
    const experiencias = await Experiencia.findAll();
    res.json(experiencias);
  } catch (error) {
    console.error("Error al obtener las experiencias:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
