/* globals describe it expect */
const { Ship } = require('../src/shipObject.js');
const { Port } = require('../src/portObject.js');

describe('Ship constructor test suite', () => {
  let ship;
  let southampton;
  let calais;
  beforeEach(() => {
    ship = new Ship(southampton);
    southampton = new Port('Southampton');
    calais = new Port('Calais');
  });
  xit('creates a new ship instance', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  xit('create a new ship with starting port of Dover', () => {
    expect(ship.startingPort).toEqual(southampton);
  });
  xit('ship set sail', () => {
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
  xit('Ship docks at a different port', () => {
    ship.dock(calais);
    expect(ship.currentPort).toEqual(calais);
  });
});
