import { Navigate } from 'react-router-dom';

const AuthHOC = (WrappedComponent) => {

  const isAutheticate = function () {
    const todayDate = new Date();
    const today = todayDate.getDay();
    const valid = [0 , 1 , 4]

    if (valid.includes(today)) {
      return true;
    }
    else {
      return false;
    }

  }

  return (props) => {
    
    const isAuthenticated = isAutheticate();

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default AuthHOC;
