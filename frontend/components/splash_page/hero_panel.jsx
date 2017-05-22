import React from 'react';

const HeroPanel = () => (
  <section id="homepage-hero">
      <div className="hero-img-content">
            <h1>Make Every Mile Count,</h1>
            <h1>join free today</h1>
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
              <span className="terms-of-service">
                <p>
                    By joining JogLog, you agree to the&nbsp;
                    <a href="#">Terms &amp; Conditions</a>
                     &nbsp;and&nbsp;
                    <a href="#">Privacy Policy</a>
                </p>
              </span>
          </div>
      </div>
  </section>
);

export default HeroPanel;
