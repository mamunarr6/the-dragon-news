import PropTypes from "prop-types";
import { createContext } from "react";

const AuthContext = createContext(null);

const authInfo = {};

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthProvider, AuthContext };
