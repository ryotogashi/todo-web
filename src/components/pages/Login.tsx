import * as React from "react";
import { withRouter, Redirect } from "react-router";

import app from "../../firebase";
import { AuthContext } from "../common/Authentication";

const Login = ({ history }) => {
  const handleLogin = React.useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (e) {
        console.error(e);
      }
    },
    [history]
  );

  const { currentUser } = React.useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          Email
          <input type="email" placeholder="Email" />
        </label>

        <label htmlFor="password">
          password
          <input type="password" placeholder="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default withRouter(Login);
