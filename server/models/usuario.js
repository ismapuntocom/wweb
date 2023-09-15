// modelo usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../index')
const Reserva = require('./reserva');



const Usuario = sequelize.define('Usuarios', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: true,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  userType: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },



}, {
  tableName: 'Usuarios',
  timestamps: true,
});


//Usuario.hasMany(Reserva, { foreignKey: 'usuarioid', as: 'reservas' });

module.exports = Usuario;