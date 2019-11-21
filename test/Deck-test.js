const chai = require('chai');
const expect = chai.expect;

let Deck = require('..src/Deck.js');
let Card = require('..src/Card.js');
let deck
let card1
let card2
let card3

describe('Deck', () => {
  beforeEach(() => {
    deck = new Deck([card1, card2, card3]);
    card1 = new Card(1, 'What color is the sky?', ['red', 'blue', 'green'], 'blue');
    card2 = new Card(2, 'What shape are wheels?', ['Triangular', 'Square', 'Round'], 'Round');
    card3 = new Card(3, 'Which of the following is typically long-sleeved?', ['jacket', 'tank-top', 'shorts'], 'jacket');
  });

  it('Should be instantiated with an array of cards', () => {
    expect(deck.cards).to.eql([card1, card2, card3]);
  });

  it('Should know how many cards it contains', () => {
    countCards();
    expect(deck.cardCount).to.eql(3);
  });
});
