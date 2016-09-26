class Item < ApplicationRecord
  belongs_to :category
  belongs_to :wardrobe, optional: true
  belongs_to :suitcase, optional: true
end
