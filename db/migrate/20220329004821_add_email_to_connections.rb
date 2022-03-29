class AddEmailToConnections < ActiveRecord::Migration[6.1]
  def change
    add_column :connections, :email, :string
  end
end
