import * as React from 'react';

import { Link } from 'react-router-dom';

import { State } from '../reducers/reducer';
import { connect, Dispatch } from 'react-redux';

import { ActionCreators } from '../reducers/reducer';
import { ReactEventHandler } from 'react';
import { ActionCreator } from '../actions/action-creator';
import { RootState } from '../store';

import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import List, { ListItem } from 'material-ui/List';

interface FrontpageProps {
  testValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FrontpageComponent = ({ testValue, onChange }: FrontpageProps) => (
  <div>
    <Typography type='headline'>
      Hello, World!
    </Typography>
    <Typography type='body1'>
      { testValue }
    </Typography>
    <Input id="testValue" value={ testValue } onChange={ onChange } />
    <List>
      <ListItem>
        <Typography type='body1'>
          <Link to='/about'>About</Link>
        </Typography>
      </ListItem>
    </List>
  </div>
);

export const Frontpage = connect(
  ({ defaultReducer }: RootState) => ({
    testValue: defaultReducer.testValue
  }),
  (dispatch: Dispatch<State>) => ({
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(ActionCreators.TestAction.create(e.target.value))
  })
)(FrontpageComponent);