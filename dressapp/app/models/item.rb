class Item < ApplicationRecord
  belongs_to :category
  belongs_to :wardrobe
  belongs_to :suitcase
end
