class Deck {
  constructor(cards) {
    this.cards = cards;
    this.cardCount = 0
  };

  countCards() {
    return this.cardCount = this.cards.length;
  }
};

module.exports = Deck;
