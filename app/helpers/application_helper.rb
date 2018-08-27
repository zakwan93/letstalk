module ApplicationHelper

	 def gravatar_for(user, opts = {})
	    text_field_tag user.profile.fname
	    image_tag user.profile.image, style: 'max-width: 65px; max-height: 55px; min-width: 20px; min-height: 20px'
  	end
end
