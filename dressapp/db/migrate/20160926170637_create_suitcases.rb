class CreateSuitcases < ActiveRecord::Migration[5.0]
  def change
    create_table :suitcases do |t|
      t.string :name
      t.text :description
      t.integer :duration
      t.string :destination

      t.timestamps
    end
  end
end
