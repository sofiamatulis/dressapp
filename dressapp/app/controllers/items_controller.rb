class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def show
    @item = Item.find(params[:id])
  end

  def new
    @item = Item.new(:wardrobe_id => params[:wardrobe])

  end

  def edit
    @item = Item.find(params[:id])
  end

  def create
    @item = Item.new(item_params)
    # @category = Category.find(item_params[:category_id])
    @wardrobe = @item.wardrobe_id
    if @item.save
      redirect_to wardrobe_path(@wardrobe)
    else
      render "new"
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    @wardrobe = @item.wardrobe
    redirect_to wardrobe_path(@wardrobe)
  end

  private
  def item_params
    params.require(:item).permit(:name, :description, :image, :category_id, :wardrobe_id)
  end
end
