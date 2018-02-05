import * as React from 'react';

import { Frontpage } from '../components/Frontpage';
import { About } from '../components/About';

import { Route, Switch } from 'react-router';

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={Frontpage} />
    <Route path='/about' component={About} />
  </Switch>
);