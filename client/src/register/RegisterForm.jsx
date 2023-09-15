// Objetivo: formulario de registro de usuarios
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Box,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function RegisterForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const inputHandler = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({ ...prevData, [id]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post("http://localhost:4000/api/register", {
        username: data.fullName,
        email: data.email,
        password: data.password,
        userType: "normal",
      });

      if (response.status === 201) {
        // Registro exitoso
        console.log("Registro exitoso");
        // Guarda el token en el Local Storage si es necesario

        // Marca al usuario como autenticado (isLoggedIn)
        setIsLoggedIn(true);
        // Redirige al usuario a la página de experiencias
        navigate("/experiencias");
      } else {
        // Ocurrió un error en el registro
        console.error("Error en el registro");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="p-5 bg-white mt-5" maxW="md">
    <Box
     p={8}
     boxShadow="lg"
     borderRadius="md"
     textAlign="center"
     backgroundColor="gray.100"
   >
    <Container
      fluid
      className="p-5 bg-white mt-5"
      maxW="md" // Alinea el formulario en el centro
    >
      <div className="text-center mb-4">
       
      </div>

      <form onSubmit={submitHandler}>
        <FormControl mb={4}>
          <FormLabel>Nombre Completo</FormLabel>
          <Input
            type="text"
            placeholder="Ingresa tu Nombre Completo"
            id="fullName"
            value={data.fullName}
            onChange={inputHandler}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input
            type="email"
            placeholder="Ingresa tu Correo"
            id="email"
            value={data.email}
            onChange={inputHandler}
          />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Contraseña</FormLabel>
          <Input
            type="password"
            placeholder="Contraseña"
            id="password"
            value={data.password}
            onChange={inputHandler}
          />
        </FormControl>

        <Button
          mb={3}
          colorScheme="blue"
          type="submit"
          isLoading={isLoading}
          loadingText="Registrando..."
        >
          Registrarse
        </Button>

        <Text>
          ¿Ya tienes una cuenta?{" "}
          <Button
            variant="link"
            colorScheme="blue"
            onClick={() => navigate("/iniciar-sesion")}
          >
            Inicia sesión aquí
          </Button>
        </Text>
      </form>
    </Container>
    </Box>
    </Container>
  );
}

export default RegisterForm;
