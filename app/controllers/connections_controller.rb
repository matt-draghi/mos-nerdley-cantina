class ConnectionsController < ApplicationController

    def index #show liked connections in sidebar
        #grab your email
        email = User.find_by(id: session[:user_id]).email
        #grab all connections for a user where liked is true
        connections = User.find_by(id: session[:user_id]).connections.select{|connection| connection.liked == true}
        #get the emails of each connected user to run against the users table
        connection_emails = connections.pluck(:email)
        liked_users = User.all.select{|user| connection_emails.include?(user.email)}
        #create an array of users where you liked the user and they liked you
        # byebug
        matches = liked_users.select{|user|  
            user_connections = User.find_by(id: user.id).connections
            # byebug
            if  user_connections.length > 0
                user_connections.find_by!(email: email).liked == true
            else
                false
            end
            }
            # byebug
        render json: matches, only:[:id, :age,:description, :first_name, :image, :location, :favorite_character, :email], status: 200
    end

    # def show
    #     connection = Connection.find_by(email: params[:email])
    # end

    def create
        connection = Connection.new(connection_params)
        connection.user_id = session[:user_id]
        # debugger
        if connection.valid?
            connection.save
            render json: connection, status: 201
        else
            render json: {errors: user.errors.full_messages}, status: 422
        end
    end

    private

    def connection_params
        params.permit(:first_name, :email, :location, :age, :image, :favorite_character, :description, :liked)
    end
end
