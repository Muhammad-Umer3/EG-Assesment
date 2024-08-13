import React from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/Button/Button";

const Home: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-4 right-4">
        <Button onClick={handleLogout} label="Logout" />
      </div>
      <div className="flex h-full justify-center items-center">
        <h1>Welcome to the application.</h1>
      </div>
    </div>
  );
};

export default Home;
