import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe.only('isAnagram - basic functionality', () => {
  it('returns true when two known anagrams are passed in', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });

  it('returns false if either of the strings has extra letters', () => {
    const expected = false;
    const actual = isAnagram('below', 'elbows');
    expect(actual).to.equal(expected);

    const actual2 = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);
  });

  it('returns false when the strings have same letters in different quantities', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');
    expect(actual).to.equal(expected);
  });
});
