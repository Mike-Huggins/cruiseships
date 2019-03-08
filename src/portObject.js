function Port(name) {
  this.name = name;
};

Port.prototype.dock = function (newPort) {
this.name = newPort
}

module.exports = {
  Port,
};
