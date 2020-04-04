/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guessed word.
 * @param {string} secretWord - secret word.
 * @returns {number} - Number of letters match between guessed word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));

  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
}