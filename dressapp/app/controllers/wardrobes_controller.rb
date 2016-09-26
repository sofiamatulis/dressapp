class WardrobesController < ApplicationController
  def new
    @wardrobe = Wardrobe.new
  end

  def create
    @wardrobe = Wardrobe.new(wardrobe_params)
    @wardrobe.user_id = current_user.id
    if @wardrobe.save
      redirect_to @wardrobe
    else
      render :new
    end

  end

  def index
    @wardrobes = Wardrobe.all
  end

  def show
    @wardrobe = Wardrobe.find(params[:id])
  end

  def edit

  end


  def destroy
  end

  private

  def wardrobe_params
    params.require(:wardrobe).permit(:name)
  end
end
