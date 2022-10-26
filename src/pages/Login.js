import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/pm.api';

import { AuthContext } from '../context/auth.context';

import Alert from '../components/Alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {authenticateUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.login({password, email});
      setEmail('');
      setPassword('');
      authenticateUser();
      navigate('/');
    } catch (error) {
      handleError(error) // snackbar
    }
  }

  const handleError = (error) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 15000)
  }

  return (
    <div>
      {error && <Alert>{error}</Alert>}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' value={email} onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Login</button>
      </form>

    </div>
  )
}

export default Login