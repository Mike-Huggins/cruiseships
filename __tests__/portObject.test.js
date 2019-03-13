const { Port } = require('../src/portObject.js');
const { Ship } = require('../src/shipObject.js');

describe('create a new instance of port', () => {
  let southampton;
  let megacruise;
  let bananaBoat;
  let funTime;
  beforeEach(() => {
    southampton = new Port('Southampton');
    megacruise = new Ship ('Megacruise', southampton, 100, 0);
    bananaBoat = new Ship ('BananaBoat', southampton, 150, 50);
    funTime = new Ship ('FunTime', southampton, 200, 100);

  });
  xit('creates a new port instance', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  xit('create a port with the name Portsmouth', () => {
    expect(southampton.name).toEqual('Southampton');
  });
  xit('test the add a ship to the port', () => {
    const mockShip = { name: 'mockShip' };
    const mockShip2 = { name: 'mockShip2' };
    const mockShip3 = { name: 'mockShip3' };
    southampton.addShip(mockShip);
    southampton.addShip(mockShip2);
    southampton.addShip(mockShip3);
    expect(southampton.ships).toEqual([mockShip, mockShip2, mockShip3]);
  });

  xit('test the remove a ship from port', () => {
    const mockShip = { name: 'mockShip' };
    const mockShip2 = { name: 'mockShip2' };
    const mockShip3 = { name: 'mockShip3' };
    southampton.addShip(mockShip);
    southampton.addShip(mockShip2);
    southampton.addShip(mockShip3);
    southampton.removeShip(mockShip2);
    expect(southampton.ships).toEqual([mockShip, mockShip3]);
  });
});
