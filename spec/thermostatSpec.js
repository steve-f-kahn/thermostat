describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat()
  });
  it('Has a temperature of 20 on creation', function() {
    expect(thermostat.temp).toEqual(20)
  });

  it('Can increase the temperature with an up function by 5', function() {
    thermostat.up(5);
    expect(thermostat.temp).toEqual(25);
  });

  it('Can increase the temperature with an up function by 4', function() {
    thermostat.up(4);
    expect(thermostat.temp).toEqual(24);
  });

  it("Can decrease the temperature of the thermostat by 5", function() {
    thermostat.down(5);
    expect(thermostat.temp).toEqual(15)
  });

  it("Can decrease the temperature of the thermostat by 10", function() {
    thermostat.down(10);
    expect(thermostat.temp).toEqual(10);
  });

  it("can't lower the temperature below 10 degrees", function() {
    thermostat.down(11);
    expect(thermostat.temp).toEqual(10);
  });

  it('sets the maximum temperature to 25 degrees when power-saving mode is on', function() {
    thermostat.up(6);
    expect(thermostat.temp).toEqual(25);
  });

  it('sets the maximum temperature to 25 degrees when power-saving mode is off', function() {
    thermostat.togglePowerSavingMode();
    thermostat.up(6);
    expect(thermostat.temp).toEqual(26);
  });

  it('Can be reset to the original temperature', function() {
    thermostat.up(3);
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  })

  it('Can reset the mode to be on', function() {
    thermostat.togglePowerSavingMode()
    thermostat.reset()
    expect(thermostat.powerSavingMode).toEqual(true)
  });
});
