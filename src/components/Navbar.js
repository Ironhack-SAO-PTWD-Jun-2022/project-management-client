import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Navbar = () => {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <h1>Project management</h1>
      <div>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          {!isLoggedIn && (
            <>
              <li><NavLink to='/signup'>Signup</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li><NavLink to='/projects'>Projects</NavLink></li>
              <li><NavLink to='/profile'>Profile</NavLink></li>
              <li><button onClick={logoutUser}>Logout</button></li>
            </>
          )}
        </ul>
      </div>

    </div>
  )
}

export default Navbar