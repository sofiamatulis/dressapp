class ItemsSuitcasesController < ApplicationController

  before_action :ensure_logged_in

#
  def create
#
#
    # adding an item at a time to the suitcase from the suitcase page :
    @item = Item.find(params[:item_id])
    @suitcase = Suitcase.find(params[:suitcase_id])
    @suitcase.items << @item
#
#
#
# 
    items_ary = []
    #
    # params['items'].each do |item|
    #   items_ary << Item.find(item)
    # end



    # @item = Item.find(params[:id])

    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase_id])
    params['items'].each do |item|
      @suitcase.items << Item.find(item)
    end
    # @item.suitcases << @suitcase
    redirect_to suitcase_path(@suitcase)

  end





end
