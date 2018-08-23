class SkillsController < ApplicationController
	before_action :authenticate_user!

	def index
		@user = current_user
		@profile = current_user.profile
		@skills = current_user.skills
		if params[:language]
		    @result_skills = Skill.where("lower(language) LIKE ?", "%#{params[:language].downcase}%") 
		    @result_users = User.joins(:user_skills, :skills).where(user_skills: {skill_id:  @result_skills}).order('skills.rating DESC').uniq
		 else
		    @skills = Skill.all
  		end
	end

	def show
		@user = current_user
		@skills = current_user.skills
  	
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
		redirect_to profile_path
	end

	def edit
		@user = current_user
		@profile = current_user.profile
		@skills = Skill.find(params[:id])
	end

	def update
		@profile = current_user.profile
		@skills = Skill.find(params[:id])
		@skills.update(skills_params)
		redirect_to profile_path
	end

	def destroy
		@user = current_user
		@profile = current_user.profile
		@skills = Skill.find(params[:id])
		@skills.delete
		redirect_to profile_path
	end

	def dashboard
		@skills = current_user.skills
		@users = UserSkill.find(params[:id])
	end
	
	private
		def skills_params
			params.require(:skill).permit(:language, :disc, :rating)
		end
end
