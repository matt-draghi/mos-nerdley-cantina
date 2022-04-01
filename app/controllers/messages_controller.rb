class MessagesController < ApplicationController

    def show
        connection = User.find(params[:connection_id])
        main_user = User.find_by(id: session[:user_id])
        connection_user = main_user.connections.find_by(email: connection.email)
        conversation = Conversation.find_by(user_id: session[:user_id], connection_id: connection_user.id)
        if conversation.valid?
            messages = Message.all.select{|message| message.conversation_id == conversation.id}
            render json: messages, status: 200
        else
            render json: {error: "No convo selected"}
        end
    end

    def create
        message = Message.new()
        main_user = User.find_by(id: session[:user_id])
        connection = main_user.connections.find_by(email: params[:connection_email])
        conversation = Conversation.find_by(user_id: main_user.id, connection_id: connection.id)
        message.conversation_id = conversation.id
        message.associated_email = params[:associated_email]
        message.message = params[:message]

        if message.valid?
            message.save
            render json: message, status: 201
        else
            render json: {errors: message.errors.full_messages}, status: 422
        end
    end


    def create_second
        message = Message.new()
        #tying to create a message for a conversation where the targetedConvo is the mainUser and where user is the connection
        main_user = User.find_by(email: params[:connection_email])
        connection = main_user.connections.find_by(email: params[:associated_email])
        conversation = Conversation.find_by(user_id: main_user.id, connection_id: connection.id)
        message.conversation_id = conversation.id
        message.associated_email = params[:associated_email]
        message.message = params[:message]

        if message.valid?
            message.save
            render json: message, status: 201
        else
            render json: {errors: message.errors.full_messages}, status: 422
        end
    end
end