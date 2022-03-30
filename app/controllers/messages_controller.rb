class MessagesController < ApplicationController

    def show
        conversation = Conversation.find_by(user_id: session[:user_id], connection_id: params[:connection_id])
        if conversation.valid?
            # debugger
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
        # debugger
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
