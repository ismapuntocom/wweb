import React, { useState } from 'react';
import axios from 'axios'; // Importa Axios
import { Box, Heading, Text, Button,  FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza una solicitud POST al servidor
      const response = await axios.post('http://localhost:4000/api/contact', formData);

      if (response.status === 200) {
        // La solicitud se completó con éxito
        console.log('Mensaje enviado con éxito');
      }
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    <Box p={8} textAlign="center">
      <Heading size="xl">Contacta con Nosotros</Heading>
      <Text fontSize="lg" mt={4}>¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudarte!</Text>

      <Box mt={8}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" placeholder="Tu nombre" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input type="email" placeholder="Tu correo electrónico" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Mensaje</FormLabel>
            <Textarea placeholder="Escribe tu mensaje aquí" />
          </FormControl>
          <Button colorScheme="blue" type="submit" mt={6}>
            Enviar Mensaje
          </Button>
        </form>
      </Box>
    </Box>
    </Box>
    </Container>
  );
}

export default ContactForm;
