class Member < ApplicationRecord
    has_secure_password

    validates :username, :password, presence: true

    has_many :movies
    has_many :reviews, through: :movies
end
