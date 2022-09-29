class MembersController < ApplicationController

  def create
    member = Member.create(member_params)
    if member.valid?
      session[:member_id] = member.id
      render json: member
    else
      render json: {errors: member.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    member = Member.find_by(id: session[:member_id])
    if member
      render json: member
    else
      render json: {error: "Not Authorized"}, status: :unauthorized
    end
  end

  def index
    members = Member.all

    render json: members.to_json(except: [:created_at, :updated_at], include: [reviews: {except: [:created_at, :updated_at]}]) 
  end

  private

  def member_params
    params.permit(:username, :password)
  end
end
