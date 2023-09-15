  // modelo FechaDisponible.js
  const { DataTypes } = require("sequelize");
  const sequelize = require("../index"); 
  const Experiencia = require("./experiencia");

  const FechaDisponible = sequelize.define(
    "FechaDisponible",
    {
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cuposdisponibles: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "FechasDisponibles", // Nombre real de la tabla en la base de datos
    }
  );

  FechaDisponible.belongsTo(Experiencia, { foreignKey: "experienciaid" });

  module.exports = FechaDisponible;
