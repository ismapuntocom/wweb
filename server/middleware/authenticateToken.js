// middleware authenticateToken.js
const e = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();



function authenticateToken(req,res, next){
    const token = req.header("authorization");
    if(!token) return res.status(401).send("Acceso denegado");
    else{     
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) return res.status(403).send("Token inválido");
            req.user = user;
            next();
        });
    }

}

module.exports = authenticateToken;
