class Movie < ApplicationRecord
    has_many :reviews
    has_many :members, through: :reviews 

    has_many :movie_actors
    has_many :actors, through: :movie_actors
end
