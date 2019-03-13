function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function (shipObject) {
  this.ships.push(shipObject);
};

Port.prototype.removeShip = function (shipObject) {
  this.ships.splice(this.ships.indexOf(shipObject), 1);
};

module.exports = {
  Port,
};
