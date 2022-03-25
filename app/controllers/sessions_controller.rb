class SessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    def create
        user = User.find_by!(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            # session[:password_attempts] = (session[:password_attempts] || 0) + 1
            # TODO: implement account lockout functionality based on the above session
            render json: {errors: "Password not valid. Please try again."}
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

    private

    def record_not_found
        render json: {errors: "We were unable to find this email in our records.\n
            Please enter a valid email or create an account."}, status: :unprocessable_entity
    end
end
