class ItemsSuitcasesController < ApplicationController
  def create
    @item = Item.find(params[:item])
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase])
    @item.suitcases << @suitcase
    redirect_to item_path(@item)
  end
end
