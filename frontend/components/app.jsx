import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import NavBar from './shared/nav_bar';
import SplashPageContainer from './splash_page/splash_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import HomepageContainer from './homepage/homepage_container';
import CreateRouteContainer from './create_route/create_route_container';
import Footer from './shared/footer';

const App = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={SplashPageContainer} />
    <Switch>
      <ProtectedRoute path="/create-route" component={CreateRouteContainer} />
      <ProtectedRoute path="/home" component={HomepageContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
