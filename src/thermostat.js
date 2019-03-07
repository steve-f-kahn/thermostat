function Thermostat() {
  this.temp = 20;
  this.minTemp= 10;
  this.powerSavingMode = true;
  this.powerSavingModeOnMaxTemp = 25;
  this.powerSavingModeOffMaxTemp = 32;
};

Thermostat.prototype.up = function (num) {
  var newTemp = this.temp + num;
  newTemp > this.maxTemp() ? this.temp = this.maxTemp() : this.temp += num;
}

Thermostat.prototype.down = function (num) {
  var newTemp = this.temp - num;
  newTemp < this.minTemp ? this.temp = 10 : this.temp -= num
};

Thermostat.prototype.togglePowerSavingMode = function () {
  this.powerSavingMode ? this.powerSavingMode = false : this.powerSavingMode = true
};

Thermostat.prototype.reset = function () {
  this.temp = 20;
  this.powerSavingMode = true;
};

Thermostat.prototype.energyUse = function () {
  if (this.temp < 19) {
    return "Low Energy";
  }else if (this.temp < 25) {
    return "Medium Energy"
  }else {
    return "High Energy"
  }
};

Thermostat.prototype.maxTemp = function () {
  return this.powerSavingMode ? 25 : 32
};
