import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav class="topnav">
      <Link className="links" to={'/'}>
        Home
      </Link>
      <Link to={'/registration'}>Registration</Link>
      <Link to={'/transportEntry'}>Request Transport</Link>
      <Link to={'/transportReport'}>TransportReport</Link>
    </nav>
  );
}
