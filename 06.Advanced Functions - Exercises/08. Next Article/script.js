function getArticleGenerator(articles) {
  const output = document.getElementById('content');

  const ourCopy = articles.slice();

  return function showNext() {
    if (ourCopy[0] !== undefined) {
      const article = document.createElement('article');

      article.innerHTML = ourCopy.shift();

      output.appendChild(article);
    }
  };
}
