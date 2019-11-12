import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Authentication";

const SignInRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default SignInRoute;
