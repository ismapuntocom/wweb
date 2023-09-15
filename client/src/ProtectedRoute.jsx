import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, isLoggedIn, ...props }) {
  return (
    <Route
      {...props}
      element={isLoggedIn ? <Component /> : <Navigate to="/iniciar-sesion" />}
    />
  );
}

export default ProtectedRoute;
