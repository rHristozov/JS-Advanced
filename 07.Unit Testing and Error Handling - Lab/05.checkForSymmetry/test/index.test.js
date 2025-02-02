import { expect } from 'chai';
import { isSymmetric } from '../index.js';

describe('Check for Symmetry', function () {
  it('Return false for string in arr', () => {
    expect(isSymmetric([1, 2, '5'])).to.be.false;
  });
  it('Return false for in arr', () => {
    expect(isSymmetric([1, 2, '1'])).to.be.false;
  });
  it('Return true for symmetric arr', () => {
    expect(isSymmetric([3, 2, 3])).to.be.true;
  });
  it('Return true for symmetric arr', () => {
    expect(isSymmetric([3, 2, 1, 2, 3])).to.be.true;
  });
  it('Return true for symmetric arr', () => {
    expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
  });
  it('Return true for symmetric arr', () => {
    expect(isSymmetric(['a'])).to.be.true;
  });
  it('Return true for symmetric arr', () => {
    expect(isSymmetric(['a', 'a'])).to.be.true;
  });
  it('Return true for symmetric arr', () => {
    expect(isSymmetric([3, 3])).to.be.true;
  });
  it('Return true for symmetric arr', () => {
    expect(isSymmetric(['a', 2, 'a'])).to.be.true;
  });
  it('Return true for symmetric arr', () => {
    expect(isSymmetric([2])).to.be.true;
  });
  it('Return false for non-symmetric arr', () => {
    expect(isSymmetric([3, 2, 1])).to.be.false;
  });
  it('Return false for not arr input', () => {
    expect(isSymmetric('5')).to.be.false;
  });
  it('Return false for not arr input', () => {
    expect(isSymmetric('dasd')).to.be.false;
  });
  it('Return false for not arr input', () => {
    expect(isSymmetric('dasdd')).to.be.false;
  });
  it('Return false for not arr input', () => {
    expect(isSymmetric(5)).to.be.false;
  });
  it('Return true for empty arr', () => {
    expect(isSymmetric([])).to.be.true;
  });
  it('Return true for negative numbers', () => {
    expect(isSymmetric([-1, -2, -1])).to.be.true;
  });
  it('Return false for not arr input', () => {
    expect(isSymmetric()).to.be.false;
  });
  it('Return false for not arr input', () => {
    expect(isSymmetric({})).to.be.false;
  });
});
