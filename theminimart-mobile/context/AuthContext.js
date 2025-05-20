import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "../constants/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      // Check if user is already authenticated
      const token = await AsyncStorage.getItem("token");
      if (token) setIsAuthenticated(true);
    };
    checkAuthentication();
  }, []);

  const login = async (username, password) => {
    // Call your API, save your JWT....
    const finalUrl = `${API_URL}users/?username=${username}&password=${password}`;
    console.log(finalUrl);
    try {
      const res = await axios.get(finalUrl);
      await AsyncStorage.setItem("token", res.data[0].token);
      console.log(`Username:${res.data[0].username}`);
      console.log(`Token:${res.data[0].token}`);
      setIsAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = async () => {
    // clear JWT or refresh token
    await AsyncStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
