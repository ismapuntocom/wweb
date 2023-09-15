import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext"; // Importa el contexto de autenticación
import {
  Box,
  Flex,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Menu as MenuIcon } from "react-feather"; 

const Navbar = ({}) => {
  const navigate = useNavigate();
  const  { isLoggedIn, logout } = useAuth(); // Obtén la función de inicio de sesión del contexto

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    logout();
    navigate("/home");
    
  };

  return (
    <Box bg="gray.800" py={4}>
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Text as={Link} to="/home" color="teal.300" fontSize="xl" fontWeight= "extrabold" fontStyle={"inherit"}   >
          Ecos del Litoral
        </Text>
        <Flex align="center">
          {!isLoggedIn ? ( // Si no hay sesión iniciada
            <>
             <Text as={Link} to="/quienes-somos" mr={9} color="teal.300" fontWeight={"bold"}>
                Quiénes Somos
              </Text>
              <Text as={Link} to="/login" mr={9} color="teal.300" fontWeight={"bold"}>
                Iniciar Sesión
              </Text>
              <Text as={Link} to="/experiencias" color="teal.300" fontWeight={"bold"}>
                Experiencias
              </Text>
            </>
          ) : (
            <Menu>
              <MenuButton as={Button} colorScheme="teal" mr={4}>
              <MenuIcon size={20} />
              </MenuButton>
              <MenuList>
                <MenuItem as={Link}to={`/misreservas/${localStorage.getItem("id")}`}>
                  Mis Reservas
                </MenuItem>
                <MenuItem as={Link} to="/experiencias">
                  Experiencias
                </MenuItem>
                <MenuItem as={Link} to="/contact">
                  Contacto
                </MenuItem>
                <MenuItem onClick={() =>{console.log("Clic en Cerrar Sesión"); handleLogout();}}>Cerrar Sesión</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;