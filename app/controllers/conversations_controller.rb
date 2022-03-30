class ConversationsController < ApplicationController

    def index
        conversations = Conversation.all
        render json: conversations, status: 200
    end

    def create
        conversation = Conversation.new()
        conversation.user_id = session[:user_id]
        conversation.connection_id = params[:id]
        if conversation.valid?
            conversation.save
            render json: conversation, status: 201
        else
            render json: {errors: conversation.errors.full_messages}, stauts: 422
        end
    end 


end