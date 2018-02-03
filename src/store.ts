import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import {
  default as defaultReducer,
  State as DefaultState
} from './reducers/reducer';

import { Middleware } from 'redux';

/**
 * This is the root state (the state of all states) in the application.
 */
export type RootState = {
  defaultState: DefaultState
}

/**
 * The root reducer taking care of all reductions.
 */
const rootReducer = combineReducers<RootState>({
  defaultReducer
});


/**
 * This is used when restarting the application. This will
 * set the state to a blank state.
 */
const recoverState = (): RootState => ({} as RootState);

/**
 * Keeps track of where you've been, so we can use back-buttons on your mouse
 * to navigate the website (amongst other things).
 * 
 * @export
 */
export const history: History = createBrowserHistory();

/**
 * The store object which is what is keeping the state of the application.
 */
export const store = createStore(
  connectRouter(history)(rootReducer),
  recoverState(),
  compose(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
);

/**
 * So we know what functions are available to us.
 * With this `getState` will know what it can/will return.
 */
export type Store = {
  getState: () => RootState,
  dispatch: Function
}