import * as React from 'react';

import { Link } from 'react-router-dom';

import { State } from '../reducers/reducer';
import { connect, Dispatch } from 'react-redux';

import { ActionCreators } from '../reducers/reducer';
import { ReactEventHandler } from 'react';
import { ActionCreator } from '../actions/action-creator';
import { RootState } from '../store';

interface FrontpageProps {
  testValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FrontpageComponent = ({ testValue, onChange }: FrontpageProps) => (
  <div>
    <h1>Hello, World!</h1>
    <p>{ testValue }</p>
    <input value={ testValue } onChange={ onChange } />
    <ul>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </div>
);

export const Frontpage = connect(
  (state: any) => ({
    testValue: state.defaultReducer.testValue
  }),
  (dispatch: Dispatch<State>) => ({
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(ActionCreators.TestAction.create(e.target.value))
  })
)(FrontpageComponent);