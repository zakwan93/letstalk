class ApplicationController < ActionController::Base

	before_action :authenticate_user!

	
  # layout :layout

  # private

  # def layout
  #   # only turn it off for login pages:
  #   is_a?(Devise::SessionsController) ? false : "application"
  #   # or turn layout off for every devise controller:
  #   devise_controller? && "application"
  # end

end
