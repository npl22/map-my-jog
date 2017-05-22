import React from 'react';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <a className="nav-logo" href="/"></a>
      </li>
      <li>
        <a href="/find-route">Find Routes</a>
      </li>
      <li>
        <a href="/create-route">Create Routes</a>
      </li>
      <li>
        <a href="/home/activity-feed">Find Friends</a>
      </li>
      <li>
        <a href="/blog/">Blog</a>
      </li>
    </ul>

    <ul className="nav-login-signup">
      <li>
        <a href="/login">Log In</a>
      </li>
      <li>
        <a href="/signup">Sign Up</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
