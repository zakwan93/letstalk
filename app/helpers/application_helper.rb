module ApplicationHelper

	 def gravatar_for(user, opts = {})
	    opts[:alt] = user.profile.fname
	    image_tag user.profile.image, style: 'width: 25px; height: 25px;'
  	end
end
