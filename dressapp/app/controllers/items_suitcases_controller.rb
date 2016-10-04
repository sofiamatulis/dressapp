class ItemsSuitcasesController < ApplicationController
  def create
    @item = Item.find(params[:item])
    # @item_id = Item.find(params[:suitcase][:item_ids])
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase])
    @item.suitcases << @suitcase
    redirect_to item_path(@item)
  end


end
