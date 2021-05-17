import React from "react";
import { Route, Redirect } from "react-router-dom";
import { DASHBOARD } from "../../routes";
import { useSelector } from "react-redux";
import { makeSelectAuthenticated } from "../../store/auth/selectors";

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(makeSelectAuthenticated());

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Redirect to={DASHBOARD} /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
