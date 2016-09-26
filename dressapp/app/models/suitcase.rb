class Suitcase < ApplicationRecord
  has_many :items, through: :itemssuitcases
  has_many :itemssuitcases
end
