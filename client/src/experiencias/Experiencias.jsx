// experiencias.jsx  Mostrar las experiencias disponibles en la página principal
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  CircularProgress,
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import ExperienciaCard from "./ExperienciaCard"; // Importa el nuevo componente

function Experiencias() {
  const [experiencias, setExperiencias] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    // Cargar las experiencias desde el servidor cuando el componente se monta
    axios
      .get("http://localhost:4000/api/experiencias")
      .then((response) => {
        setExperiencias(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar las experiencias:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Box p={8} textAlign="center">
      <Heading size="xl">Explora Nuestras Experiencias</Heading>

      {loading ? (
        <CircularProgress isIndeterminate color="blue.500" mt={8} />
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8} mt={8}>
          {experiencias.map((experiencia) => (
            <ExperienciaCard experiencia={experiencia}/>
           
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Experiencias;
