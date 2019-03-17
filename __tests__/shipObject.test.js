const { Ship } = require('../src/shipObject.js');
const { Port } = require('../src/portObject.js');
const { Itinerary } = require('../src/itinerary.js');

describe('Ship constructor test suite', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
  });
  xit('creates a new ship instance', () => {
    expect(new Ship(itinerary)).toBeInstanceOf(Object);
  });
  xit('create a new ship with starting port of Dover', () => {
    expect(ship.currentPort).toEqual(dover);
  });
  xit('ship set sail', () => {
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
  xit('Ship docks at a different port', () => {
    ship.setSail();
    ship.dock(calais);
    expect(ship.currentPort).toEqual(calais);
  });
  xit('port added to ship itenerary on ship instantiation', () => {
    expect(dover.ships).toContain(ship);
  });
  xit('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
  xit('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();  
    expect(dover.ships).not.toContain(ship);  
  });
});
