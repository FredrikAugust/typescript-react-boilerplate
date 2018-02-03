import * as React from 'react';

import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { Frontpage } from '../components/Frontpage';
import { About } from '../components/About';

import { History } from 'history';

interface AppProps {
  history: History
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Switch>
            <Route exact path='/' component={Frontpage} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}