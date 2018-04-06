class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def show
  end

  def new
    @todo = Todo.new
  end

  def edit
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save
  end

  def destroy
    @todo.destroy
  end

  private
    def todo_params
      params.require(:params).permit(:task, :participant)
    end
end
