import * as React from 'react';

import { Root } from "./Root";

import { ConnectedRouter } from 'connected-react-router';

import { History } from 'history';

interface AppProps {
  history: History
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Root />
      </ConnectedRouter>
    );
  }
}