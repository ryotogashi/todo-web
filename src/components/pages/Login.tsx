import * as React from "react";
import { withRouter, Redirect } from "react-router";

import app from "../../firebase";
import { AuthContext } from "../common/Authentication";

import "./AuthenticationFrame.css";

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

  if (currentUser) return <Redirect to="/" />;

  return (
    <div className="authentication-frame">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default withRouter(Login);
