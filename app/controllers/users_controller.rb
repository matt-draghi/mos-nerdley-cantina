class UsersController < ApplicationController

    def index
        #first grab all users that is not our current user
        other_users = User.all.select{|user| user.id != session[:user_id]}
        #then create an array of all emails for our user's connections
        connected_users = User.find_by(id: session[:user_id]).connections.pluck(:email)
        #create a list of users where the user email is not in connected users
        available_users = other_users.select{|user| !connected_users.include?(user.email)}
        # render json: other_users, serializer: UserOtherSerializer, status: 200
        render json: available_users.to_json(only: [:id, :email, :first_name, :description, :age, :favorite_character, :location, :image]), status: 200
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: 200
        else 
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end


    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: 422
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update(update_params)
            render json: user, status: 200
        else
            render json: {errors: user.errors.full_messages}, status: 422
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user&.authenticate(params[:password])
            user.destroy
            render json: {}, status: 200
        else
            render json: {errors: "Incorrect password"}, status: :unauthorized
        end
    end


    private

    def user_params
        params.permit( :email, :password, :password_confirmation, :first_name, :age, :image, :favorite_character, :description)
    end

    def update_params #can add password back in later as stretch
        params.permit( :email, :first_name, :age, :image, :favorite_character, :description )
    end

end
