import React from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);
