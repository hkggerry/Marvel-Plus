class AddActorIdToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :actor_id, :integer
  end
end
