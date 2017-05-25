import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link className="nav-logo" to="/"></Link>
      </li>
      <li>
        <Link to="/create-route">Create a Route</Link>
      </li>
      <li>
        <Link to="/home">My Routes</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>

    <ul className="nav-login-signup">
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
