class AddActiveToTodos < ActiveRecord::Migration[5.1]
  def change
    add_column :todos, :active, :boolean, default: true
  end
end
