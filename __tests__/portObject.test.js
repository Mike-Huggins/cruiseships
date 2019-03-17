const { Port } = require('../src/portObject.js');
const { Ship } = require('../src/shipObject.js');
const { Itinerary } = require('../src/itinerary.js');

describe('create a new instance of port', () => {
  let ship;
  let dover;
  let calais;
  let itinerary;
  let mockShip;
  let mockShip2;
  let mockShip3;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);
    mockShip = { name: 'mockShip' };
    mockShip2 = { name: 'mockShip2' };
    mockShip3 = { name: 'mockShip3' };
    calais.addShip(mockShip);
    calais.addShip(mockShip2);
    calais.addShip(mockShip3);
  });
  xit('creates a new port instance', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  xit('create a port with the name Southampton', () => {
    expect(dover.name).toEqual('Dover');
  });
  xit('test the add a ship to the port', () => {
    expect(calais.ships).toEqual([mockShip, mockShip2, mockShip3]);
  });

  xit('test the remove a ship from port', () => {
    calais.removeShip(mockShip2);
    expect(calais.ships).toEqual([mockShip, mockShip3]);
  });
});
