import { expect } from 'chai';
import homeGardener from '../homeGardener.js';

describe('Home Gardener', function () {
  describe('plantCareInstructions', function () {
    it('Invalid input', function () {
      expect(() => homeGardener.plantCareInstructions(1)).to.throw(
        'Invalid plant type!'
      );
      expect(() => homeGardener.plantCareInstructions('1')).to.throw(
        'Invalid plant type!'
      );
      expect(() => homeGardener.plantCareInstructions('')).to.throw(
        'Invalid plant type!'
      );
      expect(() => homeGardener.plantCareInstructions(['tru'])).to.throw(
        'Invalid plant type!'
      );
    });
    it('happy path', function () {
      expect(homeGardener.plantCareInstructions('succulent')).to.equal(
        'Succulents require minimal watering, indirect sunlight, and well-draining soil.'
      );
      expect(homeGardener.plantCareInstructions('vegetable')).to.equal(
        'Vegetables need full sun, regular watering, and nutrient-rich soil.'
      );
      expect(homeGardener.plantCareInstructions('flowering')).to.equal(
        'Flowering plants require moderate watering, occasional fertilization, and pruning.'
      );
      expect(homeGardener.plantCareInstructions('tree')).to.equal(
        'Trees need deep watering, proper spacing, and regular mulching.'
      );
    });
  });
  describe('availablePlants', function () {
    it('Invalid input', function () {
      expect(() => homeGardener.availablePlants('str', 2)).to.throw(
        'Invalid Information!'
      );
      expect(() => homeGardener.availablePlants(2, 2)).to.throw(
        'Invalid Information!'
      );
      expect(() => homeGardener.availablePlants([], 2)).to.throw(
        'Invalid Information!'
      );
      expect(() => homeGardener.availablePlants([1, 2], 0)).to.throw(
        'Invalid Information!'
      );
      expect(() => homeGardener.availablePlants([1, 2], 'asd')).to.throw(
        'Invalid Information!'
      );
      expect(() => homeGardener.availablePlants([1, 2], [0])).to.throw(
        'Invalid Information!'
      );
      expect(() => homeGardener.availablePlants([1, 2], true)).to.throw(
        'Invalid Information!'
      );
      expect(() => homeGardener.availablePlants([3, 4, 5, 6, 7], -3)).to.throw(
        'Invalid Information!'
      );
    });
    it('happy path', function () {
      expect(homeGardener.availablePlants([30, 20, 10, 60], 25)).to.equal(
        'There are 2 plants suitable for your garden height criteria!'
      );
      expect(homeGardener.availablePlants([30, 20, 10, 60], 70)).to.equal(
        'There are 4 plants suitable for your garden height criteria!'
      );
      expect(homeGardener.availablePlants([30, 20, 10, 60], 5)).to.equal(
        'There are 0 plants suitable for your garden height criteria!'
      );
    });
  });
  describe('gardenExpenses', function () {
    it('Input validate', function () {
      expect(() =>
        homeGardener.gardenExpenses(['shovel'], ['herb seeds'], 2)
      ).to.throw('Invalid Information!');
      expect(() =>
        homeGardener.gardenExpenses(['shovel'], 'herb seeds', true)
      ).to.throw('Invalid Information!');
      expect(() =>
        homeGardener.gardenExpenses('shovel', ['herb seeds'], false)
      ).to.throw('Invalid Information!');
      expect(() => homeGardener.gardenExpenses([], ['herb seeds'], 2)).to.throw(
        'Invalid Information!'
      );
      expect(() => homeGardener.gardenExpenses(['shovel'], [], 2)).to.throw(
        'Invalid Information!'
      );
    });
    it('happy path', function () {
      expect(
        homeGardener.gardenExpenses(
          ['shovel', 'shovel'],
          ['vegetable seeds', 'vegetable seeds'],
          false
        )
      ).to.equal('You spent $60.00 on tools and seeds!');
      expect(
        homeGardener.gardenExpenses(
          ['shovel', 'rake', 'watering can'],
          ['vegetable seeds', 'flower seeds', 'herb seeds'],
          false
        )
      ).to.equal('You spent $66.00 on tools and seeds!');
      expect(
        homeGardener.gardenExpenses(
          ['shovel', 'shovel'],
          ['vegetable seeds', 'vegetable seeds'],
          true
        )
      ).to.equal('You spent $54.00 on tools and seeds with a 10% discount!');
    });
  });
});
