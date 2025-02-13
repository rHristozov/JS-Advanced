import { it } from 'mocha';
import streamingServiceSelector from '../streamingServiceSelector.js';
import { expect } from 'chai';

describe('Tests streamingServiceSelector', function () {
  describe('selectingContent(type, platform, genre) ', function () {
    it('invalid genre', function () {
      expect(() =>
        streamingServiceSelector.selectingContent('Movie', 'Netflix', 'DD')
      ).to.throw(
        'We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.'
      );
    });
    it('invalid type', function () {
      expect(() =>
        streamingServiceSelector.selectingContent('Serial', 'Netflix', 'Drama')
      ).to.throw("We currently only support 'Movie' or 'TV Show' types.");
    });
    it('happy path', function () {
      expect(
        streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Drama')
      ).to.equal(
        'You can watch this Drama Movie on Netflix. Enjoy your Drama-filled experience!'
      );
    });
  });
  describe('availablePlatforms(platforms, selectedPlatformIndex) ', function () {
    it('Invalid inputs', function () {
      expect(() =>
        streamingServiceSelector.availablePlatforms(
          ['Netflix', 'HBO', 'Disney+'],
          'asd'
        )
      ).to.throw('Invalid platform selection.');
      expect(() =>
        streamingServiceSelector.availablePlatforms(
          ['Netflix', 'HBO', 'Disney+'],
          6
        )
      ).to.throw('Invalid platform selection.');
      expect(() =>
        streamingServiceSelector.availablePlatforms(
          ['Netflix', 'HBO', 'Disney+'],
          -12
        )
      ).to.throw('Invalid platform selection.');
      expect(() =>
        streamingServiceSelector.availablePlatforms('sad', 1)
      ).to.throw('Invalid platform selection.');
      expect(() =>
        streamingServiceSelector.availablePlatforms([], 'asd')
      ).to.throw('Invalid platform selection.');
      expect(() => streamingServiceSelector.availablePlatforms([], 2)).to.throw(
        'Invalid platform selection.'
      );
      expect(() => streamingServiceSelector.availablePlatforms([], 0)).to.throw(
        'Invalid platform selection.'
      );
    });
    it('happy path', function () {
      expect(
        streamingServiceSelector.availablePlatforms(
          ['Netflix', 'HBO', 'Disney+'],
          1
        )
      ).to.equal('Other available platforms are: Netflix, Disney+.');
      expect(
        streamingServiceSelector.availablePlatforms(
          ['Netflix', 'HBO', 'Disney+'],
          0
        )
      ).to.equal('Other available platforms are: HBO, Disney+.');
    });
  });
  describe('contentRating(runtimeInMinutes, viewerRating) ', function () {
    it('Input validate', function () {
      expect(() => streamingServiceSelector.contentRating(-1, 5)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => streamingServiceSelector.contentRating(0, 5)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => streamingServiceSelector.contentRating('asd', 5)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => streamingServiceSelector.contentRating([1], 5)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => streamingServiceSelector.contentRating(120, -1)).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => streamingServiceSelector.contentRating(120, 'asd')).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => streamingServiceSelector.contentRating(120, [2])).to.throw(
        'Invalid runtime or rating.'
      );
      expect(() => streamingServiceSelector.contentRating(120, 12)).to.throw(
        'Invalid runtime or rating.'
      );
    });
    it('happy path', function () {
      expect(streamingServiceSelector.contentRating(120, 8)).to.equal(
        'This content is highly rated (8/10) and has a runtime of 2.00 hours. Enjoy your watch!'
      );
      expect(streamingServiceSelector.contentRating(120, 7)).to.equal(
        'This content is highly rated (7/10) and has a runtime of 2.00 hours. Enjoy your watch!'
      );
      expect(streamingServiceSelector.contentRating(120, 4)).to.equal(
        'This content has a lower rating (4/10) and runs for 2.00 hours. You might want to check reviews first.'
      );
    });
  });
});
