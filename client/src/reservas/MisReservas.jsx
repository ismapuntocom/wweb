import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MisReservas({   }) {
  const [reservas, setReservas] = useState([]);
    const { usuarioid: userId } = useParams();
   
    
  useEffect(() => {
    // Realiza una solicitud al servidor para obtener las reservas del usuario actual
    axios
      .get(`http://localhost:4000/api/misreservas/${userId}`,
      {
        headers: {
            Authorization: localStorage.getItem("token"),
            localStorage: localStorage.getItem("id"),
            //console: console.log('Token:', localStorage.getItem("token")),
           
            },  
            params: {
                include: "experiencia",
                
                


              },
        })
      .then((response) => {
        console.log("Reservas:", response.data);
        setReservas(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar las reservas:", error);
      });
  }, []);

  return (
    <div>
    <h1>Mis Reservas</h1>
    <ul>
      {reservas.map((reserva) => (
        <li key={reserva.id}>
          
          <strong>Experiencia:</strong> {reserva.experiencia.titulo}<br />

          <strong>Fecha de Reserva:</strong> {reserva.fechareserva}<br />
          <strong>Cantidad de Personas:</strong> {reserva.cantidadpersonas}
        </li>
      ))}
    </ul>
  </div>
);
}

export default MisReservas;

