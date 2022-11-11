class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end
    def show
        user = User.find_by(id:params[:id])
        render json: user
    end
    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: 201
        else
            render json: { errors: user.errors.full_message}, status: 422
        end
    end

    private

    def user_params
        params.permit(:username, :first_name, :last_name, :email, :password, :password_confirmation)
    end
end
