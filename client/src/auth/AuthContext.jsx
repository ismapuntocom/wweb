import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [user, setUser] = useState(null);

  function login() {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
  }

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user,setUser }}>
      {children}
    </AuthContext.Provider>
  );  
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
}
