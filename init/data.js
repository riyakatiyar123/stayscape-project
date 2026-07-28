const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1592694844266-5c03865c7bc5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q296eSUyMEJlYWNoZnJvbnQlMjBDb3R0YWdlfGVufDB8fDB8fHww"
    },
   
    price: 7000,
    location: "Malibu",
    country: "United States",
    category: "Beachfront",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "New York City",
    country: "United States",
     category: "Mountains"
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/43/4b/a7/434ba7f72675522c6e706aac04406116.jpg"
    },
    price: 10000,
    location: "Aspen",
    country: "United States",
     category: "Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 7000,
    location: "Florence",
    country: "Italy",
    category: "Mountains"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 20000,
    location: "Portland",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/13/e3/af/13e3af2235121b52baa2715f3b4f63c9.jpg",
    },
    price: 25000,
    location: "Cancun",
    country: "Mexico",
    category: "Beachfront"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Lake Tahoe",
    country: "United States",
   category: "Cabin"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/ef/dd/46/efdd465385a5828398ca59a10b5c32af.jpg",
    },
    price: 25000,
    location: "Los Angeles",
    country: "United States",
    category: "Amazing Views"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 7500,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 9000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Camping"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/dd/34/03/dd340334630f245beea486cba16a09ac.jpg",
    },
    price: 9800,
    location: "Amsterdam",
    country: "Netherlands",
     category: "Historical"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/64/16/60/641660f8f14f3841d62b310750cf38f5.jpg",
    },
    price: 30000,
    location: "Fiji",
    country: "Fiji",
    category: "Beachfront"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5200,
    location: "Cotswolds",
    country: "United Kingdom",
     category: "Countryside"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/b5/06/4c/b5064c8cea3de7a085242c0fd9433887.jpg",
    },
    price: 45000,
    location: "Boston",
    country: "United States",
    category: "Historical"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 35000,
    location: "Bali",
    country: "Indonesia",
    category: "Beachfront"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/ec/74/2f/ec742ffae4f924e34edf5150d714d358.jpg",
    },
    price: 15000,
    location: "Banff",
    country: "Canada",
     category: "Mountains"
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/4e/84/6b/4e846b137d55b6b7e409f8c8d8fd7d5a.jpg",
    },
    price: 16000,
    location: "Miami",
    country: "United States",
     category: "Trending"
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/d9/3d/30/d93d307bf03e92ab6ec3ec2d43eac140.jpg",
    },
    price: 35000,
    location: "Phuket",
    country: "Thailand",
    category: "Beachfront"
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/b4/b5/4a/b4b54a65ff10e5a1837cbfbceb9447de.jpg",
    },
    price: 50000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles"
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/90/b8/cf/90b8cfc202f7612846250f74c96b7760.jpg",
    },
    price: 35000,
    location: "Dubai",
    country: "United Arab Emirates",
     category: "Amazing Pools"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url:"https://i.pinimg.com/1200x/f8/b6/3e/f8b63e75a522194c8eab07093d389e60.jpg",
    },
    price: 25000,
    location: "Montana",
    country: "United States",
     category: "Cabins"
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/57/c8/ab/57c8ab2e8fa668346725c5816259164a.jpg",
    },
    price: 25000,
    location: "Mykonos",
    country: "Greece",
    category: "Beachfront"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/ce/5f/90/ce5f90fbd9f85674300ac8fdce3fe7c8.jpg",
    },
    price: 45000,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Treehouses"
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/6b/1f/69/6b1f69a21f492043137b4e2472107fa1.jpg",
    },
    price: 40000,
    location: "Charleston",
    country: "United States",
    category: "Historical"
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/b6/57/20/b6572026548addf9154abb6e93d1244e.jpg",
    },
    price: 20000,
    location: "Tokyo",
    country: "Japan",
    category: "Trending"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/7f/95/da/7f95dab2ef5d43437e736a565f6a85e6.jpg",
    },
    price: 25000,
    location: "New Hampshire",
    country: "United States",
    category: "Lakefront"
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/fd/d4/75/fdd4751204d0b89e7c8d74a3ff50ea08.jpg",
    },
    price: 25000,
    location: "Maldives",
    country: "Maldives",
    category: "Beachfront"
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/b7/25/4b/b7254bb784409bb9db1fc5032e8f5bdb.jpg"
    },
    price: 30000,
    location: "Aspen",
    country: "United States",
    category: "Mountains"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 35000,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Beachfront"
  }, 
  
  {
    title: "Skyline Luxury Apartment",

    description: "Experience the energy of New York City from this modern luxury apartment offering breathtaking skyline views. Located close to Times Square, Central Park, and world-famous attractions, this stay features stylish interiors, premium amenities, and the perfect blend of comfort and convenience for an unforgettable city getaway.",

    image: {
        filename: "new_york_trending_1",
        url:"https://i.pinimg.com/vwebp/1200x/73/7a/fa/737afa082b2ebdf1d5cb2d496f64f565.webp",
    },

    price: 15000,
    location: "New York",
    country: "United States",
    category: "Trending"
},
{
    title: "Central Park View Residence",

    description: "Wake up to stunning views of Central Park from this elegant residence in the heart of Manhattan. Surrounded by world-class museums, luxury shopping, fine dining, and iconic attractions, this stay offers the perfect balance of nature and city life for an unforgettable New York experience.",

    image: {
        filename: "central_park_trending_1",
        url: "https://i.pinimg.com/vwebp/1200x/1d/90/d1/1d90d19988f58afe18cea45e3a93952b.webp",
    },

    price: 18000,

    location: "New York",

    country: "United States",

    category: "Trending"
},
{
    title: "Seattle Waterfront Retreat",

    description: "Discover the charm of Seattle from this stylish waterfront retreat offering spectacular views of Elliott Bay and the city skyline. Conveniently located near Pike Place Market, the Space Needle, and vibrant cafés, this modern stay combines comfort, elegance, and easy access to the city's top attractions.",

    image: {
        filename: "seattle_trending_1",
        url: "https://i.pinimg.com/736x/d9/0b/15/d90b15ec433c4e4cafba72d52e485bcb.jpg",
    },

    price: 14000,

    location: "Seattle",

    country: "United States",

    category: "Trending"
},
{
    title: "Eiffel View Luxury Suite",

    description: "Enjoy an unforgettable stay in this elegant luxury suite featuring breathtaking views of the Eiffel Tower. Located in the heart of Paris, this beautifully designed apartment offers modern comforts, stylish interiors, and easy access to world-famous attractions, charming cafés, and luxury shopping districts.",

    image: {
        filename: "paris_trending_1",
        url:"https://i.pinimg.com/vwebp/1200x/48/c9/f0/48c9f015e434d3f0cb18b6fd22ed5e18.webp",
    },

    price: 18000,

    location: "Paris",

    country: "France",

    category: "Trending"
},
{
    title: "Cappadocia Cave Retreat",

    description: "Experience the magic of Cappadocia in this luxurious cave retreat carved into the region's unique rock formations. Wake up to breathtaking views of colorful hot air balloons floating across the sky, explore ancient valleys, and enjoy a perfect blend of traditional Turkish charm and modern comfort.",

    image: {
        filename: "cappadocia_trending_1",
        url: "https://i.pinimg.com/736x/64/5f/3f/645f3f3be89b732958c5830d33077a9c.jpg",
    },

    price: 16000,

    location: "Cappadocia",

    country: "Turkey",

    category: "Trending"
},
{
    title: "Kyoto Heritage Retreat",

    description: "Immerse yourself in the timeless beauty of Kyoto with this elegant heritage retreat. Surrounded by historic temples, peaceful bamboo forests, and traditional Japanese gardens, this stay offers a perfect blend of cultural charm, modern comfort, and authentic local experiences.",

    image: {
        filename: "kyoto_trending_1",
        url: "https://i.pinimg.com/vwebp/1200x/44/e2/44/44e24417bc87c6770f642b8438493d9a.webp",
    },

    price: 17000,

    location: "Kyoto",

    country: "Japan",

    category: "Trending"
},
{
    title: "Thames Riverside Apartment",

    description: "Enjoy breathtaking views of the River Thames from this stylish riverside apartment in the heart of London. Conveniently located near Tower Bridge, the London Eye, and iconic landmarks, this luxurious stay combines elegance, comfort, and easy access to the city's vibrant attractions.",

    image: {
        filename: "london_trending_1",
        url: "https://i.pinimg.com/736x/fb/77/fb/fb77fbb85e10318eab3966f4dc978f4d.jpg",
    },

    price: 19000,

    location: "London",

    country: "United Kingdom",

    category: "Trending"
},
{
    title: "Banff Mountain Lodge",

    description: "Escape to the breathtaking Canadian Rockies in this cozy mountain lodge surrounded by snow-capped peaks, crystal-clear lakes, and scenic hiking trails. Perfect for nature lovers, this peaceful retreat offers stunning alpine views and a warm, inviting atmosphere throughout the year.",

    image: {
        filename: "banff_trending_1",
        url: "https://i.pinimg.com/736x/be/79/91/be79913e9f721a69db88c4012600ec6b.jpg",
    },

    price: 16500,

    location: "Banff",

    country: "Canada",

    category: "Trending"
},
{
    title: "Old Town Boutique Stay",

    description: "Experience the charm of Prague's historic Old Town in this beautifully designed boutique stay. Just steps away from the famous Astronomical Clock, Charles Bridge, and lively cafés, this elegant accommodation offers the perfect blend of history, comfort, and modern luxury.",

    image: {
        filename: "prague_trending_1",
        url: "https://i.pinimg.com/vwebp/1200x/97/0d/d8/970dd8d21d2d172e0f777a24c30fc476.webp",
    },

    price: 14500,

    location: "Prague",

    country: "Czech Republic",

    category: "Trending"
},
{
    title: "Marina Bay Luxury Stay",

    description: "Indulge in world-class luxury at this sophisticated stay overlooking Singapore's iconic Marina Bay. Featuring contemporary interiors, premium amenities, and easy access to Gardens by the Bay, Marina Bay Sands, and vibrant shopping districts, this residence promises an unforgettable city experience.",

    image: {
        filename: "singapore_trending_1",
        url: "https://i.pinimg.com/1200x/99/20/fc/9920fc0ec9d6c14c37a561aec020ff12.jpg",
    },

    price: 20000,

    location: "Singapore",

    country: "Singapore",

    category: "Trending"
},
{
    title: "Santorini Cliffside Villa",

    description:
      "Wake up to breathtaking views of the Aegean Sea from this luxurious cliffside villa in Santorini. Enjoy stunning sunsets, whitewashed architecture, private terraces, and easy access to charming cafés, beaches, and iconic blue-domed churches.",

    image: {
      filename: "santorini_amazing_views",
      url: "https://i.pinimg.com/736x/b7/e6/75/b7e675d5dde1515cf87bb94d8ecaa4e3.jpg",
    },

    price: 22000,

    location: "Santorini",

    country: "Greece",

    category: "Amazing Views",
},
{
    title: "Cappadocia Balloon View Suite",

    description:
      "Experience the beauty of Cappadocia from this elegant suite overlooking hundreds of colorful hot air balloons each morning. Explore ancient cave dwellings, breathtaking valleys, and enjoy an unforgettable sunrise from your private terrace.",

    image: {
      filename: "cappadocia_amazing_views",
      url: "https://i.pinimg.com/1200x/f2/15/3e/f2153e286cae7dde30ea68312212dbf7.jpg",
    },

    price: 18000,

    location: "Cappadocia",

    country: "Turkey",

    category: "Amazing Views",
},
{
    title: "Norwegian Fjord Retreat",

    description:
      "Relax in this modern retreat overlooking Norway's spectacular fjords. Surrounded by towering mountains, waterfalls, and crystal-clear waters, it's the perfect destination for nature lovers and adventure seekers alike.",

    image: {
      filename: "norway_fjord_view",
      url: "https://i.pinimg.com/vwebp/1200x/52/eb/73/52eb73f8c578c333148a475895aea3bd.webp",
    },

    price: 19500,

    location: "Geiranger",

    country: "Norway",

    category: "Amazing Views",
},
{
    title: "Amalfi Coast Terrace Stay",

    description:
      "Enjoy panoramic Mediterranean views from this beautiful hillside terrace overlooking the colorful villages of the Amalfi Coast. Experience authentic Italian cuisine, coastal drives, and unforgettable sunsets.",

    image: {
      filename: "amalfi_coast_view",
      url: "https://i.pinimg.com/vwebp/1200x/d4/32/a2/d432a2e0a7a1adad7f956215e09cd5a5.webp"},

    price: 21000,

    location: "Positano",

    country: "Italy",

    category: "Amazing Views",
},
{
    title: "Machu Picchu Mountain Lodge",

    description:
      "Stay near one of the world's greatest wonders in this peaceful mountain lodge offering breathtaking views of the Andes. Explore ancient Incan ruins, scenic hiking trails, and immerse yourself in Peru's rich cultural heritage.",

    image: {
      filename: "machu_picchu_view",
      url: "https://i.pinimg.com/1200x/b5/c3/3e/b5c33edb5cd8256382e480f5b934a7bf.jpg",
    },

    price: 17500,

    location: "Cusco",

    country: "Peru",

    category: "Amazing Views",
},
{
    title: "Bali Infinity Pool Villa",

    description:
      "Escape to this luxurious villa surrounded by lush tropical gardens in Ubud. Relax in your private infinity pool overlooking rice terraces and enjoy a peaceful Balinese retreat with world-class hospitality.",

    image: {
        filename: "bali_pool_1",
        url: "https://i.pinimg.com/736x/c5/28/87/c52887493caf17f2ec023bd71d1b153d.jpg",
    },

    price: 18000,

    location: "Ubud",

    country: "Indonesia",

    category: "Pools"
},
{
    title: "Maldives Overwater Pool Villa",

    description:
      "Experience ultimate luxury in this overwater villa featuring a private infinity pool, crystal-clear turquoise waters, and direct lagoon access. Perfect for a romantic island escape.",

    image: {
        filename: "maldives_pool_1",
        url: "https://i.pinimg.com/vwebp/736x/c4/f4/f2/c4f4f279274bbc08c04b3e7822f4a57c.webp",
    },

    price: 45000,

    location: "Maldives",

    country: "Maldives",

    category: "Pools"
},
{
    title: "Santorini Infinity Pool Suite",

    description:
      "Watch breathtaking sunsets over the Aegean Sea while relaxing in your private cliffside infinity pool. This elegant suite combines luxury, comfort, and unforgettable island views.",

    image: {
        filename: "santorini_pool_1",
        url: "https://i.pinimg.com/736x/68/3e/15/683e15f56b2175a336cd4b14016fa9de.jpg",
    },

    price: 25000,

    location: "Santorini",

    country: "Greece",

    category: "Pools"
},
{
    title: "Phuket Hillside Pool Villa",

    description:
      "Perched above the Andaman Sea, this stylish villa offers a spectacular infinity pool, modern interiors, and panoramic sunset views. The perfect tropical getaway.",

    image: {
        filename: "phuket_pool_1",
        url: "https://i.pinimg.com/1200x/8f/b4/1c/8fb41c1d534a57226fd76224e8e2629a.jpg",
    },

    price: 21000,

    location: "Phuket",

    country: "Thailand",

    category: "Pools"
},
{
    title: "Dubai Sky Pool Penthouse",

    description:
      "Enjoy unmatched luxury in this modern penthouse featuring a rooftop infinity pool overlooking Dubai's skyline. Close to the Burj Khalifa, Dubai Mall, and fine dining.",

    image: {
        filename: "dubai_pool_1",
        url: "https://i.pinimg.com/736x/ca/41/1f/ca411f378d06ca7b53e6554b74b1d4f1.jpg",
    },

    price: 32000,

    location: "Dubai",

    country: "United Arab Emirates",

    category: "Pools"
},
{
    title: "Tulum Jungle Pool Villa",

    description:
      "Surrounded by lush greenery, this modern jungle villa features a stunning private pool, open-air living spaces, and easy access to Tulum's famous beaches and cenotes.",

    image: {
        filename: "tulum_pool_1",
        url: "https://i.pinimg.com/736x/d1/07/da/d107da52b58f848348e8a2f4d44ac40d.jpg",
    },

    price: 17000,

    location: "Tulum",

    country: "Mexico",

    category: "Pools"
},
{
    title: "Lake Como Luxury Pool Villa",

    description:
      "Stay in an elegant Italian villa featuring a heated infinity pool overlooking the beautiful Lake Como. Enjoy luxurious interiors, breathtaking scenery, and world-class hospitality.",

    image: {
        filename: "lake_como_pool_1",
        url: "https://i.pinimg.com/vwebp/1200x/53/f2/17/53f2172be522faf0796e97457c6c364d.webp",
    },

    price: 28000,

    location: "Lake Como",

    country: "Italy",

    category: "Pools"
},
{
    title: "Whitehaven Beach Villa",

    description:
      "Relax in this luxurious beachfront villa overlooking the world-famous white sands of Whitehaven Beach. Wake up to crystal-clear turquoise waters, enjoy private beach access, and experience one of Australia's most spectacular coastal destinations.",

    image: {
        filename: "whitehaven_beach_1",
        url: "https://i.pinimg.com/736x/85/7f/be/857fbefa5384065794a0148fbb62a4ec.jpg",
    },

    price: 26000,

    location: "Whitsundays",

    country: "Australia",

    category: "Beachfront"
},
{
    title: "Bora Bora Lagoon Villa",

    description:
      "Experience paradise in this elegant beachfront villa surrounded by Bora Bora's crystal-clear lagoon. Enjoy breathtaking sunsets, direct beach access, and luxurious tropical living in one of the world's most iconic island destinations.",

    image: {
        filename: "bora_bora_beach_1",
        url: "https://i.pinimg.com/1200x/17/79/fd/1779fd9f524e75091ce3e9d695c28878.jpg",
    },

    price: 42000,

    location: "Bora Bora",

    country: "French Polynesia",

    category: "Beachfront"
},
{
    title: "Seychelles Oceanfront Escape",

    description:
      "Unwind in this beautiful beachfront retreat surrounded by granite cliffs, swaying palm trees, and the turquoise waters of the Indian Ocean. Perfect for a peaceful luxury getaway with stunning ocean views and pristine beaches.",

    image: {
        filename: "seychelles_beach_1",
        url: "https://i.pinimg.com/1200x/4f/07/aa/4f07aa7210d89bfcffae8691d4e84768.jpg",
    },

    price: 28000,

    location: "Mahé",

    country: "Seychelles",

    category: "Beachfront"
},
{
    title: "Rainforest Canopy Treehouse",

    description:
      "Nestled high above the rainforest floor, this luxurious treehouse offers breathtaking canopy views, modern comforts, and the soothing sounds of nature. Wake up to exotic birds, explore nearby hiking trails, and reconnect with the wilderness.",

    image: {
        filename: "rainforest_treehouse_1",
        url: "https://i.pinimg.com/736x/18/bc/a1/18bca15986074a1cfc2b74677911ac70.jpg",
    },

    price: 16000,

    location: "Monteverde",

    country: "Costa Rica",

    category: "Treehouses"
},
{
    title: "Bamboo Forest Treehouse",

    description:
      "Experience the tranquility of Bali in this handcrafted bamboo treehouse surrounded by lush forests and tropical gardens. Perfect for couples seeking a peaceful escape immersed in nature.",

    image: {
        filename: "bamboo_treehouse_1",
        url: "https://i.pinimg.com/vwebp/1200x/70/e6/cb/70e6cbd31399cff746aebea83ee3fa27.webp",
    },

    price: 18000,

    location: "Ubud",

    country: "Indonesia",

    category: "Treehouses"
},
{
    title: "Scandinavian Forest Treehouse",

    description:
      "Stay in a beautifully designed treehouse suspended among towering pine trees. Featuring minimalist Scandinavian interiors, panoramic forest views, and the chance to witness the Northern Lights during winter.",

    image: {
        filename: "scandinavian_treehouse_1",
        url: "https://i.pinimg.com/736x/ac/31/ee/ac31ee68a8d5af9851c2a2f7710b1256.jpg",
    },

    price: 21000,

    location: "Harads",

    country: "Sweden",

    category: "Treehouses"
},
{
    title: "Riverside Camp in Rishikesh",

    description:
      "Experience camping on the banks of the Ganga with cozy luxury tents, evening bonfires, river rafting, and breathtaking Himalayan views. Perfect for adventure lovers and nature enthusiasts.",

    image: {
        filename: "rishikesh_camping_1",
        url: "https://i.pinimg.com/736x/5c/3e/d6/5c3ed6f3ec5c5de58f862b20ed72f84a.jpg",
    },

    price: 5500,

    location: "Rishikesh",

    country: "India",

    category: "Camping"
},
{
    title: "Desert Camp Under the Stars",

    description:
      "Spend an unforgettable night beneath the stars in the heart of the Thar Desert. Enjoy camel safaris, traditional Rajasthani performances, authentic local cuisine, and stunning sunrise views over the dunes.",

    image: {
        filename: "jaisalmer_camping_1",
        url: "https://i.pinimg.com/736x/6e/de/ad/6edead52e25cf798f359c8db7f55b765.jpg",
    },

    price: 7000,

    location: "Jaisalmer",

    country: "India",

    category: "Camping"
},
{
    title: "Lakeside Camping Escape",

    description:
      "Wake up beside a crystal-clear alpine lake surrounded by pine forests and snow-capped mountains. Enjoy kayaking, fishing, hiking, and peaceful evenings around the campfire.",

    image: {
        filename: "lake_camping_1",
        url: "https://i.pinimg.com/vwebp/736x/75/91/3d/75913d018f307d18174ecf6ecea49f2f.webp",
    },

    price: 6500,

    location: "Lake Tahoe",

    country: "United States",

    category: "Camping"
},
{
    title: "Forest Glamping Retreat",

    description:
      "Stay in luxury safari tents surrounded by dense forests and wildlife. Enjoy nature walks, bonfires, stargazing, and a peaceful escape from city life with all modern comforts.",

    image: {
        filename: "forest_glamping_1",
        url: "https://i.pinimg.com/vwebp/1200x/5d/47/ac/5d47ac7153183de0f7a854a4e5673c30.webp",
    },

    price: 8000,

    location: "Yellowstone",

    country: "United States",

    category: "Camping"
},
{
    title: "Himalayan Base Camp",

    description:
      "Camp amidst majestic Himalayan peaks with breathtaking sunrise views, guided trekking routes, warm bonfires, and cozy tents designed for an unforgettable mountain adventure.",

    image: {
        filename: "himalayan_camping_1",
        url: "https://i.pinimg.com/vwebp/736x/59/cb/0b/59cb0b74b115f08af4e40cde57015cf3.webp",
    },

    price: 6000,

    location: "Manali",

    country: "India",

    category: "Camping"
},
{
    title: "Northern Lights Wilderness Camp",

    description:
      "Escape into the Arctic wilderness and witness the magical Northern Lights from your heated luxury tent. Enjoy snow adventures, peaceful forests, and unforgettable nights beneath the aurora.",

    image: {
        filename: "aurora_camping_1",
        url: "https://i.pinimg.com/1200x/64/4d/43/644d432b4574534e4bbcc1d4eb943fb8.jpg",
    },

    price: 15000,

    location: "Tromsø",

    country: "Norway",

    category: "Camping"
},
{
    title: "Roman Heritage Apartment",

    description:
      "Stay in the heart of Rome in this beautifully restored apartment surrounded by ancient landmarks. Walk to the Colosseum, Roman Forum, and Trevi Fountain while enjoying modern comforts blended with timeless Italian architecture.",

    image: {
        filename: "rome_historical_1",
        url: "https://i.pinimg.com/736x/06/8e/10/068e10954ec4698700ba12ec9328af03.jpg",
    },

    price: 17000,

    location: "Rome",

    country: "Italy",

    category: "Historical"
},
{
    title: "Kyoto Traditional Ryokan",

    description:
      "Experience authentic Japanese hospitality in this centuries-old ryokan featuring tatami rooms, peaceful gardens, and easy access to Kyoto's famous temples, shrines, and bamboo forests.",

    image: {
        filename: "kyoto_historical_1",
        url: "https://i.pinimg.com/vwebp/1200x/16/60/34/1660341f8b7f400153bd4168664126e7.webp",
    },

    price: 16000,

    location: "Kyoto",

    country: "Japan",

    category: "Historical"
},
{
    title: "Ottoman Heritage Mansion",

    description:
      "Step back in time in this beautifully preserved Ottoman mansion overlooking the Bosphorus. Explore Istanbul's historic mosques, palaces, bustling bazaars, and centuries of rich cultural heritage.",

    image: {
        filename: "istanbul_historical_1",
        url: "https://i.pinimg.com/736x/f3/a9/85/f3a985c6e45847a9cbc9a235cc1ca2a2.jpg",
    },

    price: 15500,

    location: "Istanbul",

    country: "Turkey",

    category: "Historical"
},
{
    title: "Heritage Haveli",

    description:
      "Live like royalty in this beautifully restored Rajasthani haveli featuring traditional architecture, colorful courtyards, handcrafted interiors, and easy access to Jaipur's magnificent forts and palaces.",

    image: {
        filename: "jaipur_historical_1",
        url: "https://i.pinimg.com/736x/b1/34/fb/b134fb83918606befb2b37e6820d09cf.jpg",
    },

    price: 12000,

    location: "Jaipur",

    country: "India",

    category: "Historical"
},
{
    title: "Colonial Portuguese Villa",

    description:
      "Stay in a charming Portuguese-era villa surrounded by palm trees and colorful streets. Discover Goa's rich colonial history, beautiful churches, heritage homes, and vibrant local culture.",

    image: {
        filename: "goa_historical_1",
        url: "https://i.pinimg.com/1200x/c0/8e/7a/c08e7a3c084b7d661767f29993998614.jpg",
    },

    price: 11000,

    location: "Goa",

    country: "India",

    category: "Historical"
},
{
    title: "Ancient Athens Residence",

    description:
      "Stay just steps away from the Acropolis in this elegant residence blending classical Greek architecture with modern comfort. Explore ancient ruins, lively streets, and authentic Mediterranean cuisine.",

    image: {
        filename: "athens_historical_1",
        url: "https://i.pinimg.com/vwebp/1200x/e5/aa/eb/e5aaebd6a1240c704e48fd77a8cba7a4.webp",
    },

    price: 16500,

    location: "Athens",

    country: "Greece",

    category: "Historical"
},
{
    title: "Petra Heritage Cave House",

    description:
      "Experience the wonders of Jordan by staying in a beautifully designed cave-style home inspired by the ancient city of Petra. Explore UNESCO World Heritage sites, dramatic sandstone cliffs, and centuries of fascinating history while enjoying modern comforts in a truly unique setting.",

    image: {
        filename: "petra_historical_1",
        url: "https://i.pinimg.com/1200x/72/ca/92/72ca9218be0d0abc4af222bbd9c5b986.jpg",
    },

    price: 15500,

    location: "Petra",

    country: "Jordan",

    category: "Historical"
},
{
    title: "Alhambra Palace Residence",

    description:
      "Stay in a charming Andalusian residence overlooking the magnificent Alhambra Palace. Wander through historic courtyards, beautiful gardens, and centuries-old architecture while experiencing the rich Moorish heritage of southern Spain.",

    image: {
        filename: "alhambra_historical_1",
        url: "https://i.pinimg.com/vwebp/736x/3f/c4/31/3fc43158c62665fa008d5b0aa34d1344.webp",
    },

    price: 17000,

    location: "Granada",

    country: "Spain",

    category: "Historical"
},
{
    title: "Luxor Nile Heritage House",

    description:
      "Discover the wonders of Ancient Egypt from this elegant heritage home overlooking the Nile River. Explore the Valley of the Kings, Karnak Temple, and Luxor Temple while enjoying traditional Egyptian hospitality and timeless surroundings.",

    image: {
        filename: "luxor_historical_1",
        url: "https://i.pinimg.com/736x/65/d4/a4/65d4a49775e8603d8d5f922fc382ef19.jpg",
    },

    price: 16500,

    location: "Luxor",

    country: "Egypt",

    category: "Historical"
},


];



module.exports = { data: sampleListings };