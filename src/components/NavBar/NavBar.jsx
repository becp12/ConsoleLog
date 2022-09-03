import { Link, NavLink } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import './NavBar.css';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
      userService.logOut();
      setUser(null);
    }

  return (
    <nav className="navigation">
      <div>
        {/* Potential for a form / search bar */}
      </div>
      <div className="nav-logo">
        <img src="https://i.imgur.com/IvuLea5.png" alt="gaming controller"></img>
      </div>
      { user ?
        <>
          <div className="nav-links">
            <NavLink to='games/all' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>All Games</NavLink>
            <NavLink to='games/mycollection' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Collection</NavLink>
          </div>
          <div className="user-detail">
            Welcome, {user.name}!
            <Link to='' onClick={handleLogOut}>Log Out</Link>
          </div>
        </>
      :
        ''
      }


    </nav>
  );
}