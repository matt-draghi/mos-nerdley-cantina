class AddColumnToConnections < ActiveRecord::Migration[6.1]
  def change
    add_column :connections, :liked, :boolean
  end
end
