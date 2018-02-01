import * as React from 'react';

export interface AppProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <h1>Hello, World.</h1>
        <p>This website is made with { this.props.framework } and compiled with { this.props.compiler }.</p>
      </div>
    );
  }
}