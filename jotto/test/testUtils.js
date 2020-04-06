import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/store/reducers';
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../src/store';


/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const sotreFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme Shallow wrapper.
 * @param {string} val - value of data-test attribute for search.
 * @returns {ShallowWrapper} 
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}