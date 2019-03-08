require "Thermostat"

describe Thermostat do
  it "returns a hash of the thermostat data" do
    Thermostat.set_info(20, true)
    expect(Thermostat.get_info).to eq({"temp" => "20", "mode" => "t"})
  end

  it "set the info" do
    Thermostat.set_info(22, false)
    expect(Thermostat.get_info).to eq({"temp" => "22", "mode" => "f"})
  end
  end
