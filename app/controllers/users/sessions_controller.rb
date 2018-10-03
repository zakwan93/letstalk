# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # before_action :configure_sign_in_params, only: [:create]
  layout false
  # GET /resource/sign_in
  # def new
  #   super 
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out

  def destroy
    user_about_to_log_out = current_user.id
    session[:last_logged_out_id] = user_about_to_log_out
    super
    
  end

  # protected
  def after_sign_in_path_for(resource)
    profile_path
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
