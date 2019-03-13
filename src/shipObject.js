const startingPassengers = 0;
const startInPort = true;
const { Port } = require('../src/portObject.js');

function Ship(name, port, passengerCap, passengers) {
  this.name = name;
  this.port = port;
  this.passengerCap = passengerCap;
  this.passengers = startingPassengers;
  this.inPort = startInPort;
};

// eslint-disable-next-line func-names
Ship.prototype.passengerAdd = function (value) {
  if ((this.passengers + value) > this.passengerCap) {
    throw new Error(`That is ${((this.passengers + value) - this.passengerCap)} too many, draw straws!`);
  }
  this.passengers += value;
};

// eslint-disable-next-line func-names
Ship.prototype.passengerSubtract = function (value) {
  if ((this.passengers - value) < 0) {
    throw new Error(`That is ${-(this.passengers - value)} more people leaving than expected, were there stowaways?!?`);
  }
  this.passengers -= value;
};

// eslint-disable-next-line func-names
Ship.prototype.toggleSail = function () {
  this.inPort = !this.inPort;
};

// eslint-disable-next-line func-names
Ship.prototype.shipCheck = function () {
  if (this.inPort === false) {
    return 'You are on the high seas!';
  };
  if (this.inPort === true) {
    return 'You are in dock';
  }
};

Ship.prototype.dock = function (newPort) {
  this.port = newPort;
};

module.exports = {
  Ship,
};
