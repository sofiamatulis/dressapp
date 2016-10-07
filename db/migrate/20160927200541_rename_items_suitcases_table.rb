class RenameItemsSuitcasesTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :itemssuitcases, :items_suitcases
  end
end
