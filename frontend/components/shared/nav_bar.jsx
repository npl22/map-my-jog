import React from 'react';

const NavBar = () => (
  <nav>
    <a class="nav-logo" href="/">
      <h1>MapMyRun</h1>
    </a>

    <ul>
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

    <ul>
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
