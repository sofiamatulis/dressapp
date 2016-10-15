class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


helper_method :current_user
private

# the current user is the one accessing the  account

def current_user
  @current_user ||= User.find(session[:user_id]) if session[:user_id]
end


# you have to be logged in to access information
def ensure_logged_in
  unless current_user
    flash[:alert] = "Please log in"
    redirect_to new_session_path
  end
end



end
