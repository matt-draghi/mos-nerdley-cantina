class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.string :first_name
      t.string :location
      t.integer :age
      t.string :image
      t.string :favorite_character
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
