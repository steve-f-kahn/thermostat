function Thermostat() {
  this.temp = 20;
  this.minimumTemperature = 10;
  this.powerSavingMode = true;
  this.powerSavingModeOnMaxTemp = 25;
  this.powerSavingModeOffMaxTemp = 32;
};

Thermostat.prototype.up = function (num) {
  var newTemperature = this.temp + num;
  if(this.powerSavingMode) {
    newTemperature > this.powerSavingModeOnMaxTemp ? this.temp = this.powerSavingModeOnMaxTemp : this.temp += num;
  } else {
    newTemperature > this.powerSavingModeOffMaxTemp ? this.temp = this.powerSavingModeOffMaxTemp : this.temp += num;
  };
};

Thermostat.prototype.down = function (num) {
  var newTemperature = this.temp - num;
  newTemperature < this.minimumTemperature ? this.temp = 10 : this.temp -= num
};

Thermostat.prototype.togglePowerSavingMode = function () {
  this.powerSavingMode ? this.powerSavingMode = false : this.powerSavingMode = true
};
