class SuitcasesController < ApplicationController
  def index
    @suitcases = Suitcase.all
  end

  def show
    @suitcase = Suitcase.find(params[:id])
  end

  def new
    @suitcase = Suitcase.new
  end

  def create
    @suitcase = Suitcase.new(suitcase_params)

    if @suitcase.save
      redirect_to suitcases_url
    else
      render :new
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
    redirect_to suitcases_url
  end

  private
  def suitcase_params
    params.require(:suitcase).permit(:name, :description, :duration, :destination)
  end
end
