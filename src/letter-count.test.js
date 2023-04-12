import { expect } from 'chai';
import { getLetterCount } from './letter-count';

describe('getLetterCount - basic functionality', () => {
  it('returns an empty object when passed an empty string', () => {
    const expected = {};
    const actual = getLetterCount('');
    expect(actual).to.deep.equal(expected);
  });

  it('should return the right letter count for a word with only one of each letter', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });

  it('should return the correct letter count for words with repetitive letters', () => {
    const expected = { b: 1, e: 2, t: 2, r: 1 };
    const actual = getLetterCount('better');
    expect(actual).to.deep.equal(expected);
  });
});
