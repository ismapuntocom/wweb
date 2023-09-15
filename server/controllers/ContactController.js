const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // Utiliza la variable de entorno
      pass: process.env.EMAIL_PASS, // Utiliza la variable de entorno
    },
  });

async function sendUserMessage(req, res) {
  try {
    const { name, mail, message } = req.body;

    console.log("skdfhkajfsa");

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: "Mensaje de Contacto",
      text: `de: ${name}\n desde: ${mail}\n mensaje: ${message}`,
    };
    
   

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: "Mail has been sent",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: error.name,
      message: error.message,
    });
  }
}
module.exports = {
  sendUserMessage,
};
