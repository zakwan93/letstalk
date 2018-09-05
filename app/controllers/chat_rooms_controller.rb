class ChatRoomsController < ApplicationController

  def index
    @user = current_user
    # @me = User.find(params[:user_id])
    @profile = current_user.profile
    @chat_rooms = @user.owned_chatrooms + @user.chat_rooms
    # @chat_room = @me.user_chat_rooms
    # @user_name = @user.profile.fname 
    
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
    # if user owned_chatrooms then only he/she can check that chat room and write a message 


    # chat_room
    # id.     user_id
    # 12       8


    # user_chat_room
    # chat_room_id      user_id
    #   12                9
    #.  12                27
    #.  12                32


    if @chat_room.owner.id == @user.id || @chat_room.user_chat_rooms.map(&:user_id).include?(@user.id)
      #                                     # [9, 27, 32]
  	  @message = Message.new
    else
      redirect_to chat_rooms_path
    end
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
    @chat_room = ChatRoom.find(params[:id])
    # @chat_room = current_user.owned_chatrooms.find(params[:id])
    @chat_room.destroy
    redirect_to chat_rooms_path
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:title)
  end

end
