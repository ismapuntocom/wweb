// ReservasController.js
const Reserva = require('../models/reserva');
const indexModels = require('../models/indexModels');
const sequelize = require('../index');
const FechaDisponible = require('../models/FechaDisponible');
const {Op} = require('sequelize'); 
const Experiencia = require('../models/experiencia');
const Usuario = require('../models/usuario');

const obtenerReservasPorUsuario = async (usuarioid) => {
  try {
    // Realiza la consulta a la base de datos para obtener las reservas del usuario
    console.log(usuarioid);
    const reservas = await Reserva.findAll({
      where: {
        usuarioid: usuarioid,
      },
      include: [
        {
         model: Experiencia,
          as: 'experiencia',      
          
         
        },
      ],
    });

    return reservas;
  } catch (error) {
    console.error('Error al obtener las reservas del usuario:', error);
    
    throw error;
  }
};

const obtenerReservasDelUsuario = async (req, res) => {
  try {
    const usuarioid = req.params.usuarioid;

    // Consulta la base de datos para obtener las reservas del usuario con userId
    const reservas = await obtenerReservasPorUsuario(usuarioid);
   

    res.json(reservas);
  } catch (error) {
    
    console.error("Error al obtener las reservas del usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};




// Controlador para crear una nueva reserva
const crearReserva = async (req, res) => {
  try {
    // Extrae los datos del cuerpo de la solicitud
    const { experienciaId, fechaReserva, cantidadPersonas, usuarioid } = req.body;
    console.log(req.body);
    // Verifica si hay cupos disponibles para la fecha seleccionada
    const fechaDisponible = await FechaDisponible.findOne({
      where: {
        experienciaid: experienciaId,
        fecha: fechaReserva,
        cuposdisponibles: {
          [Op.gt]: 0, // Verifica que haya más de 0 cupos disponibles
        },
      },
    });

    if (!fechaDisponible) {
      return res.status(400).json({ error: 'No hay cupos disponibles para esta fecha.' });
    }

    // Crea una nueva reserva
    const reserva = await Reserva.create({
      experienciaid: experienciaId,
      fechareserva: fechaReserva,
      cantidadpersonas: cantidadPersonas,
      usuarioid: usuarioid,
    });
    console.log('Reserva creada:', reserva);

    // Disminuye el número de cupos disponibles
    fechaDisponible.cuposdisponibles -= cantidadPersonas;
    await fechaDisponible.save();
    const experiencia = await Experiencia.findByPk(experienciaId);
    experiencia.cant_reservas += 1;
    await experiencia.save();

    // Responde con la reserva creada
    return res.status(201).json(reserva);
  } catch (error) {
    console.error('Error al crear reserva:', error);
    return res.status(500).json({ error: 'Error al crear reserva.' });
  }
};
module.exports = {
    crearReserva,
    obtenerReservasDelUsuario,
    };