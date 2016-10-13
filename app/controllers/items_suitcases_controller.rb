class ItemsSuitcasesController < ApplicationController

  before_action :ensure_logged_in

  def create

    # adding an item at a time to the suitcase from the suitcase page :
    @item = Item.find(params[:item_id])
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase_id])
    @suitcase.items << @item

    render partial: 'suitcases/outfitchecker'

  end

  def create_item_show
    @item = Item.find(params[:item_id])
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase_id])
    params['suitcase_id'].each do |id|
      @item.suitcases << Suitcase.find(id)
    end
  end

  def create_multi
    @suitcases = current_user.suitcases
    @suitcase = Suitcase.find(params[:suitcase_id])

    params['items'].each do |item|
      @suitcase.items << Item.find(item)
    end
  redirect_to suitcase_path(@suitcase)
  end


  def destroy_multiple
    @suitcase = Suitcase.find(params[:suitcase_id])
    params['items'].each do |item|
      @suitcase.items.delete(Item.find(item))
    end
  end


end
