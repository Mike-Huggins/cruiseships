const { Port } = require('../src/portObject.js');

function Ship(itenerary) {
  this.itenerary = itenerary;
  this.currentPort = itenerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
  const findPort = this.itenerary.ports.indexOf(this.currentPort);
  this.previousPort = this.itenerary.ports[findPort];
  this.currentPort.removeShip(this);
  this.currentPort = null;
};

Ship.prototype.dock = function () {
  const itenerary = this.itenerary;
  const previousPortIndex = itenerary.ports.indexOf(this.previousPort);
  this.currentPort = itenerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};

module.exports = {
  Ship,
};
