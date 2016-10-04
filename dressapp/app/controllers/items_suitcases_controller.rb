class ItemsSuitcasesController < ApplicationController

  before_action :ensure_logged_in


  def create
    @item = Item.find(params[:item])
    # @item_id = Item.find(params[:suitcase][:item_ids])
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase])
    # redirect_to item_path(@item)

# adding an item at a time to the suitcase:

  end


  def update
    @item = Item.find(params[:item_id])
    @suitcase = Suitcase.find(params[:id])
    @suitcase.items << @item
  end



end
