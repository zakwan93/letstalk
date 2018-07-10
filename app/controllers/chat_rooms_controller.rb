class ChatRoomsController < ApplicationController

  def index
    @user = current_user
    @profile = current_user.profile
    @chat_rooms = @user.chat_rooms
  end

  def show
    @user = current_user
    @profile = current_user.profile
  	@chat_room = ChatRoom.includes(:messages).find_by(id: params[:id])
  	@message = Message.new
  end

  def new
    @user = current_user
    @profile = current_user.profile
    @chat_room = ChatRoom.new
  end

  def create
    @chat_room = current_user.chat_rooms.build(chat_room_params)
    if @chat_room.save
      flash[:success] = 'Chat room added!'
      redirect_to chat_rooms_path
    else
      render 'new'
    end
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:title)
  end

end
