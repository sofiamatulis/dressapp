class AddFavorite < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :favorited, :boolean, :default => false
  end
end
