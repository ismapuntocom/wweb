// modelo reserva.js  
const { DataTypes } = require('sequelize');
const sequelize = require('../index');  
const Usuario = require('./usuario');
const Experiencia = require('./experiencia');



const Reserva = sequelize.define('Reserva', {
  experienciaid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  usuarioid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechareserva: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cantidadpersonas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

},  {
    tableName: 'Reservas',
    timestamps: false,
    freezeTableName: true,  
  
});



//Reserva.hasOne(Usuario, {foreignKey: 'usuarioid', as: 'usuario'});
//Reserva.belongsTo(Experiencia, {foreignKey: 'experienciaid', as: 'experiencia'});


module.exports = Reserva;
