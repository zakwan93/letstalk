class ProfilesController < ApplicationController
	before_action :authenticate_user!

	def index
		@user = current_user || User.find(session[:last_logged_out_id])
		@profile = current_user.profile
		
	end

	def show
		@user = current_user
		@profile = current_user.profile
		@skills = current_user.skills
	end

	def new
		@user = current_user
		@profile = current_user.profile
		@profile = Profile.new
	end

	def create
		# current_user.create_profile(profile_params)

		# current_user.skills << Skill.create(skill_params)

		Profile.create(profile_params.merge(user_id: current_user.id))
		redirect_to new_skill_path
	end

	def edit
		@user = current_user
		@profile = current_user.profile
		@skills = current_user.skills
	end

	def update
		@profile = current_user.profile
		Profile.update(profile_params)
		redirect_to profile_path
	end

	def destroy
		@profile = Profile.find(params[:id])
		@profile.destroy
		redirect_to profile_path
	end

	def dashboard
		@user = current_user
		@skills = current_user.skills
		if params[:language]
		    @result_skills = Skill.where("lower(language) LIKE ?", "%#{params[:language].downcase}%") 
		    @result_users = User.joins(:user_skills, :skills).where(user_skills: {skill_id:  @result_skills}).order('skills.rating DESC').uniq
		 else
		    @skills = Skill.all
  		end
	end	

	private
		def profile_params
			params.require(:profile).permit(:fname, :lname, :nycdastudent, :location, :image)
		end
end
