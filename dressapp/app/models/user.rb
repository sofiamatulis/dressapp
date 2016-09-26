class User < ApplicationRecord
  has_secure_password

  has_many :wardrobes
  has_many :suitcases

  validates :name, :password_digest, presence: true
  validates :email, uniqueness: true

end
