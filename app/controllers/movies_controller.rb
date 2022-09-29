class MoviesController < ApplicationController
  
  def index
    movies = Movie.all
    render json: movies, include: :reviews
    # render json: movies.to_json(include: [reviews: {only:[:id, :comments, :member_id, :movie_id]}, include: [members: {only:[:id, :username]}]])
    # render json: movies.to_json(include: [reviews: (include: [:member])])
  end
end
