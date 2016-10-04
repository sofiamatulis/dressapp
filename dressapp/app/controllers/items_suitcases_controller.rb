class ItemsSuitcasesController < ApplicationController

  before_action :ensure_logged_in


  def create
    @item = Item.find(params[:item])
    # @item_id = Item.find(params[:suitcase][:item_ids])
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase])
    @item.suitcases << @suitcase
    redirect_to item_path(@item)


    # add items to suitcases from suitcase page user eh item, team eh suitcase

  



  end
end
