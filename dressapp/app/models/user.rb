class User < ApplicationRecord
  has_many :wardrobes
  has_many :suitcases
end
