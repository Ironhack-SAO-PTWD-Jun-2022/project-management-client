import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  if(isLoading) {
    return <p>Loading...</p>
  }
  if(isLoggedIn) {
    return children;
  }
  return <Navigate to='/login' />
};

export default PrivateRoute;