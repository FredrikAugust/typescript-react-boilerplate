import * as React from 'react';

import { Frontpage } from '../src/components/Frontpage';

import { Link } from 'react-router-dom';

import { shallow, ShallowWrapper } from 'enzyme';

describe('Frontpage', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Frontpage />
    );
  });

  it('renders the heading', () => {
    expect(wrapper.contains(<h1>Hello, World!</h1>)).toBe(true);
  })

  it('renders the link to about page', () => {
    expect(wrapper.contains(<Link to='/about'>About</Link>)).toBe(true);
  });
});