class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :release_date
      t.string :rating
      t.string :image_url
      t.text :short_description
      

      t.timestamps
    end
  end
end
