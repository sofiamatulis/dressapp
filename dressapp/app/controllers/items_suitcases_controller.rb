class ItemsSuitcasesController < ApplicationController
  def create
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
