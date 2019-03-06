const startingPassengers = 0;

function Ship(name, port, passengerCap, passengers) {
  this.name = name;
  this.port = port;
  this.passengerCap = passengerCap;
  this.passengers = startingPassengers;
};

Ship.prototype.portChange = function(newPort) {
  this.port = newPort;
};

Ship.prototype.passengerAdd = function(value) {
  if((this.passengers + value) > this.passengerCap) {
    throw new Error(`That is ${((this.passengers + value) - this.passengerCap)} too many, draw straws!`);
  }
  this.passengers += value;
};

Ship.prototype.passengerSubtract = function(value) {
  if((this.passengers - value) < 0) {
    throw new Error(`That is ${-(this.passengers - value)} more people leaving than expected, were there stowaways?!?`);
  }
  this.passengers -= value;
};


module.exports = {
  Ship
}

/* change port method needed, passenger increase or decrease, distance travelled, 
fuel required, supplies onboard */;