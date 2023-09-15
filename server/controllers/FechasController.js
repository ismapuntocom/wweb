const sequelize = require('../index')
const { QueryTypes } = require('sequelize');
const Experiencia = require('../models/experiencia');
const FechaDisponible = require('../models/FechaDisponible');  


const generarFechasDisponibles = async () => {
    try {
     
      const result = await sequelize.query('SELECT generar_fechas_disponibles()', {
        type: QueryTypes.SELECT,
      });
  
      if (result && result.length > 0) {
        console.log('Fechas generadas y cargadas exitosamente.');
      } else {
        console.error('No se obtuvo ningún resultado de la función almacenada.');
        throw new Error('Error al generar y cargar fechas.');
      }
    } catch (error) {
      console.error('Error al generar y cargar fechas:', error);
      throw error;
    }
  };
  const obtenerFechasDisponibles = async (req, res) => {
    try {
      const fechas = await FechaDisponible.findAll({
        
        attributes: ['fecha'],
      });
      res.json(fechas);
    } catch (error) {
      console.error('Error al obtener las fechas disponibles con experiencias asociadas:', error);
      res.status(500).json({ error: 'Error al obtener las fechas disponibles con experiencias asociadas' });
    }
  };
  

  
  module.exports = {
    obtenerFechasDisponibles,
    generarFechasDisponibles,
  };