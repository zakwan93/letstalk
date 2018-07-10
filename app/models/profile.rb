class Profile < ApplicationRecord
	# has_many :chat_rooms
	belongs_to :user

	has_one_attached :image
end
