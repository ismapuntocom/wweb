import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function QuienesSomos() {
  return (
    <Box p={8} textAlign="center">
      <Heading size="xl">¿Quiénes Somos?</Heading>
      <Text mt={4}>
        Somos una empresa comprometida con ofrecer experiencias únicas a nuestros
        clientes en la comuna de Puchuncaví. Nuestra pasión por brindar momentos inolvidables nos impulsa a
        crear un catálogo diverso de experiencias que se adaptan a diferentes
        gustos y preferencias.
      </Text>
      <Text mt={4}>
        En nuestra plataforma, conectamos a personas con experiencias que van
        más allá de lo ordinario. Trabajamos en estrecha colaboración con
        proveedores y anfitriones de todo el mundo para garantizar que cada
        experiencia sea auténtica y satisfaga las expectativas de nuestros
        clientes.
      </Text>
      <Text mt={4}>
        Nuestra misión es inspirar y enriquecer la vida de las personas a través
        de experiencias inolvidables. Valoramos la diversidad, la autenticidad y
        la calidad en todo lo que hacemos, y nos enorgullecemos de ofrecer un
        servicio excepcional a nuestros clientes.
      </Text>
      <Text mt={4}>
        ¡Gracias por ser parte de nuestra comunidad y confiar en nosotros para
        crear recuerdos duraderos!
      </Text>
    </Box>
  );
}

export default QuienesSomos;
