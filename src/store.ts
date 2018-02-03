import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import createHistory from 'history/createBrowserHistory';

import {
  default as defaultReducer,
  State as DefaultState
} from './reducers/reducer';

import { History } from 'history';
import { Middleware } from 'redux';

/**
 * This is the root state (the state of all states) in the application.
 */
export type RootState = {
  routing: RouterState;
  defaultState: DefaultState
}

/**
 * The root reducer taking care of all reductions.
 */
const rootReducer = combineReducers<RootState>({
  routing: routerReducer,
  defaultReducer
});

/**
 * This is used when restarting the application. This will
 * set the state to a blank state.
 */
const recoverState = (): RootState => ({} as RootState);

/**
 * Setup middleware object. This will be put in the store so redux
 * can manage the browser history state.
 */
export const history: History = createHistory();
const historyMiddleware: Middleware = routerMiddleware(history);

/**
 * The store object which is what is keeping the state of the application.
 */
export const store = createStore(
  rootReducer,
  recoverState(),
  applyMiddleware(thunk, historyMiddleware)
);

/**
 * So we know what functions are available to us.
 * With this `getState` will know what it can/will return.
 */
export type Store = {
  getState: () => RootState,
  dispatch: Function
}