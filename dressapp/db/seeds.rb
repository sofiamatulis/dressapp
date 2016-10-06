# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Category.create(category: "Top")
# Category.create(category: "Bottom")
# Category.create(category: "Shoes")
# Category.create(category: "Dresses")

Item.create(name:"dress1", description:"a dress", image:"http://www.lindybop.co.uk/images/audrey-red-polka-dot-swing-dress-p41-15865_zoom.jpg", category_id: 8, wardrobe_id: 1)

# 5.times do
#   Item.create(
#     name: "Shirt",
#     description: "My favourite (insert colour) shirt!",
#     image: "https://www.wpclipart.com/clothes/shirt/tee_shirt/red_t_shirt_T.png",
#     category_id: 1,
#     wardrobe_id: 1
#   )
# end
#
# 5.times do
#   Item.create(
#     name: "Pants",
#     description: "My 2nd favourite pair of (insert colour) pants!",
#     image: "http://www.clipartkid.com/images/20/free-blue-pants-clip-art-EEo7kP-clipart.png",
#     category_id: 2,
#     wardrobe_id: 1
#   )
# end
