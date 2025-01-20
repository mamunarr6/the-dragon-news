import { useContext } from "react";

export const AuthContext = useContext(null);

const authInfo = {};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
