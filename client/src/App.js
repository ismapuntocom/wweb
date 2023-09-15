// Realiza el enrutamiento de las páginas de la aplicación
import React, {useState} from "react";
import { ChakraProvider, Box, extendTheme, useColorMode, Image } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReservaForm from "./reservas/ReservaForm";
import Navbar from "./navbar/NavBar";
import LoginForm from "./login/LoginForm";
import RegisterForm from "./register/RegisterForm";
import QuienesSomos from "./quienesSomos/quienesSomos";
import LandingPage from "./landing/LandingPage";
import NotFound from "./404/NotFound";
import Experiencias from "./experiencias/Experiencias";
import Fechas from "./admin/Fechas";
import ExperienciasDetalle from "./experiencias/ExperienciaDetalle";
import ContactForm from "./contact/Contact";
import MisReservas from "./reservas/MisReservas";
import { Text } from "@chakra-ui/react";
import { AuthProvider } from "./auth/AuthContext";


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

function App() {
  const { colorMode } = useColorMode();
  
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="-1"
          opacity="0.5"
        >
          <Image
            src="images/logo192.jpg"
            alt="Background"
            height="100%"
            width="100%"
            objectFit="cover"
          />
        </Box>
       
        <div className="App">    
        <AuthProvider> 
        <Navbar />
   
          <Routes>
           
            <Route path="/login"
              element={<LoginForm />} /> 

            <Route path="/registro" element={<RegisterForm />} />
            <Route path="/reserva" element={<ReservaForm  />} />
            <Route path="/misreservas/:usuarioid" element={<MisReservas />} />

            <Route path="/fechas" element={<Fechas />} />

            <Route path="/home" element={<LandingPage />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />

            <Route path="/contact" element={<ContactForm />} />
            
            <Route path="/experiencias" element={<Experiencias />} />
            <Route path="/experiencias/:id" element={<ExperienciasDetalle />} />
           
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Text mt={10} fontSize="sm" color="gray.500" textAlign="center">
              © 2023 Ecos del Litoral. Todos los derechos reservados.
            </Text>
          </AuthProvider>
        </div>
      </Router>
    </ChakraProvider>
    
  );
}

export default App;
