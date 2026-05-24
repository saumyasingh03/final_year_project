import React, { createContext, useContext, useState, useEffect } from "react";
import { authApi } from "../services/mockApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  // Rehydrate from localStorage on mount
  useEffect(() => {
    const stored = authApi.getCurrentUser();
    if (stored) setUser(stored);
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const { user } = await authApi.login(email, password);
    setUser(user);
    return user;
  };

  const register = async (name, email, password, role) => {
    const { user } = await authApi.register(name, email, password, role);
    setUser(user);
    return user;
  };

  const logout = () => {
    authApi.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAuth: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
