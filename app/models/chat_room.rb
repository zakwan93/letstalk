class ChatRoom < ApplicationRecord
  # belongs_to :user
  # belongs_to :profile
  belongs_to :owner, class_name: 'User', foreign_key: 'user_id'
  has_many :user_chat_rooms, dependent: :destroy
  has_many :users, :through => :user_chat_rooms
  has_many :messages, dependent: :destroy

  #   delegate :profile, to: :owner
  # delegate :fname, to: :profile, prefix: 'owner'


  def owner_fname
  	owner.profile.fname
  end
end
