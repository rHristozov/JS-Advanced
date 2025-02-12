import planYourTrip from '../planYourTrip.js';
import { expect } from 'chai';

describe('Tests Plan Your Trip', function () {
  describe('choosingDestination', function () {
    it('Wrong input', function () {
      expect(() =>
        planYourTrip.choosingDestination('Ski Resort', 'Winter', 2000)
      ).to.throw('Invalid Year!');
      expect(() =>
        planYourTrip.choosingDestination('string', 'Winter', 2024)
      ).to.throw('This destination is not what you are looking for.');
      expect(
        planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)
      ).to.equal(
        'Great choice! The Winter is the perfect time to visit the Ski Resort.'
      );
      expect(
        planYourTrip.choosingDestination('Ski Resort', 'Spring', 2024)
      ).to.equal(
        'Consider visiting during the Winter for the best experience at the Ski Resort.'
      );
    });
  });
  describe('exploreOptions', function () {
    it('Input testing', function () {
      expect(() => planYourTrip.exploreOptions('string', 2)).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.exploreOptions(2, 2)).to.throw(
        'Invalid Information!'
      );
      expect(() =>
        planYourTrip.exploreOptions(
          ['Skiing', 'Snowboarding', 'Winter Hiking'],
          'string'
        )
      ).to.throw('Invalid Information!');
      expect(() =>
        planYourTrip.exploreOptions(
          ['Skiing', 'Snowboarding', 'Winter Hiking'],
          -2
        )
      ).to.throw('Invalid Information!');
      expect(() => planYourTrip.exploreOptions([], 0)).to.throw(
        'Invalid Information!'
      );
      expect(() =>
        planYourTrip.exploreOptions(
          ['Skiing', 'Snowboarding', 'Winter Hiking'],
          5
        )
      ).to.throw('Invalid Information!');
      expect(() =>
        planYourTrip.exploreOptions(
          ['Skiing', 'Snowboarding', 'Winter Hiking'],
          '5'
        )
      ).to.throw('Invalid Information!');
      expect(() =>
        planYourTrip.exploreOptions(
          ['Skiing', 'Snowboarding', 'Winter Hiking'],
          2.1
        )
      ).to.throw('Invalid Information!');
      expect(
        planYourTrip.exploreOptions(
          ['Skiing', 'Snowboarding', 'Winter Hiking'],
          1
        )
      ).to.equal('Skiing, Winter Hiking');
    });
  });
  describe('estimateExpenses', function () {
    it('Input validate', function () {
      expect(() => planYourTrip.estimateExpenses('string', 20)).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses(-1, 20)).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses(0, 20)).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses(20, 'string')).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses('0', 1)).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses([1], 1)).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses(1, '1')).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses(1, [1])).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses(1, -20)).to.throw(
        'Invalid Information!'
      );
      expect(() => planYourTrip.estimateExpenses(1, 0)).to.throw(
        'Invalid Information!'
      );
      expect(planYourTrip.estimateExpenses(2, 20)).to.equal(
        'The trip is budget-friendly, estimated cost is $40.00.'
      );
      expect(planYourTrip.estimateExpenses(2, 250)).to.equal(
        'The trip is budget-friendly, estimated cost is $500.00.'
      );
      expect(planYourTrip.estimateExpenses(2, 500)).to.equal(
        'The estimated cost for the trip is $1000.00, plan accordingly.'
      );
      expect(planYourTrip.estimateExpenses(500, 2)).to.equal(
        'The estimated cost for the trip is $1000.00, plan accordingly.'
      );
    });
  });
});
