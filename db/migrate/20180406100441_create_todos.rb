class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :task
      t.timestamp :due_date
      t.string :participant

      t.timestamps
    end
  end
end
