import { expect } from 'chai';
import { sum } from '../index.js';

describe('Sum numbers', function () {
  it('returns 0 for empty array', () => {
    expect(sum([])).to.equal(0);
  });
  it('works with numbers', () => {
    expect(sum([1, 2, 3])).to.equal(6);
  });
});
