class CategoriesController < ApplicationController
  def index
  end


#categories for items
  def show
    @category = Category.find(params[:id])
    @items = @category.items
    @users    = User.all
    respond_to do |format|
      format.html
      format.json {render json: @items}
      # format.json { render json: {items: @items, users: @users,category: @category, wardrobe: @wardrobes,suitcase: @suitcases }}
    end
  end


end
