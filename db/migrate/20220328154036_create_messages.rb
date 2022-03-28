class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :user_id
      t.integer :connection_id
      t.boolean :read_status
      t.string :message

      t.timestamps
    end
  end
end
