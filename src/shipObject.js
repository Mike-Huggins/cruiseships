const { Port } = require('../src/portObject.js');

function Ship(startingPort) {
  this.startingPort = startingPort;
};

Ship.prototype.setSail = function () {
  this.startingPort = null;
};

// eslint-disable-next-line func-names
/* Ship.prototype.toggleSail = function () {
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
*/
module.exports = {
  Ship,
}; 
