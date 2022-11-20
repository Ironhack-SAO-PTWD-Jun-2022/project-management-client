import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Navbar = () => {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <div className="navbar bg-dark">
      <h1 className="brand text-danger">Project management</h1>
      <div>
        <ul className="d-flex">
        <li className='nav-item'><NavLink to='/' className="nav-link text-light">Home</NavLink></li>
          {!isLoggedIn && (
            <>
              <li className="btn btn-light"><NavLink to='/signup'>Signup</NavLink></li>
              <li><NavLink to='/login' className="nav-link text-light">Login</NavLink></li>
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