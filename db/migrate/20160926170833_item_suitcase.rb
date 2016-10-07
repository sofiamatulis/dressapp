class ItemSuitcase < ActiveRecord::Migration[5.0]
  def change
    create_table :itemssuitcases do |t|
      t.integer :suitcase_id
      t.integer :item_id
    end
  end
end
