import { createContext, useState, useEffect } from 'react';
import api from '../api/pm.api'

const AuthContext = createContext();

const AuthProviderWrapper = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem('token', token);
  }

  const removeToken = () => {
    localStorage.removeItem('token');
  }

  const authenticateUser = async () => {
    try {
      const response = await api.verify();
      setIsLoggedIn(true);
      setUser(response);
    } catch (error) {
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  const logoutUser = () => {
    removeToken();
    authenticateUser();
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };