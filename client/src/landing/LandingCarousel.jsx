import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './img/image1.jpg';
import Vent from './img/Vent.jpg';
import { Link } from 'react-router-dom';
import { Box, Text, Button, Container, ChakraProvider, extendTheme, useColorMode } from '@chakra-ui/react';

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

const CarouselComponent = () => {
  const { colorMode } = useColorMode(); // Para alternar entre modos de color claro y oscuro

  return (
    <ChakraProvider theme={customTheme}>
      <Container
        p={4}
        maxWidth="800px"
        mx="auto"
        backgroundColor="gray.100"
        boxShadow="lg"
        borderRadius="md"
      >
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} interval={5000}>
          <div>
            <img src={image1} alt="Experience 1" style={{ width: '100%', height: '200%', objectFit: 'fill'}} />
            <Box p="9">
              <Text fontWeight="semibold" fontSize="xl" mb={2}>Quirilluca</Text>
              <Text fontSize="md" color="gray.500">Disfruta de una aventura en un Santuario Natural. Hogar de una flora
               y fauna fascinantes</Text>
              <Button as={Link} to="/experiencias" mt={20} colorScheme="blue">Reservar Ahora</Button>
            </Box>
          </div>
          <div>
            <img src={Vent} alt="Experience 2" style={{ width: '100%', height: '100%', objectFit:'fill' }} />
            <Box p="9">
              <Text fontWeight="semibold" fontSize="xl" mb={2}>Las Ventanas</Text>
              <Text fontSize="md" color="gray.500">Disfruta de una aventura al aire libre con vistas panorámicas. Maravilloso ambiente natural.</Text>
              <Button as={Link} to="/experiencias" mt={15} colorScheme="blue">Reservar Ahora </Button>
            </Box>
          </div>
        </Carousel>
      </Container>
    </ChakraProvider>
  );
}

export default CarouselComponent;
