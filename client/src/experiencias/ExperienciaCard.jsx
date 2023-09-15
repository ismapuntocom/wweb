// experienciaCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Button,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import ReservaForm from "../reservas/ReservaForm";

function ExperienciaCard({ experiencia  }) {
  const [showReservaModal, setShowReservaModal] = React.useState(false);

  const handleReservarClick = () => {
    setShowReservaModal(true);
  };
  const handleCloseModal = () => {
    setShowReservaModal(false);
  };

  return (
   
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      width="300px"
      margin="auto"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "scale(1.02)",
        boxShadow: "lg",
        cursor: "pointer",
      }}
    >
       <Link to={`/experiencias/${experiencia.id}`}>
      <Image
        src={experiencia.imagenUrl}
        alt={experiencia.titulo}
        height="200px"
        objectFit="cover"
      />
      <Heading size="md" mt={2}>
        {experiencia.titulo}
      </Heading>
      <Text>{experiencia.descripcion}</Text>
      <Text>Precio: {experiencia.precio}</Text>
      <Text>Duración: {experiencia.duracion}</Text>
      </Link>
     
      <Button colorScheme="blue" mt={4} onClick={handleReservarClick}>
        
        Reservar
      </Button> 

      {/* Modal de reserva */}
      <Modal isOpen={showReservaModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reservar Experiencia</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReservaForm  experiencia= { experiencia} />
          </ModalBody>
          <Button colorScheme="red" onClick={handleCloseModal}>
              Cerrar
            </Button>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Box>
    
  );
}

export default ExperienciaCard;
