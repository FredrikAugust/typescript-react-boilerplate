import * as React from 'react';

import { About } from '../src/components/About';

import { Link } from 'react-router-dom';

import { shallow, ShallowWrapper } from 'enzyme';

describe('About', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <About />
    );
  });

  it('renders the heading', () => {
    expect(wrapper.contains(<h1>Welcome to the about page!</h1>)).toBe(true);
  })

  it('renders the link to about page', () => {
    expect(wrapper.contains(<Link to='/'>Home</Link>)).toBe(true);
  });
})