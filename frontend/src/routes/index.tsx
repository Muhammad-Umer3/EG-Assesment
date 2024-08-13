import { AppRouteNames } from "../constants/routes";
import { RouteInfo } from "./types";
import { Suspense, lazy } from "react";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const routesInfo: Record<AppRouteNames, RouteInfo> = {
  [AppRouteNames.Login]: {
    path: AppRouteNames.Login,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  [AppRouteNames.Unknown]: {
    path: AppRouteNames.Unknown,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
  [AppRouteNames.Register]: {
    path: AppRouteNames.Unknown,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Register />
      </Suspense>
    ),
  },
  [AppRouteNames.Home]: {
    path: AppRouteNames.Unknown,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
};
