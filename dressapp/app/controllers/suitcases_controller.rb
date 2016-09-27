class SuitcasesController < ApplicationController
  def index
  end

  def show
  end

  def edit
  end

  def new
    @suitcase = Suitcase.new(:user_id => params[:user])
  end

  def create
  end

  def destroy
  end
end
