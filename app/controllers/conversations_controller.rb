class ConversationsController < ApplicationController

    def index
        conversations = Conversation.all
        render json: conversations, status: 200
    end

    def show
        user = User.find_by(id: session[:user_id])
        connection_user = user.connections.find_by(email: params[email])
    end

    def create
        #if matched, then save the conversation
        
        main_user = User.find_by(id: session[:user_id])
        connection_user = User.find_by(email: params[:email])
        user_in_connection = connection_user.connections.find_by(email: main_user.email)
        if user_in_connection
            if main_user.connections.find(params[:id]).liked == true && connection_user.connections.find_by(email: main_user.email).liked == true
                #create conversation based on user and connection ids
                # Need to create conversation for both users
                #User who liked 2nd
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
        else
            render json: {}, status: 200
        end
    end 

    def create_second        
        main_user = User.find_by(id: session[:user_id])
        connection_user = User.find_by(email: params[:email])
        user_in_connection = connection_user.connections.find_by(email: main_user.email)
        if user_in_connection
            if main_user.connections.find(params[:id]).liked == true && connection_user.connections.find_by(email: main_user.email).liked == true
                #User who liked 2nd
                #other user who already liked
                conversation2 = Conversation.new()
                conversation2.user_id = connection_user.id
                conversation2.connection_id = user_in_connection.id

                if conversation2.valid?
                    conversation2.save
                    render json: conversation2, status: 201
                else
                    render json: {errors: conversation2.errors.full_messages}, status: 422
                end
            else
                render json: {}, status: 200
            end
        else
            render json: {}, status: 200
        end
    end 


end