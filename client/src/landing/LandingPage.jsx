import React from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CarouselComponent from "./LandingCarousel";


const LandingPage = () => {
  return (
    <Box>
      <Box p={8} textAlign="center">
        <Heading size="xl">¡Bienvenido a Ecos del Litoral!</Heading>
        <Text fontSize="lg" mt={4}>
          Explora y reserva emocionantes experiencias en destinos increíbles del
          litoral.
        </Text>

        <Box mt={8}>
          <Heading size="lg" fontWeight={"bold"}>Explora nuestras experiencias destacadas</Heading>
          <Flex mt={4} justifyContent="center" alignItems="center">
            <CarouselComponent />
          </Flex>
        </Box>

        <Button as={Link} to="/contact" colorScheme="blue" mt={8}>
          Contáctanos
        </Button>
      
      </Box>
    </Box>
  );
};

export default LandingPage;
