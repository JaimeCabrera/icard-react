import React, { createContext, useEffect, useState } from "react";
import { getToken, removeToken, setToken } from "../api/token";
import { useUser } from "../hooks";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export const AuthProvider = (props) => {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);
  const { get_user_auth } = useUser();

  //login funtion
  const login = async (token) => {
    const me = await get_user_auth(token);
    setAuth({ token, me });
    setToken(token);
  };
  //logout function
  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
    }
  };

  useEffect(() => {
    (async () => {
      const token = getToken();
      if (!token) {
        setAuth(null);
      } else {
        const me = await get_user_auth(token);
        setAuth({ token, me });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const valuesContext = {
    auth,
    login,
    logout: logout,
  };

  if (auth === undefined) return null;
  return (
    <AuthContext.Provider value={valuesContext}>
      {children}
    </AuthContext.Provider>
  );
};
