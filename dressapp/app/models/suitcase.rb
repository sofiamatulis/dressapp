class Suitcase < ApplicationRecord
  has_and_belongs_to_many :items
  belongs_to :user

  def check_weather(city, country)
    options = { units: "metric", APPID: Rails.application.secrets.open_weather_id }
    @weather = OpenWeather::Forecast.city(city, country, options)
    respond_to do |format|
      format.html
      format.json {render json: @weather.to_json}
    end
  end
end
