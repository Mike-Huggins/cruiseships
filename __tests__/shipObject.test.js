/* globals describe it expect */
const { Ship } = require('../src/shipObject.js');
const { Port } = require('../src/portObject.js');

describe('Ship constructor test suite', () => {
  let ship;
  beforeEach(() => {
    ship = new Ship('Dover');
  });
  it('creates a new ship instance', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('create a new ship with starting port of Dover', () => {
    expect(ship.startingPort).toEqual('Dover');
  });
});
