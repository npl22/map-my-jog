import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import NavBar from './shared/nav_bar';
import SplashPage from './splash_page/splash_page';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import HomepageContainer from './homepage/homepage_container';
import CreateRouteContainer from './create_route/create_route_container';
import Footer from './shared/footer';

const App = () => (
  <div>
    <NavBar />
    <Route exact path="/" component={SplashPage}></Route>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/home" component={HomepageContainer} />
      <ProtectedRoute path="/create-route" component={CreateRouteContainer} />
    </Switch>
    <Footer />
  </div>
);

export default App;
