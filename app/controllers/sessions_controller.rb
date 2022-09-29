class SessionsController < ApplicationController

# Create method would look up a user in the databse, verify their login credfentials, and the store the autenticated member's id in the session.
    def create
        member = Member.find_by(username: params[:username])
        if member && member.authenticate(params[:password])
            session[:member_id] = member.id
            render json: member
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end 

    def destroy
        session.clear
    end
end
