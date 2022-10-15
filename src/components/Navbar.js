import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <h1>Project management</h1>
      <div>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar