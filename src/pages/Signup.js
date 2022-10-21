import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/pm.api';

import Alert from '../components/Alert';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await api.signup({password, username, email});
      handleSuccess(`User ${newUser.username} created!`); // snackbar
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (error) {
      handleError(error) // snackbar
    }
  }

  const handleError = (error) => {
    setError(error);
    setTimeout(() => {
      setError('');
    }, 5000)
  }
  
  const handleSuccess = (msg) => {
    setSuccess(msg);
    setTimeout(() => {
      setSuccess('');
    }, 5000)
  }

  return (
    <div>
      {error && <Alert>{error}</Alert>}
      {success && <Alert status='success'>{success}</Alert>}
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' value={email} onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Signup</button>
      </form>

    </div>
  )
}

export default Signup