/* eslint-disable react/no-array-index-key */
import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';
import BasicLayout from 'src/layouts/BasicLayout';

const routesConfig = [
  {
    exact: true,
    path: '/login',
    component: lazy(() => import('src/views/auth/LoginView'))
  },
  {
    path: '/app',
    layout: BasicLayout,
    routes: [
      {
        exact: true,
        path: '/users',
        component: lazy(() => import('src/views/users'))
      },
    ]
  }
];

const renderRoutes = (routes) => (routes ? (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Component = route.component;
        const Layout = route.layout || Fragment;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Layout>
                {route.routes
                  ? renderRoutes(route.routes)
                  : <Component {...props} />}
              </Layout>
            )}
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
