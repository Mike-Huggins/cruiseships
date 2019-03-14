/* globals describe it expect */
const { Ship } = require('../src/shipObject.js');
const { Port } = require('../src/portObject.js');
const { Itenerary } = require('../src/itinerary.js');

describe('Ship constructor test suite', () => {
  /* let ship;
  let southampton;
  let calais;
  let itenerary;
  let ship2;
  beforeEach(() => {
    ship = new Ship(southampton);
    southampton = new Port('Southampton');
    calais = new Port('Calais');
    itenerary = new Itenerary([southampton]);
    ship2 = new Ship(itenerary);
  }); */
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
  xit('port added to ship itenerary on ship instantiation', () => {
    const dover = new Port('Dover');
    const itenerary = new Itenerary([dover]);
    const ship = new Ship(itenerary);
    expect(dover.ships).toContain(ship);
  });
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itenerary = new Itenerary([dover, calais]);
    const ship = new Ship(itenerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});
