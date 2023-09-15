// Auth forms component 
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import RegisterForm from "../register/RegisterForm";

const AuthForms = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  return (
    <div>
      {showLoginForm ? <LoginForm /> : <RegisterForm />}
      <div>
        {showLoginForm ? (
          <Link to="/registrarse">¿No tienes una cuenta? Regístrate aquí</Link>
        ) : (
          <Link to="/iniciar-sesion">¿Ya tienes una cuenta? Inicia sesión aquí</Link>
        )}
      </div>
    </div>
  );
};

export default AuthForms;
