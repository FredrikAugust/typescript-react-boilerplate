import { ActionCreator } from '../actions/action-creator';

export const ActionCreators = {
  TestAction: new ActionCreator<'TestAction', string>('TestAction')
};

export type Action = typeof ActionCreators[keyof typeof ActionCreators];

export type State = {
  readonly testValue: string;
};

export const initialState: State = {
  testValue: ''
}

export default function rootReducer(state: State = initialState, action: Action): State {
  // This can hold some of the items in state, but doesn't require all
  let partialState: Partial<State> | undefined;

  switch(action.type) {
    case ActionCreators.TestAction.type:
      partialState = { testValue: action.payload };
      break;
  }

  // If dirty partial, merge with state
  return partialState != null ? { ...state, ...partialState } : state;
}