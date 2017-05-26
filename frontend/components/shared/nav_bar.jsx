import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    let authLinks;
    if (this.props.loggedIn === false) {
      authLinks = (
        <ul className="nav-login-signup">
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      );
    } else {
      authLinks = (
        <ul className="nav-logout">
          <li onClick={this.logout}><Link to="/">Log Out</Link></li>
        </ul>
      );
    }

    return (
      <nav>
        <ul>
          <li><Link className="nav-logo" to="/"></Link></li>
          <li><Link to="/create-route">Create a Route</Link></li>
          <li><Link to="/home">My Routes</Link></li>
          <li><Link to="/blog/">Blog</Link></li>
        </ul>

        { authLinks }
      </nav>
    );
  }
}




export default NavBar;
