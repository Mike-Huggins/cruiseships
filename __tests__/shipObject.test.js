const { Ship } = require('../src/shipObject.js');

describe('create a new instance of ship', () => {
let megacruise;
beforeEach(() => {
    megacruise = new Ship('Megacruise', 'Southampton', 100, 0);
  });
xit('creates a new ship instance', () => {
    expect(new Ship()).toBeInstanceOf(Object);
});

xit('ensure all parameters populate the ship object', () => {
    expect(megacruise.name).toEqual("Megacruise");
    expect(megacruise.port).toEqual("Southampton");
    expect(megacruise.passengerCap).toEqual(100);
    expect(megacruise.passengers).toEqual(0);
  });

xit('change port of the ship using a method', () => {
    megacruise.portChange('Liverpool');
    expect(megacruise.port).toEqual('Liverpool');
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
    expect(megacruise.shipCheck()).toEqual('You are in Southampton dock');
    megacruise.toggleSail();
    expect(megacruise.inPort).toEqual(false);
    expect(megacruise.shipCheck()).toEqual('You are on the high seas!');
});
});