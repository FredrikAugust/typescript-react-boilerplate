import * as React from 'react';
import { App } from '../src/components/App';

import { shallow, ShallowWrapper } from 'enzyme';

describe('App', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it('renders app', () => {
    expect(wrapper.contains(<h1>Hello, World!</h1>)).toBe(true);
  });
});