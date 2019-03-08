require 'pg'

class Database_connection
  def self.setup
    if ENV["ENVIROMENT"] == "test"
      name = "thermostat_test"
    else
      name ="thermostat"
    end

  @conn = PG.connect(dbname: name)
  end

  def self.querry(string)
    @conn.exec(string)
  end
end
