class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_rooms_#{params['chat_room_id']}_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_message(data)
    # puts ":::::::: #{data['chat_room_id']}::::::"
    # puts ":::::::: #{data['user_id']}::::::"
    @chatroom = ChatRoom.find(data['chat_room_id'])
    @chatroom.messages.create(body: data['message'], user_id: data['user_id'])
    # @chatroom.owner.messages.create!(body: data['message'], chat_room_id: data['chat_room_id'])
  end
  
end