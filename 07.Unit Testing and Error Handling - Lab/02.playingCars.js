function playingCars(face, suit) {
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

  if (!faces.includes(face)) {
    throw new Error('Error');
  } else {
    return {
      face,
      suit,
      toString() {
        return this.face + suits[this.suit];
      },
    };
  }
}

playingCars('1', 'C').toString();
