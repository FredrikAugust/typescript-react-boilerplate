import * as React from 'react';

import { Routes } from "./Routes";

import { ConnectedRouter } from 'connected-react-router';

import { History } from 'history';

interface AppProps {
  history: History
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Routes />
      </ConnectedRouter>
    );
  }
}