import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup/
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props}/>);
  if(state) wrapper.setState(state);
  return wrapper;
}



/**
 * Return ShallowWrapper containg node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

test('renders withou error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');

  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');

  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0)
});

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'increment-button');

  //find button and click
  button.simulate('click');

  //find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking button decrement counter display', () => {
  const counter = 9;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'decrement-button');

  button.simulate('click');

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.text()).toContain(counter - 1);
});

describe('Test message error', () => {
  test('counter can not goes bellow 0', () => {
    let counter = 0;
    let error = false;
    const wrapper = setup(null, { counter, error });
    const button = findByTestAttr(wrapper, 'decrement-button');
  
    button.simulate('click');
  
    const counterDisplay = findByTestAttr(wrapper, 'counter-display-error');
    expect(counterDisplay.exists()).toBeTruthy();
  });
  
  test('if counter > 0, remove error', () => {
  let error = true;
  const wrapper = setup(null, { error });
  const Incrementbutton = findByTestAttr(wrapper, 'increment-button');

  Incrementbutton.simulate('click');
  const counterDisplayError = findByTestAttr(wrapper, 'counter-display-error');

  expect(counterDisplayError.exists()).toBeFalsy();
  });
});