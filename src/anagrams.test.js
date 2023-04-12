import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {
  it('returns true when two known anagrams are passed in', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });
});
