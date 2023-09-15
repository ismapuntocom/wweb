const Experiencia = require('../models/experiencia');



const obtenerExperienciaPorId = async (req, res) => {
    const experienciaId = req.params.id;
  
    try {
      // Realiza una consulta a la base de datos para obtener la experiencia por su ID
      const experiencia = await Experiencia.findByPk(experienciaId);
  
      if (!experiencia) {
        return res.status(404).json({ message: 'Experiencia no encontrada' });
      }
  
      return res.status(200).json(experiencia);
    } catch (error) {
      console.error('Error al obtener los detalles de la experiencia:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  };
  
  module.exports = {
    obtenerExperienciaPorId,
  };
  