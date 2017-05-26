import React from 'react';
import { Link } from 'react-router-dom';

const FeaturePanel = () => (
  <section id="splash-page-features">
      <div className="container">
          <div className="feature">
              <h2>Map Your Route</h2>
              <p>
                  Know where you're going, see where you've been. We have over 70 million routes to chose from - or be bold and create your own.
              </p>
              <Link to="/create-route">Check it out</Link>
          </div>
          <div className="feature">
              <h2>Track Your Activity</h2>
              <p>
                  Record activity with our mobile apps, import data from third-party devices, enter workouts manually and never miss a beat.
              </p>
          </div>
          <div className="feature">
              <h2>Log Your Food</h2>
              <p>
                  Fitness isn't just an activity, it's a lifestyle. Keep track of what you eat alongside your workouts to get a complete picture of your health.
              </p>
          </div>
          <div className="feature">
              <h2>Share with Friends</h2>
              <p>
                  Add a social twist to your exercise routine. Get extra encouragement, cheer on your buddies or start a little friendly competition.
              </p>
          </div>
      </div>
  </section>
);

export default FeaturePanel;
