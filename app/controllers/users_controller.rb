class UsersController < ApplicationController
  def new
  end

  def create
    user = User.new(params[:user].permit(:username, :password, :password_confirmation, :email, :first_name, :last_name))
    user.save!
    redirect_to root_path
  end
end