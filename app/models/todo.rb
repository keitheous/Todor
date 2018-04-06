class Todo < ApplicationRecord
  def self.inactive
    where(active: false)
  end

  def self.active
    where(active: true)
  end
end
