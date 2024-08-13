import { Navigate, Outlet } from "react-router-dom";
import { AppRouteNames } from "../constants/routes";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { userData } = useAuth();
  if (!userData) return <Navigate to={AppRouteNames.Login} />;
  return <Outlet />;
};

export default PrivateRoute;
