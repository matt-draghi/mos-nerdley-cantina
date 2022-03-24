class UsersController < ApplicationController

    # def show
    #     user = User.find_by
    # end


    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.error.full_messages}, status: 422
        end
    end


    private

    def user_params
        params.permit(:first_name, :email, :password, :password_confirmation, :age, :image, :favorite_character, :description)
    end

end
