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
		redirect_to new_skills_path
	end

	def edit
		@user = current_user
		@profile = current_user.profile
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

		render 'profile/dashboard'
	end

	private
		def profile_params
			params.require(:profile).permit(:fname, :lname, :nycdastudent, :location, :image)
		end
end
