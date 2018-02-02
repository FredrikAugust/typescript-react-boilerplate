import * as React from 'react';
import { App } from '../src/components/App';

import { shallow, ShallowWrapper } from 'enzyme';

describe('App', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App framework="TestFramework" compiler="Typescript" />
    );
  });

  it('has correct props', () => {
    expect(wrapper.contains(<h1>OK.</h1>)).toBe(true);
  });
});