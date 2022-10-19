class ActorsController < ApplicationController
    def index
        actors = Actor.all
        render json: actors, include: :movies
    end

    # def search
    #     actors = Actor.find_by name: params[:name]
    #     render json: actors
    # end

    def increment_likes
        actor = Actor.find_by(id: params[:id])
        if actor
            actor.update(actor_params)
            render json: actor
        else
            render json: {error: "Actor not found"}, status: :not_found
        end 
    end 
    private

    def actor_params
        params.permit(:name, :image_url, movie_count, like_count)
    end
end