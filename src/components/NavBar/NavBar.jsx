import { Link } from 'react-router-dom'
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
        <img src="https://i.imgur.com/IvuLea5.png"></img>
      </div>
      <div className="nav-links">
        <Link to='/games'>All Games</Link>
        <Link to='/games/mygames'>My Games</Link>
      </div>
      <div className="user-detail">
      { user ?
        <>
          Welcome, {user.name}!
          <Link to='' onClick={handleLogOut}>Log Out</Link>
        </>
        :
        ''
      }

      </div>
    </nav>
  );
}