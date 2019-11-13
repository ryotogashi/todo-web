import * as React from "react";

import app from "../firebase";
import { AuthContext } from "../components/common/Authentication";

class FirebaseUserSession {
  app: firebase.app.App = app;

  async signUpWithEmailAndPassword(email: string, password: string) {
    await this.app.auth().createUserWithEmailAndPassword(email, password);
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    await this.app.auth().signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.app.auth().signOut();
  }

  async isSigndIn(): Promise<boolean> {
    const { currentUser } = React.useContext(AuthContext);

    return currentUser !== undefined ? true : false;
  }
}

export default FirebaseUserSession;
