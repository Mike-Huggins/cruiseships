function Ship(name, port, passengerCap, startingPassengers) {
  this.name = name;
  this.port = port;
  this.passengerCap = passengerCap;
  this.startingPassengers = startingPassengers;
};

module.exports = {
  Ship
}

/* change port method needed, passenger increase or decrease, distance travelled, 
fuel required, supplies onboard */;