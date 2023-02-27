class Member < ApplicationRecord
    has_secure_password
    validates :username, :password, presence: true
    validates :username, uniqueness: true


    has_many :reviews
    has_many :movies, through: :reviews

end
