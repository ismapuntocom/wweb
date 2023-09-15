const express = require('express');
const {Sequelize} = require('sequelize');  
  

const sequelize = new Sequelize({
    database: 'ecodb2',
    username: 'postgres',
    password: '1233',
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log,

});

sequelize.authenticate().then(()=>{
    console.log('Conectado a la base de datos');    
}).catch(err=>{
    console.error('No se pudo conectar a la base de datos', err);    
});
module.exports = sequelize;