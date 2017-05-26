import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class HeroPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentWillUpdate() {
    if (this.state.username === "guest") {
      this.props.history.push('/create-route');
    }
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.guestLogin({user: {username: "guest", password: "password"}})
      .then(() => this.props.history.push('/create-route'));
  }

  render() {
    return (
      <section id="splash-page-hero">
        <div className="hero-img-content">
          <h1>Make Every Mile Count,</h1>
          <h1>join free today</h1>
          <p>
            You pound the pavement, we provide the motivation. Plan each stride and <br />learn from every route with MapMyJog.
          </p>
          <div id="signup">
            <Link to="/signup" className="button" id="splash-sign-up-btn">
              Sign Up
            </Link>
            &nbsp;&nbsp; or &nbsp;&nbsp;
            <a href="/#/" className="button" id="splash-guest-btn"
              onClick={this.handleGuestLogin}>
              Log In As Guest
            </a>
        </div>
        <div className="login-prompt">
          Already a member? <Link className="button" id="splash-login-btn" to="/login">Log in</Link>
            <span className="terms-of-service">
              <p>
                By joining MapMyJog, you agree to the&nbsp;
                <a href="#">Terms &amp; Conditions</a>
                 &nbsp;and&nbsp;
                <a href="#">Privacy Policy</a>
              </p>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(HeroPanel);
