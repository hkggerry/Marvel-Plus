class CreateActors < ActiveRecord::Migration[6.1]
  def change
    create_table :actors do |t|
      t.string :name
      t.integer :movie_id
      t.string :image_url

      t.timestamps
    end
  end
end
