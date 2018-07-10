class Skill < ApplicationRecord
	has_many :user_skills
	has_many :user, :through => :user_skills
end
