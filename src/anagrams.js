import { isEqual } from 'lodash';
import { getLetterCount } from './letter-count';

export const isAnagram = (str1, str2) => {
  const str1LetterCount = getLetterCount(str1);
  const str2LetterCount = getLetterCount(str2);

  return isEqual(str1LetterCount, str2LetterCount);
};
