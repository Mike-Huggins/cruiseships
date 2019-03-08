const { Port } = require('../src/portObject.js');

describe('create a new instance of port', () => {
  let southampton;
  beforeEach(() => {
    southampton = new Port('Southampton');
  });
  xit('creates a new port instance', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  xit('create a port with the name Portsmouth', () => {
    expect(southampton.name).toEqual('Southampton');
  });
  it('create a dock method to change port', () => {
    southampton.dock('Portsmouth');
    expect(southampton.name).toEqual('Portsmouth');
  });
});
