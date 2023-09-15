// server.js Archivo principal del servidor
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const fechaRoutes = require('./routes/fechaRoutes');
const experienciaRoutes = require('./routes/experienciaRoutes');
const reservaRoutes = require('./routes/reservaRoutes');





dotenv.config();
// Usa las rutas de la API
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api', contactRoutes);
app.use('/api', userRoutes);
app.use('/api', fechaRoutes);
app.use('/api', experienciaRoutes);
app.use('/api', reservaRoutes);


const port = 4000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);


});
