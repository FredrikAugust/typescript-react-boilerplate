import * as React from 'react';

import { Frontpage } from '../src/components/Frontpage';

import { store } from '../src/store';

import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router';

import { mount, ReactWrapper } from 'enzyme';

describe('Frontpage', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Frontpage />
        </MemoryRouter>
      </Provider>
    );
  });

  it('renders the heading', () => {
    expect(wrapper.contains(<h1>Hello, World!</h1>)).toBe(true);
  })

  it('renders the link to about page', () => {
    expect(wrapper.contains(<Link to='/about'>About</Link>)).toBe(true);
  });
});