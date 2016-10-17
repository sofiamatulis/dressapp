class SuitcasesController < ApplicationController

  before_action :ensure_logged_in

require 'open_weather'
  def index
    @suitcases = Suitcase.all
    respond_to do |format|
    format.html
    format.json {render json: @suitcase.to_json}
    end
  end

  def show
    @suitcase = Suitcase.find(params[:id])
    # options = { units: "metric", APPID: Rails.application.secrets.open_weather_id }
    # @weather = OpenWeather::Forecast.city("Toronto, CA", options)
     respond_to do |format|
     format.html
     format.json {render json: @suitcase.to_json}
     end

  end

  def new
    @suitcase = Suitcase.new(:user_id => params[:user])
  end

  def create
    @suitcase = Suitcase.new(suitcase_params)
    @suitcase.user_id = current_user.id
    @suitcase.save
    #if   redirect_to suitcases_url
    # else
    #   render :new
    # end

    respond_to do |format|
    format.html {render html: @suitcase}
    format.json {render json: @suitcase.to_json}
    end


  end

  def edit
    @suitcase = Suitcase.find(params[:id])
  end

  def update
    @suitcase = Suitcase.find(params[:id])

    if @suitcase.update_attributes(suitcase_params)
      redirect_to suitcase_url(@suitcase)
    else
      render :edit
    end
  end

  def destroy
    @suitcase = Suitcase.find(params[:id])
    @suitcase.destroy
    redirect_to current_user
  end


  private
  def suitcase_params
    params.require(:suitcase).permit(:name, :description, :destination, :duration, :user_id, :item_ids, item:[])
  end
end
