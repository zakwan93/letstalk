class SkillsController < ApplicationController
	before_action :authenticate_user!

	def index
		@user = current_user
		@skills = current_user.skills
		if params[:language]
		    @result_skills = Skill.where("lower(language) LIKE ?", "%#{params[:language].downcase}%") 
		    @result_users = User.joins(:skills).where(skills: @result_skills).order('skills.rating ASC')
		 else
		    @skill = Skill.all
  		end
	end

	def show
		@user = current_user
		@skills = current_user.skills

		if params[:language]
		    @result_skills = Skill.where("lower(language) LIKE ?", "%#{params[:language].downcase}%") 
		    @result_users = User.joins(:skills).where(skills: @result_skills).order('skills.rating ASC')
		 else
		    @skill = Skill.all
  		end
  	
	end

	def new
		@user = current_user
		@profile = current_user.profile
		@skills = Skill.new
	end

	def create
		# current_user.create_profile(profile_params)
		# Profile.create(profile_params.merge(user_id: current_user.id))

		current_user.skills << Skill.create(skills_params)
		redirect_to skills_path
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
		@skills = Skill.find(params[:id])
		@skills.destroy
		redirect_to skills_path
	end

	private
		def skills_params
			params.require(:skill).permit(:language, :disc, :rating)
		end
end
