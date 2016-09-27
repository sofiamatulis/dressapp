class AddToSuitcase < ActiveRecord::Migration[5.0]
  def change
    add_column :suitcases, :user_id, :integer
  end
end
