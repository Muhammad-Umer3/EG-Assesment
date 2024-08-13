import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { AuthResponse } from "../services/auth/types/auth.response";

interface AuthContextType {
  userData?: AuthResponse;
  updateAuthInfo: (token: AuthResponse) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<AuthResponse>();

  const updateAuthInfo = (payload: AuthResponse) => {
    setUserData(payload);
    localStorage.setItem("userData", JSON.stringify(payload));
  };

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData") ?? "{}"));
  }, []);

  return (
    <AuthContext.Provider value={{ userData, updateAuthInfo }}>
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
