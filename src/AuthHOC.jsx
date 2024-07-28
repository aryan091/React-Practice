import { Navigate } from 'react-router-dom';

const AuthHOC = (WrappedComponent) => {
  return (props) => {
    
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default AuthHOC;
