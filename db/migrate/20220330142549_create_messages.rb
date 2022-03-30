class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :conversation_id
      t.boolean :read_status
      t.string :message
      t.boolean :user_message

      t.timestamps
    end
  end
end
