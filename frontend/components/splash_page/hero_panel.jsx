import React from 'react';

const HeroPanel = () => (
  <section id="homepage-hero">
      <div className="content">
            <h1 className="welcome-message">
                Make Every Mile Count, <br />
                join free today
            </h1>
          <p>
              You pound the pavement, we provide the motivation. Plan each stride and <br />learn from every route with MapMyRun.
          </p>
          <div id="signup">
              <a href="#" className="button" id="home-sign-up-btn">
                  Sign Up
              </a>
          </div>
          <div className="login-prompt">
              Already a member? <a className="button" id="home-login-btn" href="#">Log in</a>
          </div>
          <p>
              By joining JogLog, you agree to the
              <a href="#">Terms &amp; Conditions</a>
               and
              <a href="#">Privacy Policy</a>
          </p>
      </div>
  </section>
);

export default HeroPanel;
