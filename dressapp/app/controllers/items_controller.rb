class ItemsController < ApplicationController

  def index
    if params[:search]
      @items = Item.search(params[:search])
    else
      @items = Item.all
    end
  end

  def show
    @item = Item.find(params[:id])
    @suitcases = current_user.suitcases

  end

  def new
    @item = Item.new(:wardrobe_id => params[:wardrobe])

  end

  def edit
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])
    if @item.update_attributes(item_edit_params)
      redirect_to item_path(@item)
    else
      render :edit
    end
  end

  def create
    @item = Item.new(item_params)
    # @category = Category.find(item_params[:category_id])
    @wardrobe = @item.wardrobe
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

  def item_edit_params
    params.require(:item).permit(:name, :description, :image, :category_id)
  end
end
