# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
#
puts "starting seeds"

# Users
jane = User.create!(name: 'Jane Foster', email: 'jfoster@gmail.com', password: '123456', image: 'https://s3-us-west-2.amazonaws.com/packapp/assets/jane.jpg')

# Category for clothes
top = Category.create!(category: "Top")
bottom = Category.create!(category: "Bottom")
shoe = Category.create!(category: "Shoes")
dress = Category.create!(category: "Dresses")

# Wardrobes
winter = Wardrobe.create!(name: "Winter", user: jane)
summer = Wardrobe.create!(name: "Summer", user: jane)

# Tops for winter
Item.create!(name:"Red Knit Sweater", description:"Red sweater for casual days", image:"http://www.atmintlstyle.com/sites/default/files/Knitted-Women-Sweater-for-Winter-2013.jpg", category: top, wardrobe: winter)
Item.create!(name:"Grey Sweater Shirt", description:"It's a sweater and dress shirt in one!", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/longsleevejumper.jpg", category: top, wardrobe: winter)
Item.create!(name:"Grey Over Sized Sweater", description:"It's big and comfy", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/oversizedsweater.jpg", category: top, wardrobe: winter)
Item.create!(name:"Long Plaid Sweater", description:"Goes well with that Goose jacket", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/oversized-shirt.jpg", category: top, wardrobe: winter)
Item.create!(name:"Fox Sweater", description:"This is soo cute!", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/fox-sweatshirt.jpeg", category: top, wardrobe: winter)
Item.create!(name:"Cat Sweater", description:"Meow", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/catsweater.jpeg", category: top, wardrobe: winter)

# Bottoms for winter
Item.create!(name:"Blue Jeans", description:"Basic jeans", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/indigojeans.jpg", category: bottom, wardrobe: winter)
Item.create!(name:"Grey Sweat Pants", description:"Sweat pants for those lazy days", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/grey-sweat+pants.jpg", category: bottom, wardrobe: winter)
Item.create!(name:"Leather Leggings", description:"Faux leather leggings", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/faux-leather-leggings.jpg", category: bottom, wardrobe: winter)
Item.create!(name:"Fur Lined Jean", description:"These jeans are super warm", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/super-skinny+jeans.jpeg", category: bottom, wardrobe: winter)

# Shoes for winter
Item.create!(name:"Brown Heel Boots", description:"My favourite boots from 2 winters ago", image:"https://s-media-cache-ak0.pinimg.com/236x/23/a6/63/23a663e8b8d24f65f93cc3544f1b81b4.jpg", category: shoe, wardrobe: winter)
Item.create!(name:"Black Hunter Boots", description:"Rain boots for winter", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/hunterboots.jpg", category: shoe, wardrobe: winter)
Item.create!(name:"Camel Uggs", description:"4th pair of Uggs", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/uggs.jpg", category: shoe, wardrobe: winter)
Item.create!(name:"Black Ankle Boots", description:"Simple ankle boots", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/ankleboots.jpg", category: shoe, wardrobe: winter)

# Dress for winter
Item.create!(name:"Oversized Sweater Dress", description:"It's a really big sweater", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/jumper-dress.jpg", category: dress, wardrobe: winter)

# Tops for summer
Item.create!(name:"Striped Frill Blouse", description:"For those not so fancy, fancy days", image:"http://www.atmintlstyle.com/sites/default/files/2.women-shirts.jpg", category: top, wardrobe: summer)
Item.create!(name:"Floral Crop Top", description:"It's floral", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/floral-top.jpg", category: top, wardrobe: summer)
Item.create!(name:"Olive Top", description:"Just a basic shirt", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/basic-top.jpeg", category: top, wardrobe: summer)
Item.create!(name:"Lilac Blouse", description:"Shoulderless shirt", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/petite-blouse.jpg", category: top, wardrobe: summer)
Item.create!(name:"Checkered Shirt", description:"Red check shirt", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/check-shirt.jpg", category: top, wardrobe: summer)

# Bottoms for summer
Item.create!(name:"Olive Pants", description:"Just a regular pair of pants", image:"http://uniqlo.scene7.com/is/image/UNIQLO/goods_56_180834?$prod$", category: bottom, wardrobe: summer)
Item.create!(name:"Pencil Skirt", description:"Black pencil skirt", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/jersey-skirt.jpeg", category: bottom, wardrobe: summer)
Item.create!(name:"Leather Skirt", description:"Faux leather skirt", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/short-faux-leather-skirt.jpeg", category: bottom, wardrobe: summer)
Item.create!(name:"Light Blue Jeans", description:"Ripped jeans", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/lightbluerippedjeans.jpg", category: bottom, wardrobe: summer)
Item.create!(name:"Skinny Dark Jeans", description:"Skinny jeans", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/super-skinny+jeans.jpeg", category: bottom, wardrobe: summer)
Item.create!(name:"Black Leggings", description:"Basic leggings", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/leggings.jpg", category: bottom, wardrobe: summer)
# Shoes for summer
Item.create!(name:"Black High Top Converse", description:"Sneakers for everyday", image:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=146587788", category: shoe, wardrobe: summer)
Item.create!(name:"Black Toms", description:"Black canvas Toms", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/black-canvas-toms.jpg", category: shoe, wardrobe: summer)
Item.create!(name:"White Sandals", description:"Birkenstock Madrid", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/birkenstocksmadrid.jpg", category: shoe, wardrobe: summer)
Item.create!(name:"Black Louboutins", description:"Red bottoms!", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/louboutins.jpg", category: shoe, wardrobe: summer)
Item.create!(name:"Nude Heels", description:"Nude Louboutins", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/nudeeheels.jpg", category: shoe, wardrobe: summer)
# Dresses for summer
Item.create!(name:"Red Spotted Dress", description:"Cute little red dress", image:"http://www.lindybop.co.uk/images/audrey-red-polka-dot-swing-dress-p41-15865_zoom.jpg", category: dress, wardrobe: summer)
Item.create!(name:"Grey Dress", description:"Just a basic dress", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/ribbed-jersey+dress.jpeg", category: dress, wardrobe: summer)
Item.create!(name:"Floral Dress", description:"Cute floral dress", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/floral-frill-tea-dress.jpg", category: dress, wardrobe: summer)
Item.create!(name:"Short Dress", description:"Short dress with straps", image:"https://s3-us-west-2.amazonaws.com/packapp/assets/short-dress.jpeg", category: dress, wardrobe: summer)

puts "ending seeds"
