class Skill < ApplicationRecord
	has_many :user_skills, dependent: :destroy
	has_many :user, :through => :user_skills
end
