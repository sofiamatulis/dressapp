class User < ApplicationRecord
  has_secure_password

  has_attached_file :image, default_url: 'http://lorempixel.com/g/200/200/'


  has_many :wardrobes
  has_many :suitcases

  validates :name, :password_digest, presence: true
  validates :email, uniqueness: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


end
