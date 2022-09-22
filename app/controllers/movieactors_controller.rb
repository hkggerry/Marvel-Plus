class MovieactorsController < ApplicationController
    def index
        movieActors = MovieActor.all
        render json: movieActors
      end
end
