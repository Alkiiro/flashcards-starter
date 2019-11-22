const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.guesses = []
    this.incorrectGuesses = [];
  };
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  };
  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id);
    };
    turn.giveFeedback()
    this.turns++;
    this.guesses.push(userGuess);
    if (this.guesses.length === this.deck.length) {
      this.endRound();
    };
  };
  calculatePercentCorrect() {
    let correctGuesses = this.guesses.length - this.incorrectGuesses.length;
    return Math.floor((correctGuesses/this.guesses.length) * 100);
  };
  endRound() {
    return `Round Over!  You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  };
};

module.exports = Round;
