// AuthController.js, Controlador para la autenticación de usuarios
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');
const jwt = require("jsonwebtoken");
require("dotenv").config();



function generateUserToken(email) {
    console.log('Generando token con la clave secreta:', process.env.JWT_SECRET);
    const token = jwt.sign(
        {id: email}, 
        `${process.env.JWT_SECRET}`, 
        
        { expiresIn: "6h" }
    )
    console.log('Token generado:', token);

    return token
}

async function registerUser (req, res) {
    try {
        const { email, username, password, userType } = req.body
        const newUser = await Usuario.create({ email: email, username: username, password: password, userType: "usuario"})

        const token = generateUserToken(email)

        res.status(201).json(
            {
                token,
                email: newUser.email,
                username: newUser.username,
            }
        )
    } 
    catch (error) {
        console.error(error)
        res.status(400).json({
            error: error.name,
            message: error.message
        })
    }
}

async function loginUser (req, res) {
    try {
        console.log('Recibiendo solicitud de inicio de sesión...');
        const { email, password } = req.body
        console.log('Datos del formulario:', email, password);
        const user = await Usuario.findOne({ where: { email: email }});
        if (!user) {
            return res.status(401).json({ message: 'Email or password incorrect' });
        }
        const passwordMatch = password=== user.password
        console.log('Contraseña correcta:', passwordMatch);
        
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Email or password incorrect' });
       }
        
           
        const token = generateUserToken(email);
       // res.setHeader('Authorization', `Bearer ${token}`);
        res.json({ token, username: user.username, id: user.id });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.name, message: error.message });
    }
}

async function getUsers(req, res) {
    try {
        const users = await Usuario.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({
            error: error.name,
            message: error.message
        })
    }
}
module.exports = {
    registerUser,
    getUsers,
    loginUser
}