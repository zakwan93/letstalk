module SkillsHelper

	def skills_for_result(user_skills, result_skills)
		result_skills.map do |result_skill|
			user_skills.detect {|user_skill| result_skill.id == user_skill.id}
		end.compact
	end
end
