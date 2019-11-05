import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

const Home = () => (
  <>
    <h1>Hello React</h1>
  </>
);

const Login = () => (
  <>
    <h1>Login</h1>
  </>
);

const Signup = () => (
  <>
    <h1>Signup</h1>
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    </Router>
  );
};
export default App;
