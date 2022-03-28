class ConnectionsController < ApplicationController

    def index
        connections = User.all.select{|user| user.id != session[:user_id]}
        render json: connections, status: 200
    end
end
