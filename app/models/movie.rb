class Movie < ApplicationRecord
    has_many :reviews
    has_many :members, through: :reviews
end
