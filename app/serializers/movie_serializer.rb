class MovieSerializer < ActiveModel::Serializer
  attributes :id, :name, :release_date, :rating, :image_url, :short_description
end
