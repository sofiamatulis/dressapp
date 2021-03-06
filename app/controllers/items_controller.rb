class ItemsController < ApplicationController
  # before_action :load_items, only: [:index]
  before_action :ensure_logged_in


  def index
    if params[:search]
      @items = Item.search(params[:search])
    else
      @items = Item.all
    end
    respond_to do |format|
      format.html
      format.js
      format.json do
        render json: @items
      end
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
      @wardrobe = @item.wardrobe
      if @item.save
        if request.xhr?
          respond_to do |format|
            format.html
            format.json { render json: @item.to_json }
          end
        else
          redirect_to wardrobe_path(@wardrobe)
        end
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
