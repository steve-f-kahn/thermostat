require "Database_connection"

describe Database_connection do
  describe "#setup" do
    it "Takes the databse name and sets up a connection to it" do
      a = Database_connection.setup
      expect(a.db).to eq "thermostat_test"
    end
  end
end
