import React, { createContext, useState } from "react";
import { setToken } from "../api/token";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export const AuthProvider = (props) => {
  const login = async (token) => {
    setToken(token);
  };

  const valuesContext = {
    auth: null,
    login,
    logout: () => console.log("logout de la app"),
  };

  const { children } = props;
  return (
    <AuthContext.Provider value={valuesContext}>
      {children}
    </AuthContext.Provider>
  );
};
