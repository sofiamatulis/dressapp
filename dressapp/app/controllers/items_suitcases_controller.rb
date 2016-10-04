class ItemsSuitcasesController < ApplicationController

  before_action :ensure_logged_in


  def create


    # adding an item at a time to the suitcase from the suitcase page :
    @item = Item.find(params[:item_id])
    @suitcase = Suitcase.find(params[:suitcase_id])
    @suitcase.items << @item



  end





end
