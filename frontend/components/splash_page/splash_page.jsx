import React from 'react';

import HeroPanel from './hero_panel';
import FeaturePanel from './feature_panel';
import CitiesPanel from './cities_panel';

// <div id="signup" style="position: relative;">

const SplashPage = () => (
  <section id="page_content" className="content">
    <section id="homepage_hero">
        <div className="content">
              <h1 className="welcome-message">
                  Make Every Mile Count, <br />
                  join free today
              </h1>
            <p>
                You pound the pavement, we provide the motivation. Plan each stride and <br />learn from every route with MapMyRun.
            </p>
            <div id="signup">
                <a className="button large facebook" href="https://www.mapmyrun.com/auth/signup/" id="home_facebook_signup">
                    Sign up with Facebook
                </a>
            </div>
            <div className="login_prompt">
                Already a member? <a id="login_btn" className="button dk" href="https://www.mapmyrun.com/auth/login/">Log in</a>
            </div>
            <p>
                By joining JogLog, you agree to the
                <a href="#">Terms &amp; Conditions</a>
                 and
                <a href="#">Privacy Policy</a>
            </p>
        </div>
    </section>
    <section id="features">
        <div className="container">
            <div className="feature">
                <h2>Map Your Route</h2>
                <p>
                    Know where you're going, see where you've been. We have over 70 million routes to chose from - or be bold and create your own.
                </p>
                <a href="/routes/create/">Check it out <i className="arrow-right"></i></a>
            </div>
            <div className="feature">
                <h2>Track Your Activity</h2>
                <p>
                    Record activity with our mobile apps, import data from third-party devices, enter workouts manually and never miss a beat.
                </p>
                <a href="/app/">Coming Soon <i className="arrow-right"></i></a>
            </div>
            <div className="feature">
                <h2>Log Your Food</h2>
                <p>
                    Fitness isn't just an activity, it's a lifestyle. Keep track of what you eat alongside your workouts to get a complete picture of your health.
                </p>
                <a href="/nutrition/">Coming Soon <i className="arrow-right"></i></a>
            </div>
            <div className="feature">
                <h2>Share with Friends</h2>
                <p>
                    Add a social twist to your exercise routine. Get extra encouragement, cheer on your buddies or start a little friendly competition.
                </p>
                <a href="/people/friends/">Check it out <i className="arrow-right"></i></a>
            </div>
        </div>
    </section>
    <section id="local">
        <div className="container SL_swap" id="homepage_cities_list">
            <h3>FIND GREAT RUNS IN THESE POPULAR CITIES</h3>
            <div className="home-column-container">
                <div className="city-columns">
                    <ul>
                        <li><a href="/us/new-york-city-ny/">New York, NY</a></li>
                        <li><a href="/us/manhattan-ny/">Manhattan, NY</a></li>
                        <li><a href="/us/san-francisco-ca/">San Francisco, CA</a></li>
                        <li><a href="/us/austin-tx/">Austin, TX</a></li>
                        <li><a href="/us/denver-co/">Denver, CO</a></li>
                        <li><a href="/us/seattle-wa/">Seattle, WA</a></li>
                    </ul>
                </div>
                <div className="city-columns">
                    <ul>
                        <li><a href="/us/san-diego-ca/">San Diego, CA</a></li>
                        <li><a href="/us/portland-or/">Portland, OR</a></li>
                        <li><a href="/us/chicago-il/">Chicago, IL</a></li>
                        <li><a href="/us/honolulu-hi/">Honolulu, HI</a></li>
                        <li><a href="/us/tallahassee-fl/">Tallahassee, Fl</a></li>
                        <li><a href="/us/boston-ma/">Boston, MA</a></li>
                    </ul>
                </div>
                <div className="city-columns">
                    <ul>
                        <li><a href="/ie/dublin-l/">Dublin, Ireland</a></li>
                        <li><a href="/nz/christchurch-canterbury/">Christchurch, New Zealand</a></li>
                        <li><a href="/ca/vancouver-british-columbia/">Vancouver, Canada</a></li>
                        <li><a href="/gb/edinburgh-sct/">Edinburgh, Scotland</a></li>
                        <li><a href="/us/">United States</a></li>
                        <li><a href="/us/">Find Your City</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  </section>
);

export default SplashPage;
