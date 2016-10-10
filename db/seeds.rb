# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
Category.create(category: "Top")
Category.create(category: "Bottom")
Category.create(category: "Shoes")
Category.create(category: "Dresses")

# Item.create(name:"dress1", description:"a dress", image:"http://www.lindybop.co.uk/images/audrey-red-polka-dot-swing-dress-p41-15865_zoom.jpg", category_id: 4, wardrobe_id: 1)

Item.create(name:"t-shirt", description:"blue t-shirt", image:"https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg", category_id: 1, wardrobe_id: 1)
Item.create(name:"shirt", description:"black dress shirt", image:"http://images.repertoirefashion.co.uk/images/products/zoom/1349795605-58871000.jpg", category_id: 1, wardrobe_id: 1)
Item.create(name:"sweater", description:"sweater", image:"http://www.atmintlstyle.com/sites/default/files/Knitted-Women-Sweater-for-Winter-2013.jpg", category_id: 1, wardrobe_id: 1)
Item.create(name:"shirt", description:"white shirt", image:"http://www.atmintlstyle.com/sites/default/files/2.women-shirts.jpg", category_id: 1, wardrobe_id: 1)

Item.create(name:"khakis", description:"my khakis", image:"https://assets.mountainkhakis.com/spree/images/939/product/M-Lake-Lodge-Pant-Classic-Khaki.jpg?1453212978", category_id: 2, wardrobe_id: 1)
Item.create(name:"pants", description:"pants", image:"http://uniqlo.scene7.com/is/image/UNIQLO/goods_56_180834?$prod$", category_id: 2, wardrobe_id: 1)
Item.create(name:"shorts", description:"shorts", image:"http://media.brostrick.com/wp-content/uploads/2015/05/06124929/light-slate-gray-khaki-shorts-for-men-2016.jpg", category_id: 2, wardrobe_id: 1)
Item.create(name:"jeans", description:"jeans", image:"http://lp.hm.com/hmprod?set=key[source],value[/model/2016/D00%200412707%20004%2085%204634.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[2]&set=key[quality],value[80]&set=key[size],value[346x405]&call=url[file:/mobile/v2/product]", category_id: 2, wardrobe_id: 1)

Item.create(name:"crocs", description:"awesome crocs", image:"http://masterwoodychan.com/wp-content/uploads/2016/04/crocs.jpg", category_id: 3, wardrobe_id: 1)
Item.create(name:"socks", description:"my watermelon socks", image:"http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Odd-Future-OFWGKTA-Watermelon-Crew-Socks-_212090.jpg", category_id: 3, wardrobe_id: 1)
Item.create(name:"shoes", description:"shoes", image:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=146587788", category_id: 3, wardrobe_id: 1)
Item.create(name:"boots", description:"brown boots", image:"https://s-media-cache-ak0.pinimg.com/236x/23/a6/63/23a663e8b8d24f65f93cc3544f1b81b4.jpg", category_id: 3, wardrobe_id: 1)

Item.create(name:"dress", description:"a dress", image:"http://lindybop_co_uk.cdn.visualsoft.co.uk/images/aphrodite-dove-grey-occasion-dress-p2720-16616_zoom.jpg", category_id: 4, wardrobe_id: 1)
Item.create(name:"dress", description:"another dress", image:"http://www.lindybop.co.uk/images/audrey-red-polka-dot-swing-dress-p41-15865_zoom.jpg", category_id: 4, wardrobe_id: 1)
