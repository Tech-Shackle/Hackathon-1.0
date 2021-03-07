import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkAuth } from '../../helpers/checkAuth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/admin/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />;
};
