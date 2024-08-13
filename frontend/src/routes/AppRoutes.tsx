import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from ".";
import { AppRouteNames } from "../constants/routes";
import PrivateRoute from "./PrivateRoute";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          {Object.keys(privateRoutes).map((routeKey) => {
            const { element, path } = privateRoutes[routeKey as AppRouteNames];
            return <Route key={path} path={path} element={element} />;
          })}
        </Route>
        {Object.keys(publicRoutes).map((routeKey) => {
          const { element, path } = publicRoutes[routeKey as AppRouteNames];
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes
