import { ActionCreator } from '../actions/action-creator';

/**
 * Object with all of our `ActionCreator`s; the first template has to be
 * the same as the parameter.
 */
export const ActionCreators = {
  TestAction: new ActionCreator<'TestAction', string>('TestAction')
};

/**
 * A type containing all of the possible actions that can come from `ActionCreator`.
 */
export type Action = typeof ActionCreators[keyof typeof ActionCreators];

/**
 * The root state of the application.
 */
export type State = {
  readonly testValue: string;
};

/**
 * The initial state that will be used when the program is started.
 * 
 * This will also be used if the state is reset.
 */
export const initialState: State = {
  testValue: ''
}
/**
 * The reducer of all reducers. Will return a new state that is changed to reflect the 
 * wishes of the `Action` passed in.
 * 
 * @export
 * @param {State} [state=initialState] 
 * @param {Action} action 
 * @returns {State} Returns a **new** updated state. The state is never modified.
 */
export default function rootReducer(state: State = initialState, action: Action): State {
  // This can hold some of the items in state, but doesn't require all
  let partialState: Partial<State> | undefined;

  switch (action.type) {
    case ActionCreators.TestAction.type:
      partialState = { testValue: action.payload };
      break;
  }

  // If dirty partial, merge with state
  return partialState != null ? { ...state, ...partialState } : state;
}