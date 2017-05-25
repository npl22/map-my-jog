import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/home');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  guestLogin(e) {
    e.preventDefault();
    const user = { username: 'guest', password: 'password' };
    this.props.guestLogin({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    if (this.props.errors.length < 1) return;
    return(
      <ul className='errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const formType = this.props.formType;
    return (
      <div className="session-form-container">
        <h2>Please { formType } to see more</h2>

        <form onSubmit={this.handleSubmit}>

          <p>or {this.navLink()}</p>

          { this.renderErrors() }

          <div className="session-form">
            <button className='login guest-login'
                    onClick={this.guestLogin}>Login as Guest</button>

            <br/>

            <div className="or-divider">
              <span className="horizontal-line"></span>
              <span id="or-divider-text">or</span>
              <span className="horizontal-line"></span>
            </div>

            <br/>

            <input id="username" type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="session-form-input"
              placeholder="Username"
            />

            <br/>

            <input id="password" type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="session-form-input"
              placeholder="Password"
            />

            <br/>

            <input className='login'
                   type="submit"
                   value={ `${formType}` } />
          </div>

        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
