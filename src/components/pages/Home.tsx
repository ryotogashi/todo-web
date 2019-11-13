import * as React from "react";
import app from "../../firebase";

import "./AuthenticationFrame.css";

const Home = () => (
  <div className="authentication-frame">
    <h1>Home</h1>
    <button onClick={() => app.auth().signOut()}>Sign out</button>
  </div>
);

export default Home;
