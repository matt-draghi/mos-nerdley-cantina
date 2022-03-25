class UsersController < ApplicationController

    def show
        user = User.find_by(session[:user_id])
        if user
            render json: user, status: 200
        else 
            render json: {error: "Not authorized"}, status: :unauthorized
    end


    def create
        user = User.create(user_params)
        # byebug
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: 422
        end
    end


    private

    def user_params
        params.permit( :email, :password, :password_confirmation, :first_name, :age, :image, :favorite_character, :description)
    end

end
