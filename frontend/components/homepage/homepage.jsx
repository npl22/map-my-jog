import React from 'react';

const Homepage = ({ logout }) => (
  <div>
    <h1>Homepage, you are logged in</h1>
    <button onClick={logout}>Log Out</button>
  </div>
);

export default Homepage;
