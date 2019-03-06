function Thermostat() {
  this.temp = 20;
  this.minimumTemperature = 10;
  this.powerSavingMode = true;
  this.powerSavingModeMaxTemp = 25;
};

Thermostat.prototype.up = function (num) {
  var newTemperature = this.temp + num;
  if(this.powerSavingMode) {
    newTemperature > this.powerSavingModeMaxTemp ? this.temp = 25 : this.temp += num;
  } else {
    this.temp += num;
  }
};

Thermostat.prototype.down = function (num) {
  var newTemperature = this.temp - num;
  newTemperature < this.minimumTemperature ? this.temp = 10 : this.temp -= num
};
