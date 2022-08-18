class SessionsController < ApplicationController
    def create
        member = Member.find_by(params[:username])
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
