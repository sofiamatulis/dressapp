class Item < ApplicationRecord

  has_attached_file :image, default_url: 'http://lorempixel.com/g/200/200/'


  belongs_to :category
  belongs_to :wardrobe, optional: true
  belongs_to :suitcase, optional: true

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
