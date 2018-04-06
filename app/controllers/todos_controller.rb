class TodosController < ApplicationController
  def index
    @todos = Todo.active
    @done = Todo.inactive
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save
  end

  def update
    task = Todo.find_by(id: params[:id])

    if task # todo:: move this into model as a boolean toggle
      task.active = !task.active
      task.save
    end
  end

  def destroy
    task = Todo.find_by(id: params[:id])
    task.delete if task
  end

  private
  # todo:: def find_task find by @task before_action - destroy and update

  def todo_params
    params.require(:params).permit(:task, :participant)
  end
end
