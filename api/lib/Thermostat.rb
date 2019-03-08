class Thermostat

  def self.get_info
    result = Database_connection.querry("SELECT temp, mode FROM thermostat WHERE id = 1;")
    result[0]
  end

  def self.set_info(temp, mode)
    Database_connection.querry("TRUNCATE thermostat")
    Database_connection.querry("INSERT INTO thermostat VALUES(1,'#{temp}', '#{mode}');")
  end
end
