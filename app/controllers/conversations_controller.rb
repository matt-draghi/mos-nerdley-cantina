class ConversationsController < ApplicationController

    def index
        conversations = Conversation.all
        render json: conversations, status: 200
    end

    def create
        #if matched, then save the conversation
        mainUser = User.find_by(id: session[:user_id])
        connectionUser = User.find_by(email: params[:email])
        if mainUser.connections.find(params[:id]).liked == true && connectionUser.connections.find_by(email: mainUser.email).liked == true
            #create conversation based on user and connection ids
            conversation = Conversation.new()
            conversation.user_id = session[:user_id]
            conversation.connection_id = params[:id]
            if conversation.valid?
                conversation.save
                render json: conversation, status: 201
            else
                render json: {errors: conversation.errors.full_messages}, status: 422
            end
        else
            render json: {}, status: 200
        end
    end 


end