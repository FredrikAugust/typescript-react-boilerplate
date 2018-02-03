import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';

import { store, history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.querySelector('#root')
);