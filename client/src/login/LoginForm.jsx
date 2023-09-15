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
import { useAuth } from "../auth/AuthContext"; // Importa el contexto de autenticación



function LoginForm() {
  const navigate = useNavigate();
  const { login, setUser } = useAuth(); // Obtén la función de inicio de sesión del contexto

  const [data, setData] = useState({
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
    console.log('Iniciando submitHandler...');
    

    try {
      setIsLoading(true);
      console.log('Datos del formulario:', data.email, data.password);

      const response = await axios.post("http://localhost:4000/api/login", {
        email: data.email,
        password: data.password,  
      });

      
      if (response.status === 200) {
        // Inicio de sesión exitoso
        const token = response.data.token;
          
          console.log('Token:', token);
          

          const userResponse = await axios.get("http://localhost:4000/api/users", {
            headers: {
              Authorization:  token ,
            },
          });
          
          if (userResponse.status === 200) {
            const userData = userResponse.data;
    
            // Almacenar el token y el usuario en localStorage y contexto de autenticación
            localStorage.setItem("token", token);
            localStorage.setItem("id", response.data.id);
            console.log('Id del usuario:', response.data.id);
            login();
            setUser(userData); // Esto actualiza el usuario en el contexto
            navigate("/experiencias");
          } else {
            console.error("Error al obtener información del usuario");
          }
        } else {
          console.error("Error en el inicio de sesión");
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
      <div className="text-center mb-4">
       
      </div>

      <form onSubmit={submitHandler}>
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
          loadingText="Iniciando sesión..."
        >
          Iniciar Sesión
        </Button>

        <Text>
          ¿No tienes una cuenta?{" "}
          <Button
            variant="link"
            colorScheme="blue"
            onClick={() => navigate("/registro")}
          >
            Regístrate aquí
          </Button>
        </Text>
      </form>
      </Box>
    </Container>
  );
}

export default LoginForm;
