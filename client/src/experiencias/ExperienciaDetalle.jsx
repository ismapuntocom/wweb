import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  CircularProgress,
  Container, // Importa el componente Container de Chakra UI
  ChakraProvider,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";

const customTheme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  colors: {
    primary: {
      50: "#f6f6ff",
    },
  },
});

function ExperienciasDetalle() {
  const { id } = useParams();
  const [experiencia, setExperiencia] = useState(null);
  const [loading, setLoading] = useState(true);
  const { colorMode } = useColorMode();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/experiencias/${id}`)
      .then((response) => {
        setExperiencia(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los detalles de la experiencia:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <ChakraProvider theme={customTheme}>
         <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-1" // Coloca el fondo detrás del contenido
        opacity="0.5" // Opacidad del fondo
      >
        <Image
          src={experiencia?.imagenUrl}
          alt={experiencia?.titulo}
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </Box>
      <Container
        p={8}
        maxWidth="800px"
        mx="auto"
        backgroundColor="gray.100" // Fondo gris claro
        boxShadow="lg" // Agregamos una sombra
        borderRadius="md" // Borde redondeado
      >
        <Box>
          <Link to="/experiencias" textDecoration="none" fontSize="lg">
            ← Volver a la lista de experiencias
          </Link>
          <Image
            src={experiencia?.imagenUrl}
            alt={experiencia?.titulo}
            height="300px"
            width="400px"
            objectFit="cover"
            mt={4}
          />
          <Heading size="xl" mt={4}>
            {experiencia?.titulo}
          </Heading>
          <Text fontSize="lg" mt={2}>
            {experiencia?.descripcion}
          </Text>
          <Text fontSize="lg" mt={2}>
            Precio: {experiencia?.precio}
          </Text>
          <Text fontSize="lg" mt={2}>
            Duración: {experiencia?.duracion}
          </Text>
          <Button
            as={Link}
            to="/reserva"
            colorScheme="blue"
            mt={4}
            fontSize="lg"
            _hover={{ bg: "blue.600" }}
          >
            Reservar
          </Button>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default ExperienciasDetalle;
