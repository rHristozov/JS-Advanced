import petAdoptionAgency from '../petAdoptionAgency.js';
import { expect } from 'chai';

describe('Tests petAdoptionAgency', function () {
  describe('isPetAvailable', function () {
    it('Wrong Input', function () {
      expect(() => petAdoptionAgency.isPetAvailable([], 11, true)).to.throw(
        'Invalid input'
      );
      expect(() =>
        petAdoptionAgency.isPetAvailable('Puffy', '11', true)
      ).to.throw('Invalid input');
      expect(() => petAdoptionAgency.isPetAvailable('Puffy', 11, 1)).to.throw(
        'Invalid input'
      );
    });
    it('Testing vaccines', function () {
      expect(petAdoptionAgency.isPetAvailable('Puffy', 0, false)).to.equal(
        'Sorry, there are no Puffy(s) available for adoption at the agency.'
      );
      expect(petAdoptionAgency.isPetAvailable('Puffy', -1, false)).to.equal(
        'Sorry, there are no Puffy(s) available for adoption at the agency.'
      );
      expect(petAdoptionAgency.isPetAvailable('Puffy', 0, true)).to.equal(
        'Sorry, there are no Puffy(s) available for adoption at the agency.'
      );
      expect(petAdoptionAgency.isPetAvailable('Puffy', 0, true)).to.equal(
        'Sorry, there are no Puffy(s) available for adoption at the agency.'
      );
    });
    it('Testing happy path', function () {
      expect(petAdoptionAgency.isPetAvailable('Puffy', 2, true)).to.equal(
        'Great! We have 2 vaccinated Puffy(s) available for adoption at the agency.'
      );
      expect(petAdoptionAgency.isPetAvailable('Puffy', 2, false)).to.equal(
        'Great! We have 2 Puffy(s) available for adoption, but they need vaccination.'
      );
    });
  });
  describe('getRecommendedPets', function () {
    it('Validate input', function () {
      expect(() => petAdoptionAgency.getRecommendedPets(2, 'Traits')).to.throw(
        'Invalid input'
      );
      expect(() => petAdoptionAgency.getRecommendedPets([], 2)).to.throw(
        'Invalid input'
      );
    });
    it('Sorry path', function () {
      expect(
        petAdoptionAgency.getRecommendedPets(
          [{ name: 'Puffy', traits: 'Calm' }],
          'Playful'
        )
      ).to.equal(
        'Sorry, we currently have no recommended pets with the desired traits: Playful.'
      );
    });
    it('Happy path', function () {
      expect(
        petAdoptionAgency.getRecommendedPets(
          [{ name: 'Puffy', traits: 'Calm' }],
          'Calm'
        )
      ).to.equal('Recommended pets with the desired traits (Calm): Puffy');
    });
  });
  describe('adoptPet', function () {
    it('Invalid input', function () {
      expect(() => petAdoptionAgency.adoptPet('Puffy', 2)).to.throw(
        'Invalid input'
      );
    });
    it('Invalid input', function () {
      expect(() => petAdoptionAgency.adoptPet(2, 'Puffy')).to.throw(
        'Invalid input'
      );
    });
    it('Happy path', function () {
      expect(petAdoptionAgency.adoptPet('Puffy', 'Ivan')).to.equal(
        'Congratulations, Ivan! You have adopted Puffy from the agency. Enjoy your time with your new furry friend!'
      );
    });
  });
});
