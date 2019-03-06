describe('Thermostat', function() {
  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat()
  });
  it('Has a temperature of 20 on creation', function() {
    expect(thermostat.temp).toEqual(20)
  });
});
