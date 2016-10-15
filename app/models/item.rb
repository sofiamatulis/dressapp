class Item < ApplicationRecord

  has_attached_file :image, default_url: 'http://lorempixel.com/g/200/200/'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


  belongs_to :category
  belongs_to :wardrobe, optional: true
  belongs_to :suitcase, optional: true
  has_and_belongs_to_many :suitcases


  def self.search(search)
    where("name LIKE ?", "%#{search}%")
  end

  # search method

end
