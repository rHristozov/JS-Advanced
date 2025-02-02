function printDeckOfCards(cards) {
  let validCards = [];
  let foundInvalidCard = false;

  function createCard(face, suit) {
    let faces = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A',
    ];

    const suits = {
      S: '\u2660',
      H: '\u2665',
      D: '\u2666',
      C: '\u2663',
    };

    if (faces.includes(face) && suits.hasOwnProperty(suit)) {
      const card = face + suits[suit];
      validCards.push(card);
    } else {
      console.log(`Invalid card: ${face}${suit}`);
      foundInvalidCard = true;
    }
  }

  for (const card of cards) {
    let face = '';
    let suit = '';
    if (card.startsWith('10')) {
      face = '10';
      suit = card[card.length - 1];
    } else {
      [face, suit] = card.split('');
    }
    createCard(face, suit);
  }

  if (!foundInvalidCard) {
    console.log(validCards.join(' '));
  }
}
printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
