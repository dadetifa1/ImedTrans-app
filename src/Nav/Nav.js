import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service';

function Nav(props) {
  const [remountCount, setRemountCount] = useState(0);

  const handleLogoutClick = () => {
    TokenService.clearAuthToken();
    setRemountCount(remountCount + 1);
  };

  const renderLogoutLink = () => {
    return (
      <div className="Header__logged-in">
        <Link onClick={handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  };

  const renderLoginLink = () => {
    return (
      <div className="Header__not-logged-in">
        <Link to="/registration">Register</Link>
        {' - '}
        <Link to="/login">Log in</Link>
      </div>
    );
  };

  return (
    <nav className="topnav">
      {props.refreshafterlogin || ''}
      <Link className="links" to={'/'}>
        Home
      </Link>
      {/* <Link to={'/registration'}>Registration</Link> */}
      <Link to={'/transportEntry'}>Request Transport</Link>
      <Link to={'/transportReport'}>TransportReport</Link>

      {TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()}
    </nav>
  );
}

export default Nav;
