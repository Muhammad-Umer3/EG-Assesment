import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesInfo } from '.'
import { AppRouteNames } from "../constants/routes";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(routesInfo).map((routeKey) => {
          const { element, path, children } = routesInfo[routeKey as AppRouteNames]
          if (!children) return <Route key={path} path={path} element={element} />

          return (
            <Route key={path} path={path} element={element}>
              {children.map((item) => {
                return (
                  <Route
                    key={item.path}
                    path={item.param ? `${item.path}/${item.param}` : item.path}
                    element={item.element}
                  />
                )
              })}
            </Route>
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
