import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { AppRouteNames } from "../../constants/routes";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-primary mb-4 text-6xl font-bold">404</h1>
        <p className="mb-8 text-xl text-gray-600">Page Not Found</p>
        <Button
          label="Visit Home"
          primary
          onClick={() => {
            navigate(AppRouteNames.Home);
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;
