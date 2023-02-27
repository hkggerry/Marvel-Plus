class ActorsController < ApplicationController
    def index
        actors = Actor.all
        render json: actors, include: :movies
    end
end