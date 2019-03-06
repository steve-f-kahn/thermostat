function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.up = function (num) {
  this.temp += num
};

Thermostat.prototype.down = function (num) {
  this.temp -= num
};
