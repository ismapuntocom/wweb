  import React, { useState, useEffect } from "react";
  import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    Button,
    Container,
    Input,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

  function ReservaForm({experiencia}) {
    const { isLoggedIn, user } = useAuth();
    const [nombreCompleto, setNombreCompleto] = useState("");
    const [fechaReserva, setFechaReserva] = useState("");
    const [cantidadPersonas, setCantidadPersonas] = useState("");
    const [fechasDisponibles, setFechasDisponibles] = useState([]);
    const navigate = useNavigate();
     const [successMessage, setSuccessMessage] = useState(""); 
    

    useEffect(() => {
      // Cargar las fechas disponibles desde el servidor cuando el componente se monta
      axios
        .get("http://localhost:4000/api/fechas-disponibles")
        .then((response) => {
          if (response.data.length > 0) {
            setFechasDisponibles(response.data);
          }
        })
        .catch((error) => {
          console.error("Error al cargar las fechas disponibles:", error);
        });
    }, []);

    

  
    const handleFechaClick = (fecha) => {

      setFechaReserva(fecha);

    };

console.log("user:", user);
console.log("Token:", localStorage.getItem("token"));

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!isLoggedIn || user === null) {
        // Si el usuario no está autenticado, muestra un mensaje de error o redirige a la página de inicio de sesión
       alert("Debes iniciar sesión para reservar una experiencia.");
      // redirigir al usuario a la página de inicio de sesión 
      navigate("/login");
        return;
      }

      // Verifica si la fecha de reserva está seleccionada
      if (!fechaReserva) {
        alert("Debes seleccionar una fecha de reserva.");
        return;
      }
      console.log("Valor de user:", user);
      console.log("experiencia:", experiencia)

      try {
        const data = {
          nombreCompleto,
          fechaReserva,
          cantidadPersonas,
          experienciaId: experiencia.id,
          usuarioid: localStorage.getItem("id"),
          
        };
        console.log("id user", localStorage.getItem("id"))

        // Realiza la solicitud POST al backend para crear la reserva
        const response = await axios.post(
          "http://localhost:4000/api/crear-reserva",
          data,
          { 
            headers: 
            { 
              Authorization: localStorage.getItem("token"),
              console: console.log('Token:', localStorage.getItem("token")),
          },
          
        }
        );

        console.log("Reserva creada:", response.data);
        setSuccessMessage("Reserva creada con éxito");
        setTimeout  (() => {      
         navigate('/misreservas/${localStorage.getItem("id")}');
        }, 2000); 

        // Redirigir a una nueva ruta: "/mis-reservas"
      } catch (error) {
        console.log("Valor de user:", user);
        console.error("Error al crear la reserva:", error);
      }
    };

    console.log("isLoggedIn:", isLoggedIn);

    return (
      <Container fluid className="p-5 bg-white mt-5" maxW="md">
       <Box // Agrega un contenedor Box para aplicar estilos
        p={8} // Puedes ajustar el espaciado (padding) según tus preferencias
        boxShadow="lg" // Aplica una sombra similar a la de experienciasdetalle.jsx
        borderRadius="md" // Aplica un borde redondeado
        textAlign="center"
        backgroundColor="gray.100" // Cambia el color de fondo a gris claro
      >
      <Box p={8} textAlign="center">
        <Heading size="xl">Reservar Experiencia: {experiencia?.titulo}</Heading>
            <form onSubmit={handleSubmit}>
          <FormControl mt={8}>
            <FormLabel>Nombre Completo</FormLabel>
            <input
              type="text"
              value={nombreCompleto}
              onChange={(e) => setNombreCompleto(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Fecha de Reserva</FormLabel>
            <div>
              {fechasDisponibles.map((fechaDisponible, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleFechaClick(fechaDisponible.fecha)}
                >
                  {new Date(fechaDisponible.fecha).toLocaleDateString()}
                </Button>
              ))}
            </div>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Cantidad de Personas</FormLabel>
            <Input
              type="number"
              value={cantidadPersonas}
              onChange={(e) => setCantidadPersonas(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={4}  >
            Confirmar Reserva
          </Button>
        </form>
        {successMessage && (
          <div style={{ color: 'green', marginTop: '10px' }}>{successMessage}</div>
          )}
      </Box>
      </Box>
      </Container>
    );
  }

  export default ReservaForm;
