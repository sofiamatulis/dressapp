class User < ApplicationRecord
  has_secure_password
  attr_accessor: :image_file_name

  has_attached_file :image


  has_many :wardrobes
  has_many :suitcases

  validates :name, :password_digest, presence: true
  validates :email, uniqueness: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/



end
