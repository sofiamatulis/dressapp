class ItemsSuitcasesController < ApplicationController

  before_action :ensure_logged_in

  def create



    # adding an item at a time to the suitcase from the suitcase page :
    @item = Item.find(params[:item_id])
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase_id])
    @suitcase.items << @item
    # @item.suitcases << @suitcase
    redirect_to suitcase_path(@suitcase)

  end

  def create_multi
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase_id])
    @suitcase.items << @item
    params['items'].each do |item|
      @suitcase.items << Item.find(item)
    end
  end

end
