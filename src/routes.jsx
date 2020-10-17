import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Career from './pages/Career';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/career" component={ Career } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
