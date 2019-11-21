class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card
  };

  returnGuess() {
    return this.userGuess
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    if (this.userGuess !== this.card.correctAnswer) {
      return false;
    };
    return true;
  };

  giveFeedback() {
    if (!this.evaluateGuess()) {
      return 'Incorrect!';
    };
    return 'Correct!';
  };
};

module.exports = Turn;
