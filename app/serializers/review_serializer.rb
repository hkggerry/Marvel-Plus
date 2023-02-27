class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comments, :member_id, :movie_id, :add_member

  def add_member
    "#{self.object.member.username}"
  end

end
