class MessageSerializer < ActiveModel::Serializer
  attributes :id, :conversation_id, :read_status, :message, :user_message
end
