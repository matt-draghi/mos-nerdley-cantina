class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :email
      t.string :password_digest
      t.string :location
      t.integer :age
      t.string :image
      t.string :favorite_character
      t.string :description

      t.timestamps
    end
  end
end
