import React, { createContext, useContext, useState, ReactNode } from "react";
import { AuthResponse } from "../services/auth/types/auth.response";

interface AuthContextType {
  userData?: AuthResponse;
  updateAuthInfo: (token: AuthResponse) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<AuthResponse>(
    JSON.parse(localStorage.getItem("userData") ?? "{}")
  );

  const updateAuthInfo = (payload: AuthResponse) => {
    setUserData(payload);
    localStorage.setItem("userData", JSON.stringify(payload));
  };

  const logout = () => {
    localStorage.removeItem("userData");
  };

  return (
    <AuthContext.Provider value={{ userData, updateAuthInfo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
