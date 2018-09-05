class NotificationsController < ApplicationController
	def index
		@user = current_user || User.find(session[:last_logged_out_id])
		@profile = current_user.profile
    	@notifications = Notification.all.reverse
  	end
end
