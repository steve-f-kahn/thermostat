require "sinatra"
require_relative "./lib/Thermostat"
require_relative "./lib/Database_connection"
class ThermostatApi < Sinatra::Base
  Database_connection.setup
  get '/' do
    "#{Thermostat.get_info}"
  end

  post '/' do
    Thermostat.set_info(params[:temp], params[:mode])
  end
 run! if app_file == $0
end
