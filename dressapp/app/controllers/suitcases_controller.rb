class SuitcasesController < ApplicationController
  def index
    @suitcases = Suitcase.all
  end

  def show
    @suitcase = Suitcase.find(params[:id])
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
    redirect_to suitcases_url
  end

  private
  def suitcase_params
    params.require(:suitcase).permit(:name, :description, :duration, :destination, :user_id)
  end
end
