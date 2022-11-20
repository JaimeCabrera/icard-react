import React from "react";
import { useAuth } from "../../hooks";

export const HomeAdmin = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>PAgina del administrador</h1>
      <button onClick={logout}>Cerrar Sesion</button>
    </div>
  );
};
