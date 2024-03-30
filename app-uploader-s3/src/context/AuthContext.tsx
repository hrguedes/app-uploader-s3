"use client";

import { AuthContextType } from "@/types/AuthContextType";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Layout } from "@/components/layouts/layout";

export const AuthContext = createContext<AuthContextType>({
  email: null,
  name: null,
  token: null,
  isLogged: false,
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserFromCookies = () => {
      const userEmail = Cookies.get("uploaders3.email");
      const userNome = Cookies.get("uploaders3.name");
      const userToken = Cookies.get("uploaders3.token");
      if (userEmail && userNome && userToken) {
        setEmail(userEmail);
        setName(userNome);
        setToken(userToken);
        setIsLogged(true);
      }
    };
    fetchUserFromCookies();
  }, []);

  const logout = () => {
    Cookies.remove("uploaders3.email");
    Cookies.remove("uploaders3.name");
    Cookies.remove("uploaders3.token");
    setEmail(null);
    setName(null);
    setToken(null);
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        name,
        token,
        isLogged,
        logout,
      }}
    >
      {isLogged ? <Layout username={name}>{children}</Layout> : <>{children}</>}
    </AuthContext.Provider>
  );
};
