import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "./common/Authentication";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignInRoute from "./common/SignInRoute";
import SignUp from "./pages/SignUp";

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <React.Fragment>
          <SignInRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </React.Fragment>
      </Router>
    </AuthProvider>
  );
};
export default App;
