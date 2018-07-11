class ChatRoom < ApplicationRecord
  belongs_to :user
  # belongs_to :profile
  has_many :user_chat_room
  has_many :users, :through => :user_chat_room, dependent: :destroy
  has_many :messages, dependent: :destroy
end
