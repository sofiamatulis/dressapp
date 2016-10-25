class WardrobesController < ApplicationController
  before_action :ensure_logged_in

  # skip_before_action :verify_authenticity_token


  def new
    @wardrobe = Wardrobe.new(:user_id => params[:user])
  end

  def create
    @wardrobe = Wardrobe.new(wardrobe_params)
    @wardrobe.user_id = current_user.id
     @wardrobe.save
    # if  redirect_to @wardrobe
    # else
    #   render :new
    # end

    respond_to do |format|
    format.html {render html: @wardrobe}
    format.json {render json: @wardrobe.to_json}
    end

  end

  def index
    @wardrobes = Wardrobe.all
  end

  def show
    @wardrobe = Wardrobe.find(params[:id])
    unless session[:user_id] == @wardrobe.user_id
      flash[:notice] = "You don't have access to that wardrobe!"
      redirect_to user_path(session[:user_id])
      return
    end
    @item = Item.new(:wardrobe_id => params[:id])
    respond_to do |format|
      format.html
      format.json { render json: {item: @item.to_json, users: @users,category: @category, wardrobe: @wardrobes.to_json }}
    end
    @items = @wardrobe.items
    @tops = @items.where(category_id: "1")
    @bottoms = @items.where(category_id: "2")
    @shoes = @items.where(category_id: "3")
    @dresses = @items.where(category_id: "4")
    @others = @items.where(category_id: "5")
    @suitcases = current_user.suitcases

  #  @suitcase = Suitcase.find(params[:id])

  end

  def edit
    @wardrobe = Wardrobe.find(params[:id])
  end

  def update
    @wardrobe = Wardrobe.find(params[:id])
    if @wardrobe.update_attributes(wardrobe_params)
      redirect_to wardrobe_path(@wardrobe)
    else
      render :edit
    end
  end


  def destroy
    @wardrobe = Wardrobe.find(params[:id])
    @wardrobe.destroy
    redirect_to user_path(session[:user_id])
  end

  def thumbnail

    @wardrobe = Wardrobe.find(params[:id])
    unless session[:user_id] == @wardrobe.user_id
     flash[:notice] = "You don't have access to that wardrobe!"
     redirect_to user_path(session[:user_id])
     return
   end
   @items = @wardrobe.items.last(1)

  #  @item = Item.new(:wardrobe_id => params[:id])
      # render json: {item: @item.to_json, users: @users,category: @category, wardrobe: @wardrobes.to_json}
   @suitcases = current_user.suitcases
   render partial: 'thumbnail'






  end

  private

  def wardrobe_params
    params.require(:wardrobe).permit(:name, :user_id)
  end

  # def wardrobe_edit_params
  #   params.require(:wardrobe).permit(:name)
  # end

end
