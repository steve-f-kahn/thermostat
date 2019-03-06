function Thermostat() {
  this.temp = 20;
  this.minimumTemperature = 10;
};

Thermostat.prototype.up = function (num) {
  this.temp += num
};

Thermostat.prototype.down = function (num) {
  var newTemperature = this.temp - num;
  newTemperature < this.minimumTemperature ? this.temp = 10 : this.temp -= num
};
