import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  test('returns corret count when there are no matching letters', () => {
    const lettersMatchCount = getLetterMatchCount('bones', secretWord);

    expect(lettersMatchCount).toBe(0);
  });

  test('returns the corret count where there are 3 matching letters', () => {
    const lettersMatchCount = getLetterMatchCount('train', secretWord);

    expect(lettersMatchCount).toBe(3);
  });

  test('returns corret count when there are duplicate letters in the guess', () => {
    const lettersMatchCount = getLetterMatchCount('park', secretWord);

    expect(lettersMatchCount).toBe(3);
  });
});