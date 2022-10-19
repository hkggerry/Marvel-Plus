class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    reviews = Review.all
    render json: reviews.to_json(except: [:created_at, :updated_at], include: [member: {only:[:id, :username]}])
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /movies/:id/reviews
  def create
    @review = Review.new(comments: params[:comments], member_id: params[:member_id], movie_id: params[:movie_id])
    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /reviews/1
  def update
    if @review.update(comments: params[:comments])
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
  
  def set_review
      @review = Review.find(params[:id])
  end

  def review_params
      params.require(:review).permit(:comments, :member_id, :movie_id)    
  end
end
