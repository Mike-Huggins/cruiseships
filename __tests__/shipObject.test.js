const { Ship } = require('../src/shipObject.js');
const { Port } = require('../src/portObject.js');

describe('create a new instance of ship', () => {
  let megacruise;
  let southampton;
  beforeEach(() => {
    megacruise = new Ship('Megacruise', southampton, 100, 0);
    southampton = new Port('Southampton');
  });

  xit('creates a new ship instance', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  xit('check port imported from other module correctly', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  xit('check port is brought into ship correctly', () => {
    expect(megacruise.port).toEqual(southampton);
  });

  xit('check port details', () => {
    expect(megacruise.port.name).toEqual('Southampton');
  });

  xit('ensure all parameters populate the ship object', () => {
    expect(megacruise.name).toEqual('Megacruise');
    expect(megacruise.passengerCap).toEqual(100);
    expect(megacruise.passengers).toEqual(0);
  });

  xit('add and subtract passengers and have a check for remaining places', () => {
    megacruise.passengerAdd(20);
    expect(megacruise.passengers).toEqual(20);
    megacruise.passengerSubtract(15);
    expect(megacruise.passengers).toEqual(5);
    megacruise.passengerSubtract(5);
    expect(megacruise.passengers).toEqual(0);
    expect(() => megacruise.passengerAdd(101)).toThrow('That is 1 too many, draw straws!');
    expect(() => megacruise.passengerSubtract(5)).toThrow('That is 5 more people leaving than expected, were there stowaways?!?')
  });

  xit('make the ship set sail and not be in port', () => {
    megacruise.toggleSail();
    expect(megacruise.inPort).toEqual(false);
    expect(megacruise.shipCheck()).toEqual('You are on the high seas!');
    megacruise.toggleSail();
    expect(megacruise.inPort).toEqual(true);
    expect(megacruise.shipCheck()).toEqual('You are in dock');
    megacruise.toggleSail();
    expect(megacruise.inPort).toEqual(false);
    expect(megacruise.shipCheck()).toEqual('You are on the high seas!');
  });
});
