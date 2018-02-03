import * as React from 'react';

import { Frontpage } from '../src/components/Frontpage';
import { About } from '../src/components/About';
import { Routes } from '../src/components/Routes';

import { mount, ReactWrapper } from 'enzyme';

import { Provider } from 'react-redux';
import { store, history } from '../src/store';

import { MemoryRouter } from 'react-router';

describe('Routing', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
  })

  describe('"/" - Frontpage', () => {
    it('mounts', () => {
      expect(wrapper.containsMatchingElement(<Frontpage />)).toBe(true);
    });

    it("doesn't mount About", () => {
      expect(wrapper.containsMatchingElement(<About />)).toBe(false);
    });
  });

  describe('"/about" - About', () => {
    beforeEach(() => {
      // Click the navigation
      wrapper.find('a[href="/about"]').first().simulate('click', { button: 0 });
    });

    it('mounts', () => {
      expect(wrapper.containsMatchingElement(<About />)).toBe(true);
    });

    it("doesn't mount Frontpage", () => {
      expect(wrapper.containsMatchingElement(<Frontpage />)).toBe(false);
    });
  })
});