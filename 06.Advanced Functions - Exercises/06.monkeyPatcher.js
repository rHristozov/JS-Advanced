function solution(action) {
  let result = [];

  switch (action) {
    case 'upvote':
      this.upvotes++;
      break;
    case 'downvote':
      this.downvotes++;
      break;
    case 'score':
      result = getScore.call(this);
      break;
  }

  function getScore() {
    let positive = this.upvotes;
    let negative = this.downvotes;
    let total = positive + negative;
    let score = positive - negative;
    let rating = 'new';

    if (total > 50) {
      const num = Math.ceil(Math.max(positive, negative) * 0.25);
      positive += num;
      negative += num;
    }

    if (total < 10) {
      rating = 'new';
    } else if (this.upvotes > total * 0.66) {
      rating = 'hot';
    } else if (total > 100 && score >= 0) {
      rating = 'controversial';
    } else if (score < 0) {
      rating = 'unpopular';
    }
    return [positive, negative, score, rating];
  }
  return result;
}

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100,
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote'); // (executed 50 times)
score = solution.call(post, 'score');
