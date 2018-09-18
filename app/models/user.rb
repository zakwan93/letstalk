class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :owned_chatrooms, class_name: 'ChatRoom', foreign_key: 'user_id'

  has_many :user_chat_rooms
  has_many :chat_rooms, :through => :user_chat_rooms, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :user_skills
  has_many :skills, :through => :user_skills, dependent: :destroy
  has_one :profile
  
  def name
  	email.split('@')[0]
  end
  
end
