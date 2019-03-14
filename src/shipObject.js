const { Port } = require('../src/portObject.js');

function Ship(itenerary) {
  this.itenerary = itenerary;
  this.currentPort = itenerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
  this.currentPort = null;
};

Ship.prototype.dock = function (port) {
  this.currentPort = port;
};

module.exports = {
  Ship,
};
