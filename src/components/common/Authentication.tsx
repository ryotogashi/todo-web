import * as React from "react";
import app from "../../firebase";

export const AuthContext = React.createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
