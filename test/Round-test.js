const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
let round
let turn
let deck
let card1
let card2
let card3

describe('Round', () => {
  beforeEach(() => {
    card1 = new Card(1, 'What color is the sky?', ['red', 'blue', 'green'], 'blue');
    card2 = new Card(2, 'What shape are wheels?', ['Triangular', 'Square', 'Round'], 'Round');
    card3 = new Card(3, 'Which of the following is typically long-sleeved?', ['jacket', 'tank-top', 'shorts'], 'jacket');
    deck = new Deck([card1, card2, card3]);
    turn = new Turn('userguess');
    round = new Round('userguess');
  });

  it('Should return the current card in play', () => {
    expect(round.returnCurrentCard()).to.eql(card1);
  });

  describe('takeTurn', () => {
    beforeEach(() => {
      takeTurn();
    });
    it('Should update the turn count', () => {
      expect(round.turns).to.eql(2);
    });

    it('Should make the next Card the currentCard', () => {
      expect(round.currentCard).to.eql(card2)
    });
  });

});
