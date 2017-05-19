import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

// import NavBar from './nav_bar'
import SplashPage from './splash_page';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <Route exact path="/" component={SplashPageContainer}></Route>
    <Switch>

    </Switch>
  </div>
);

export default App;


// <div>
//   <header>
//     <NavBar />
//     <Route exact path="/" component={SplashPageContainer}></Route>
//   </header>
//   <Switch>
//     <AuthRoute path="/login" component={SessionFormContainer} />
//     <AuthRoute path="/signup" component={SessionFormContainer} />
//   </Switch>
// </div>
