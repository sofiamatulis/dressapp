class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to wardrobes_url, notice: "Account created"
    else
      render "new"
    end
  end

  def new
    @user = User.new
  end

  def edit
    @user= User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_edit_params)
      redirect_to user_url(@user)
    else
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation, :email, :image)
  end

  def user_edit_params
    params.require(:user).permit(:name, :image)
  end

end
