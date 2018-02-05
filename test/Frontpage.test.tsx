import * as React from 'react';

import { Frontpage, FrontpageComponent } from '../src/components/Frontpage';

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
    expect(wrapper.contains("Hello, World!")).toBe(true);
  })

  it('renders the link to about page', () => {
    expect(wrapper.contains(<Link to='/about'>About</Link>)).toBe(true);
  });

  describe('input', () => {
    let input;
    let paragraph;
    let frontpageWrapper: ReactWrapper;
    let props: { testValue: string, onChange: jest.Mock };

    beforeEach(() => {
      props = {
        testValue: 'testing',
        onChange: jest.fn()
      };

      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <FrontpageComponent {...props} />
          </MemoryRouter>
        </Provider>
      );

      input = wrapper.find('input').first();
      paragraph = wrapper.find('p').first();
    });

    describe('user inputs something', () => {
      beforeEach(() => {
        input.simulate('change', { value: 'k' });
      });

      it('dispatches when changed', () => {
        expect(props.onChange.mock.calls.length).toBe(1);
      });
    });

    it('sets the paragraph to the state', () => {
      expect(paragraph.html()).toContain(props.testValue);
    });

    it('sets the input value to the state', () => {
      expect(input.html()).toContain(`value="${props.testValue}"`);
    });
  });
});