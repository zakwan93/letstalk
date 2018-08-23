class ChatRoomsController < ApplicationController

  def index
    @user = current_user
    @profile = current_user.profile
    @chat_rooms = @user.owned_chatrooms + @user.chat_rooms
    @chat_room = current_user.owned_chatrooms
    
    if params[:language]
        @result_skills = Skill.where("lower(language) LIKE ?", "%#{params[:language].downcase}%") 
        @result_users = User.joins(:user_skills, :skills).where(user_skills: {skill_id:  @result_skills}).order('skills.rating ASC').uniq
     else
        @skills = Skill.all
      end
  end

  def show
    @user = current_user
    @profile = current_user.profile
  	@chat_room = ChatRoom.includes(:messages).find_by(id: params[:id])
  	@message = Message.new
  end

  def new
    @user = User.find(params[:user_id])
            # User.find_by(id: params[:user_id])
    @profile = current_user.profile
    @chat_room = ChatRoom.new
  end

  def create
    # @user = current_user
    @user = User.find(params[:user_id])
    @profile = current_user.profile
    @chat_room = current_user.owned_chatrooms.build(chat_room_params)
    if @chat_room.save
      @user.user_chat_rooms.create(chat_room_id: @chat_room.id)
  
      flash[:success] = 'Chat room added!'
      redirect_to chat_rooms_path
    else
      render 'new'
    end
  end

  def destroy
    @chat_room = current_user.owned_chatrooms.find(params[:id])
    @chat_room.destroy
    redirect_to chat_rooms_path
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:title)
  end

end
