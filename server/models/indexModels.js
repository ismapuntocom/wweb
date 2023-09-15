// indexModels.js   para evitar el error de asociaciones circulares
const { DataTypes } = require('sequelize');

const sequelize = require('../index');  
const Usuario = require('./usuario');
const Experiencia = require('./experiencia');
const Reserva = require('./reserva');



// Define las asociaciones 
Experiencia.hasMany(Reserva, { foreignKey: 'experienciaid', sourceKey: 'id' });
Reserva.hasOne(Usuario, { foreignKey: 'usuarioid', as: 'usuario' });
Reserva.belongsTo(Experiencia, { foreignKey: 'experienciaid', as: 'experiencia' });

module.exports = {  
  Usuario,
  Experiencia,
  Reserva
};
