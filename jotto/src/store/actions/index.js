export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *    and (conditionally) CORRECT
 * @function correctGuess
 * @param {string} guessedWord - guessed word.
 * @returns {object} - Redux Thunk function.
 */
export function correctGuess(guessWord) {
  return function(dispatch, getState) {

  };
};