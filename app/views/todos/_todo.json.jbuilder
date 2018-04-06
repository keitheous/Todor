json.extract! todo, :id, :task, :due_date, :participant, :created_at, :updated_at
json.url todo_url(todo, format: :json)
