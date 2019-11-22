class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card
    this.evaluation = undefined;
  };

  returnGuess() {
    return this.userGuess
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    if (this.userGuess !== this.card.correctAnswer) {
      return this.evaluation = false;
    };
    return this.evaluation = true;
  };

  giveFeedback() {
    if (!this.evaluation) {
      return 'Incorrect!';
    };
    return 'Correct!';
  };
};

module.exports = Turn;
