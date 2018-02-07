import { ActionCreator } from '../src/actions/action-creator';
import reducer, { ActionCreators, Action, State, initialState } from '../src/reducers/reducer';

describe('defaultReducer', () => {
  let state: State;

  beforeEach(() => {
    state = initialState;
  });

  describe('TestAction', () => {
    const action: Action = ActionCreators.TestAction.create('test value');

    it('correctly updates the state', () => {
      const updatedState: State = reducer(initialState, action);
      expect(updatedState).toEqual({ testValue: 'test value' });
    });
  });

  it("doesn't do anything if invalid action", () => {
    const action = { type: 'blabla', payload: 'whatevs' };
    // @ts-ignore
    const updatedState: State = reducer(initialState, action);
    expect(updatedState).toEqual(initialState);
  });
});