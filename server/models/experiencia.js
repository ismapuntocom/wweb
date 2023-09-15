const Reserva = require('./reserva'); 
  const { DataTypes } = require('sequelize');
  const sequelize = require('../index');


 

  const Experiencia = sequelize.define('Experiencia', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagenUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuarioExperienciaId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cant_reservas: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
  }, {
    tableName: 'Experiencias',
    timestamps: true,
    freezeTableName: true,  
  
  }
    );
    
    //Experiencia.hasMany(Reserva, { foreignKey: 'experienciaid', sourceKey: 'id'});

  module.exports = Experiencia; 
