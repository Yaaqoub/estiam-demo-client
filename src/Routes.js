/* eslint-disable react/no-array-index-key */
import React, {
  lazy,
  Suspense,
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';

const routesConfig = [
  {
    exact: true,
    path: '/login',
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    exact: true,
    path: '/users',
    component: lazy(() => import('src/views/users'))
  },
];

const renderRoutes = (routes) => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (<Component {...props} />)}
          />
        );
      })}
    </Switch>
  </Suspense>
) : null);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
