class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :member_id, :movie_id
end
