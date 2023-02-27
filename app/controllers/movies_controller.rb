class MoviesController < ApplicationController
  
  def index
    movies = Movie.all
    render json: movies, include: :reviews
  end

  def show
    movie = Movie.find_by(id: params[:id])
    if movie
      render json: movie, status: :ok
    else
      render json: {error: "whatever... movie not found"}, status: :not_found
    end
  end

end


















  # def description
  #   movies = Movie.all.filter{ |movie|movie.short_description.include? params[:short_description] }
  #   render json: movies
  # end