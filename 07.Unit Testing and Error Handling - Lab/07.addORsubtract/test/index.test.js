import { expect } from 'chai';
import { createCalculator } from '../index.js';

describe('testing calculator', function () {
  let calc;

  beforeEach(() => {
    calc = createCalculator();
  });

  it('has correct initial value', () => {
    expect(calc.get()).to.equal(0);
  });
  it('can add', () => {
    calc.add(1);
    expect(calc.get()).to.equal(1);
  });
  it('can add', () => {
    calc.add('1');
    expect(calc.get()).to.equal(1);
  });
  it('can subtract', () => {
    calc.subtract(1);
    expect(calc.get()).to.equal(-1);
  });
  it('can subtract', () => {
    calc.subtract('1');
    expect(calc.get()).to.equal(-1);
  });
});
