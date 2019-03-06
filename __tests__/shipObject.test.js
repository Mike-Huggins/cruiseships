const { Ship } = require('../src/shipObject.js');

describe('create a new instance of ship', () => {
let megacruise;
beforeEach(() => {
    megacruise = new Ship('Megacruise', 'Southampton', 100, 0);
  });
it('creates a new ship instance', () => {
    expect(new Ship()).toBeInstanceOf(Object);
});
});