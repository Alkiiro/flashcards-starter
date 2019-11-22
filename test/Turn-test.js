const chai = require('chai');
const expect = chai.expect;

let Turn = require('../src/Turn.js');
let Card = require('../src/Card.js');
let card
let turn

describe('Turn', () => {
  beforeEach(() => {
    card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    turn = new Turn('object', card);
  });

  it('should be instantiated with two arguments', () => {
    // let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    // let turn = new Turn('object', card);
    expect(turn.userGuess).to.eql('object');
    expect(turn.card).to.eql(card);
  });

  it('should return the users guess', () => {
    expect(turn.returnGuess()).to.eql('object');
  });

  it('should return the card', () => {
    expect(turn.returnCard()).to.eql(card);
  });

  it('should return a boolean based upon users guess and cards correct answer', () => {
    expect(turn.evaluateGuess()).to.eql(true);
  });

  it('should return a string depending on the users guess', () => {
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.eql('Correct!');
  });
});
