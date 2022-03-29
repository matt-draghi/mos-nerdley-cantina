class ConnectionsController < ApplicationController

    def index
        connections = Connection.all
        render json: connections, status: 200
    end

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
