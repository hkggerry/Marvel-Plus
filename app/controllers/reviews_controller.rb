class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    @reviews = Review.all
    render json: @reviews
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /movies/:id/reviews
  # def create
  #   @review = Review.new(review_params)

  #   if @review.save
  #     render json: @review, status: :created, location: @review
  #   else
  #     render json: @review.errors, status: :unprocessable_entity
  #   end
  # end

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
    # head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:comments, :member_id, :movie_id)
      
    end
end
