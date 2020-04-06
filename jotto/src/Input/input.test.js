import React from 'react';

import { shallow } from 'enzyme';

import { findByTestAttr, sotreFactory } from '../../test/testUtils';
import Input from './';

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper} 
 */
const setup = (initialState = {}) => {
  const store = sotreFactory(initialState);
  const wrapper = shallow(<Input store={store}/>);
  // pass store to be able to test components connected to redux
  
  return wrapper;
}

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    });

    test('renders input box', () => {
      
    });

    test('renders submit button', () => {
      
    });
  });

  describe('word has been guessed', () => {
    test('renders component without error', () => {

    });

    test('does not renders input box', () => {
      
    });

    test('does not renders submit button', () => {
      
    });
  });
});

describe('update state', () => {
  
});