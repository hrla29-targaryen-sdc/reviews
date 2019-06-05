const db  = require('./index.js');

let reviews = [
 {
   createdAt: "7-May-19",
   nickName: "DY",
   title: "True fit",
   body: "Love these perfect fit",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Mar-19",
   nickName: "JB",
   title: "Great product. Good buy",
   body: "Great product. Good buy",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Feb-16",
   nickName: "rhonda read",
   title: "Very comfortable and light",
   body: "He loved it!  Very comfortable and light.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Jul-18",
   nickName: "MDH",
   title: "One Star",
   body: "It stinks too badly to wear. Returned it.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "31-May-18",
   nickName: "D. Everson",
   title: "Comfortable.",
   body: "My wife loves these! Great purchase.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Jan-19",
   nickName: "Jason T",
   title: "Fits perfectly",
   body: "Fits great and stylish.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Oct-18",
   nickName: "Leisa",
   title: "Felt good on my feet",
   body: "Comfortable to walk in right out of the box",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Mar-19",
   nickName: "Hermy",
   title: "Quality product and a great price!",
   body: "Excellent pair of stretchy jeans!  good soft fit!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Jan-19",
   nickName: "C. P.",
   title: "Nice looking and comfortable",
   body: "Comfortable right out of the box. Kept feet warm.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Dec-18",
   nickName: "Kelbi Duree",
   title: "Not bad.",
   body: "They’re a little on the larger side, but they work.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "9-May-19",
   nickName: "TAV422",
   title: "Fits great!",
   body: "Fits great! My gut don’t hang out when lifting my arms.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Feb-19",
   nickName: "Anna M.",
   title: "Great fit - Very comfortable",
   body: "These boots are very comfortable and the size is perfect.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Dec-18",
   nickName: "LynnM",
   title: "True to Size and Comfortable",
   body: "These hiking boots fit perfectly and are VERY comfortable!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-May-19",
   nickName: "Anonymous",
   title: "I love these shirts",
   body: "Very comfortable. Cool. And I don’t think you can wrinkle them.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Feb-19",
   nickName: "Dave E. Schnuckel",
   title: "Very Good Boots",
   body: "Very good boots. My wife loves them. Long break in period, though.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "8-Jun-18",
   nickName: "M.Smith",
   title: "Love these hiking boots!",
   body: "Very comfortable but runs a little small.  Love these!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Jan-19",
   nickName: "Daniel Jones",
   title: "Comfortable",
   body: "Nice quality shirt. Fits well. Possibly more purchases in the future",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Jan-19",
   nickName: "Nimgol",
   title: "feels and fits comfortable and great.",
   body: "I bought it for workout and it feels so comfortableness and fits me perfectly.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-Jan-19",
   nickName: "Bre",
   title: "Great moisture wicking comfy shirt",
   body: "Great moisture wicking shirt. Doesn't collect lint, as many other styles have.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Feb-19",
   nickName: "Iron Man",
   title: "Comfortable, light, sturdy, and fashionable.",
   body: "All that you would want in a good quality hiking boot in the Pacific Northwest",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Jan-19",
   nickName: "Steven D.",
   title: "Nice T-shirt",
   body: "It's a great buy, a good T-shirt at a good price. Well made and worth the money.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Jul-18",
   nickName: "Kristina N",
   title: "One Star",
   body: "Not a fan, it was really long. And no matter how much i washed it it smelled AWFUL.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "28-Mar-19",
   nickName: "Angela Hughes",
   title: "Love these",
   body: "Been looking for years for just such a shoe!  Really love that they come in 10 1/2.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Nov-18",
   nickName: "Barbara E. Goll",
   title: "Very satisfied",
   body: "Comfortable & great for walking. Better ankle support than Moab mid original version.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Nov-18",
   nickName: "Jan",
   title: "Horrible shirt",
   body: "This shirt fit fine when it arrived after wearing it once it shrunk unable to wear it.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "26-Mar-19",
   nickName: "Mickey",
   title: "Water proof?",
   body: "They are good boots! My feet did get wet while hiking! I not sure they are water proof",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "8-May-19",
   nickName: "lori coffman",
   title: "Comfortable and Breathable",
   body: "My son uses this shirt for cross country. Comfortable and breathable. Wicks liquid well",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Aug-18",
   nickName: "Jacob Cook",
   title: "Neck cutout to big",
   body: "Did not like these. I dislike shirts with huge neck cutouts. These fall in that category",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "23-Oct-17",
   nickName: "Aztec K.",
   title: "Five Stars",
   body: "Great shirt to wear on the boat or on a hot day. Lightweight and very breathable material.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-May-19",
   nickName: "Richard  T",
   title: "Great shoes",
   body: "I loved my shoes.  it was the correct size.  You were right when you said a 8 1/2 takes a 9.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Jan-19",
   nickName: "Dr.Lynn",
   title: "Just right?",
   body: "We'll know more when the weather is just wrong for light sneakers. But they look good so far.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Apr-19",
   nickName: "Bridget N. Havard",
   title: "I bought 2 and will buy more!",
   body: "This was a gift and he liked everything about the shirt. Great buy! Great shirt! Great Service!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Aug-18",
   nickName: "Harry A. Jones Jr.",
   title: "Great shirts, little pricey but worth it",
   body: "Great shirts, little pricey but worth it. Great to work out in or go out on a casuel night out.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Dec-18",
   nickName: "Petunia",
   title: "My favorite boot.  2nd pair in 12 years",
   body: "I like every about these boots.  Needed no breaking in.  Fun color, waterproof tested already!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-Dec-18",
   nickName: "Kindle Customer",
   title: "Great fit!",
   body: "My favorite jeans! I like the stretchy material because they don't bulge in the back of the legs.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Feb-19",
   nickName: "CR",
   title: "Comfortable and Fit Perfectly",
   body: "These fit perfectly and are so well- made, comfortable, and attractive. They're also lightweight.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Jul-18",
   nickName: "barbara",
   title: "I love this boot",
   body: "I love this boot. This is my second pair. Only thing I would change is if the lace loops were metal.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Jan-19",
   nickName: "Nora Hudock",
   title: "Great in every way",
   body: "Fit as expected - look good - comfortable - easy to put on and take off even with all the secure lacing",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "5-Apr-16",
   nickName: "Nordstrom2010",
   title: "cannot go wrong with levis but these are shorter in ...",
   body: "cannot go wrong with levis but these are shorter in length than the pair i purchased on the levis website.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Apr-18",
   nickName: "Becky L Peterson",
   title: "Used them right out of the box no pinching and ...",
   body: "Used them right out of the box no pinching and true to size . I have flat feet so no complaints.. Yippee!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "20-Mar-19",
   nickName: "Nordstrom Customer",
   title: "My favorite workout and lounging shirt",
   body: "The same old shirt you know and love. Medium fits me perfect and I am 5’11”, 182 lbs, with a 32 inch waist.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Nov-18",
   nickName: "Billie",
   title: "Authentic and shipps fast",
   body: "Just as good quality as I'd expect from UnderArmour. Item was quickly shipped. It is authentic. I will buy agay",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "20-Aug-18",
   nickName: "chris",
   title: "Decent undershirt",
   body: "Very thin and fit small to size. I’d order a larger size and make sure you know they are pretty much see through",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "2-Oct-18",
   nickName: "BriWadd",
   title: "Cool and breathable material",
   body: "Great shirt for the price.... It has a nice cold breathable feel husband loves it it's not too heavy good quality",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "12-May-19",
   nickName: "E K",
   title: "These are being discontinued by UA",
   body: "Get em while you can.  UA continues to try to reinvent the wheel by killing off and replacing a superior product.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-Apr-19",
   nickName: "Coral Dworaczyk",
   title: "Love these!",
   body: "Outstanding Boots! These were perfect for walking and standing all day… Highly recommend! You won’t be disappointed!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "2-May-19",
   nickName: "sherry",
   title: "Great but stiff",
   body: "I loved these but they were too stiff around my ankles.  Returned them for the not waterproof version, and love those!",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "11-Mar-19",
   nickName: "Tammy - Omaha, NE",
   title: "Great shirt",
   body: "Great shirt for my son-in-law.  It is a hard shirt to find and he loves them.  So glad I found it here and for a good price.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "2-Aug-18",
   nickName: "Elizabeth Taylor",
   title: "Good quality, fits just as expected",
   body: "I’m 5’2 100 lbs, ordered an XS and it was as if it was made just for me! I will definitely order another! Good quality, too!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Dec-18",
   nickName: "Nordstrom Customer",
   title: "Love this shirt",
   body: "Shirt fits great. My first UA shirt. Being a bug guy, I wasn't sure about the product. Buy, was I wrong. I am ordering more.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Apr-19",
   nickName: "Gisele R.",
   title: "I love these boots!",
   body: "Super boots, fit well, comfortable.Second pair from the company. Quality I can count on.I wear them hiking 2-3 times a week.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Aug-18",
   nickName: "Actual Person",
   title: "Odd proportions",
   body: "Narrow across shoulders and tight in the arms. Loose across the belly. So, great for the opposite of someone who is in shape.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "4-May-18",
   nickName: "Chris",
   title: "UA Short Sleeve T-Shirt",
   body: "Good purchase for me...I'm over weight and sweat a lot at work.  These are great for not letting it get through to my uniform.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Oct-18",
   nickName: "Bamm Bamm latino",
   title: "UA is A++++",
   body: "UA accessories are top quality . I love my T-shirts I have added to my daily collection. Will recommend to family and friends.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "1-Aug-18",
   nickName: "Otis Plato",
   title: "Great shirt, fits great and many colors",
   body: "The color is as advertised. It fits great (XXL) and I really like the styling. My wife likes is as it looks ok without ironing.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "20-Feb-18",
   nickName: "Nordstrom Customer",
   title: "Buy them from Macy’s.",
   body: "Hated them! Nothing like the genuine 711’s that I bought from Macy’s that are supposedly the exact same brand, style, and size.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "19-Dec-18",
   nickName: "K. Henderson",
   title: "I freakin' love these boots.",
   body: "I hike in very muddy conditions and these boots are amazing. They keep my feet dry and warm.  I love them. Great traction, too.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Feb-19",
   nickName: "Melissa Bonaby",
   title: "Nice shirt",
   body: "My son loves the way these shirts fits.......he is enjoying them with his under Armour shorts....the color matches perfect......",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Nov-18",
   nickName: "MFC",
   title: "A good gym shirt",
   body: "It's a good gym shirt. Fits as expected.  A little on the 'thin material' side, but that's probably on par with most gym shirts.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "28-Jun-18",
   nickName: "Cindy D",
   title: "Bought a large and it fit perfectly. I am ...",
   body: "Bought a large and it fit perfectly. I am 5ft 6inches 190 lbs and it brushed the top of my feet. Also bought it in other colours.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-Jan-19",
   nickName: "C2076",
   title: "Comfortable Hiking Boots",
   body: "I love them, my only complaint is that the laces keep coming undone and I am having to stop to retie them.  Maybe with better laces.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Aug-18",
   nickName: "Dalton Rodrigues",
   title: "Great deal!",
   body: "Great shirt. Very comfortable and fit was true to size. No loose strings or anything like other UA shirts I’ve purchased in the past.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-Mar-18",
   nickName: "Nordstrom Customer",
   title: "... XL just for the chest aspect and it fits perfect! I will be ordering more from this supplier",
   body: "I am 5’ 11 with a 40 DDD  chest I order a XL just for the chest aspect and it fits perfect! I will be ordering more from this supplier",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Mar-19",
   nickName: "Robert",
   title: "Horrible Material",
   body: "The shirt is made of some horrible material, unlike the majority of other Columbia PFG shirts.  The shirt is stiff and entirely too thick.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "15-Apr-19",
   nickName: "Peter",
   title: "Sure makes you feel enormous",
   body: "If you want to feel enormous, then this is the shirt for you. Just like wearing a tent. Never again. Mighty thankful I only bought one ...",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "27-Nov-17",
   nickName: "Ashley Elizabeth",
   title: "Husband LOVES this shirt",
   body: "My husband LOVES this shirt - he asked me to buy more. The large fit him perfectly at 6'1' and around 190 pounds, muscular arms and chest.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Nov-18",
   nickName: "Double L",
   title: "Big and small",
   body: "Somehow the body of the shirt is too big while the neck is tiny. Maybe I just have a huge head and a tiny body, but I think it’s the shirt.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "21-Jul-18",
   nickName: "Michelle",
   title: "He is a tall guy and they offer it in Tall which is awesome. Very nice breathable material",
   body: "I bought this for my husband and he loves it.  He is a tall guy and they offer it in Tall which is awesome.  Very nice breathable material.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Aug-18",
   nickName: "SylverBullit",
   title: "Decent Shirt",
   body: "Overall quality is good, but the collar won't lay down, even after 5 or so washings. It's not a bad shirt, but I'm not that excited about it.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "28-Dec-18",
   nickName: "supercalifragilisticexpialidocious",
   title: "Great for layers and wicking!",
   body: "Love wicking and quality of UnderArmor shirts. I use it as an undershirt with my button-down shirts to help with sweat absorbing and wicking.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "5-Oct-18",
   nickName: "Dana",
   title: "MOAB is a perfect name",
   body: "I did quite a lot of hiking, using all sort of shoes. These are the best! Your foot and ankle feels like trapped in a cloud, and no blisters!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Jul-18",
   nickName: "Nordstrom Customer",
   title: "Fits great and very flattering",
   body: "Fits great and very flattering, but it's been more than 15 washes and it still REEKS of chemicals.Very embarrassing to wear, Do not recommend.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "5-Dec-17",
   nickName: "betsey greenspan",
   title: "Great Boot",
   body: "This is an incredibly comfortable boot from the first wearing.  It’s early in the season, but I expect them to wear well. The tred is amazing.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Jan-19",
   nickName: "Jeff F",
   title: "Great for day hikes!",
   body: "I'm difficult to fit. I need a lot of arch support. these boots felt great the first time i wore them and are just getting better with time...",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "20-Jan-19",
   nickName: "David",
   title: "Great boot.",
   body: "Got the 1/2 bigger for my girl and they fit just right. She loves them. They feel great on her fee one of the most comfortable shoes she owns.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Nov-18",
   nickName: "susan",
   title: "Columbia makes a great shirt",
   body: "My husband has several of these shirts but needed a size smaller. This was a great but, and the color is good, true yellow but not neon-bright.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Apr-19",
   nickName: "Occasional shopper",
   title: "Wash and wear. No wrinkles, fading, or shrinking",
   body: "A gift to my son. He likes the ease of movement, style and color.  It washes up nicely and dries quickly with no shrinking,  fading or wrinkles",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Sep-18",
   nickName: "Keystone Policy Center Customer",
   title: "Fit as expected",
   body: "This type of shirt has me transitioning from 100% cotton in the hot, humid south. Much more breathable with the wicking aspect of the material.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Sep-18",
   nickName: "Chris",
   title: "Great Shirt, Can Be Overpriced",
   body: "Got it on sale for about $22.  Great shirt!  I would buy more but, feel they are overpriced.  I'm always on the look out for that sale price again.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Dec-18",
   nickName: "Sally",
   title: "If ya like pajamas....",
   body: "You'll love these if you like wearing pajamas all day. I personally prefer real jeans! Whatever happened to classic cotton and very little stretch?",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "8-Oct-18",
   nickName: "Amy",
   title: "My new favorite jeans",
   body: "I have been living in these jeans ever since I bought them a week ago. They have a little stretch to them, which I love! I need them in more colors!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Jun-18",
   nickName: "Mel",
   title: "Terrible chemical smell",
   body: "This dress reeks. It has some weird chemical stench. I have washed it four times and the stink is still the same. It smells so bad it is unwearable.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "17-Jul-18",
   nickName: "Jenny Mcdonald",
   title: "Heavy Wrinkly fabric",
   body: "The material is thick and wrinkly, usually have to steam it staight.Living in the south the Tamiami style is thinner fabric plus hardly any wrinkles!",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "12-Nov-18",
   nickName: "iheartavrey",
   title: "Isn’t grey- it’s navy blue",
   body: "The “steel” color isn’t grey, it’s like a navy blue. Picture is deceiving. Doesn’t matter since it wasn’t purchased for the color only.  It will work.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Dec-18",
   nickName: "Jules Charpentier",
   title: "Great price performance.",
   body: "Very light, but as an undershirt, it provides good protection from cooler weather and keeps your body dry. Half the price of other sports brand names.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "7-Sep-18",
   nickName: "Stuart T.",
   title: "Great shirt but sizes run large.",
   body: "Great quality shirt. The shirt runs large. I usually wear a medium, but the small fit perfect. I would order one size down than what you normally wear.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-Nov-18",
   nickName: "Christy",
   title: "Perfect hiking boots",
   body: "Super comfy out of the box - great on long hikes and very water resistant (but not water proof) when I stepped in a stream :) Would buy again/recommend.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Jun-17",
   nickName: "RiverBears",
   title: "Buy it in every color, darling!",
   body: "I love shirt so much that I have it in 10 colors & patterns. It's the best shirt for everyday living. Breathable, cool, lightweight, UV & stain resistant.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-Aug-18",
   nickName: "MAN",
   title: "Super Comfy!",
   body: "Love these boots! My first hike with them was 11 miles in the Redwoods National Park!  Very comfortable and no blisters.  The color combo is nice as well.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-May-18",
   nickName: "Gary B.",
   title: "I give up trying to find shirts that fit. ...",
   body: "I give up trying to find shirts that fit. Too big, or smaller than expected. Bought 2 Columbia shirts same size recently, no uniformity even by manufacturer.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "2-Mar-19",
   nickName: "Stan",
   title: "Great shoe",
   body: "I bought this shoe for my daughter who is Walking dogs for a living.She loves the shoe and says it is perfect. It gives her comfortable support and is sturdy",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Mar-19",
   nickName: "Terasec",
   title: "Not worth it",
   body: "Way too bigI am a L in all my clothingThis is more of an xl or even xxlFabric is also heavy not a good warm weather shirtEither i give it away or throw it away",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "21-Jun-18",
   nickName: "Paul E Clawson",
   title: "Great pants. Bad packaging.",
   body: "The pants are great. This particular shipment was not. The plastic bag for the pants was not sealed. Makes me wonder if these were returned by another customer.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "30-Jan-19",
   nickName: "Luz Maria",
   title: "Excellent quality for the price",
   body: "My son usually fits perfectly into 34x34 slacks and jeans. These run snug in the waist (he said). The slacks are very well made. Excellent quality for the price.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-Nov-18",
   nickName: "Roy U.",
   title: "Cut small",
   body: "These shirts seem smaller than similar purchases several years ago.  Feel like they are saving money by using less material.  Plus I have lost weight since then.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "11-Jul-18",
   nickName: "Jennifer",
   title: "The fabric smells terrible, and Ive tried everything",
   body: "The chemical smell is so bad, that I cannot even wear it. Yes, I have washed it several times, always air-drying, and it is still just as awful. So disappointed.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "30-Jan-19",
   nickName: "Smautra",
   title: "Great for the price",
   body: "Merrell boots are the best! I have bought these boots several times over the years and they fit wonderfully and last all through at least one winter, if not two.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Mar-18",
   nickName: "Royce",
   title: "Left rashes",
   body: "Great overall, fot well, looked amazing, under armour doesnt fo wrong, but it left rashes under both my arms. Have to return. Very upset because it looked so well.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "13-Apr-19",
   nickName: "Nordstrom Customer",
   title: "Great Undershirt",
   body: "I use these as undershirts and they are great. Put a couple in your cart and wait for the price to dip below $15. Its a $15 shirt, not a $40 shirt. Would buy again.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Mar-19",
   nickName: "The Reader",
   title: "It's nice",
   body: "Another UA product. This was the best price for an overpriced Tee Shirt and it fits as expected. Nothing really that special, just wanted to a at least 1 UA product.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Sep-18",
   nickName: "Nordstrom Customer",
   title: "Nice fit but scratchy material",
   body: "I’ve owned several polyester Under Armour shirts in the past and love them.  I like this one too,  but the polyester is a tad bit scratchy compared to previous shirts.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "17-Dec-18",
   nickName: "T. Thomas",
   title: "Fits, Looks, Feels GREAT!",
   body: "I love these shirts! They are always consistent and I can count on Under Armour to look and feel great! Sizing guide was what I used and it was an accurate estimation.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Mar-19",
   nickName: "Cornelius B. Willingston",
   title: "Like wearing nothing. Light and comfy",
   body: "Perfect fit. Loose, but still flattering. Feels like wearing nothing. Very light and comfy.I have some of these shirts that have lasted years. Worth the price for sure.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Aug-18",
   nickName: "shegoat",
   title: "They were great, and my friend had the same ones that ...",
   body: "I climbed Mt. St. Helens in these puppies.  No breaking in needed.  They were great, and my friend had the same ones that she'd been hiking mountains in for five years.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Jan-19",
   nickName: "Z. Jackson",
   title: "Great shirt for fishing",
   body: "Great shirt but it does run a little big. I would have ordered a size down if I ordered another one.  Nice light weight fabric that dries quickly. Good sim protection too.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "19-Mar-19",
   nickName: "Dave S.",
   title: "Perfection.",
   body: "Perfection. Been using these since they came out.  I just keep re-ordering them when they get heavily stained or wear out.  Don't buy any imitations.  Go with the original.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Mar-18",
   nickName: "Walkie",
   title: "Overall it is fine to work out in but it is a little ...",
   body: "Fits small and listed short sleeve but I received long. Overall it is fine to work out in but it is a little to tight to lounge in or go out to the store after working out.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "21-Oct-18",
   nickName: "L. Kowalski",
   title: "Love this soooo much!",
   body: "Wore these brand new out of the box for hiking and they were perfect.  Nothing sore, just enough extra room to be super comfortable.  Great ankle support and super stylish!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Dec-18",
   nickName: "ROM",
   title: "Crap",
   body: "Bought the one in navy blue and it was like two toned weasel with a firm material, got this one from the same seller and everything and it’s way different and fits like crap",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "14-May-19",
   nickName: "Jacq",
   title: "No break in period",
   body: "Loved these boots!  Went hiking for 2-3 days in Sedona.  The boots were perfect - easy to lace up, no break in period and great ankle support.  They really gripped the rocks",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "19-Jan-17",
   nickName: "CMin",
   title: "Runs a little small but really cute. Order one size up from your winter\" size!\"",
   body: "I'm a 10-12 and ordered a 14. They fit and are cute! They're not too long like others have said. I'm average...5'6' and they're a great length. Pretty comfy with the stretch!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "6-Sep-18",
   nickName: "Michael Howell",
   title: "Fits great.",
   body: "I love Under Armour products and this shirt is no exception. Well made and performs great. Have worn many times since purchase - no shrinkage or other issues. Great feel fit.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Sep-18",
   nickName: "Jen Klatt",
   title: "Perfect Fit, doesn’t fade and never shrinks!! A+",
   body: "He loves this shirt! I bought him a few under armor shirts and each one fit perfectly and none of them have shrank or faded in color! I will be purchasing him more of them soon!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Sep-18",
   nickName: "rl",
   title: "Great shirts , but seem differant.",
   body: "I love under armour tech shirts . but I've noticed they have changed the shirts seem longer and the arms longer . still they are my favorite shirts . can wear them out to workout",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Dec-18",
   nickName: "LK",
   title: "Best boot I’ve owned.",
   body: "Love this boot! Did not need anytime to break in, kept my feet dry and warm. I seriously ran in them a few times while camping and they were fine! Worth every penny, and so cute!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Apr-19",
   nickName: "HB",
   title: "Poor quality",
   body: "The stitching is already coming apart on this shirt. I've only worn it once or twice.I have three other 2xl shirts and this one is smaller than those three. It does not fit right.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "30-Mar-19",
   nickName: "Shar",
   title: "Size 11 (normally wear 10.5 W)",
   body: "It's a struggle finding shoes when you're a size 10.5, so I went up to an 11 and there's just enough room in the toe box for thicker socks. I'm in love with these shoes, so comfy!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "2-Aug-18",
   nickName: "JamesT",
   title: "Very cool and comfortable to sleep in or wear outdoors.",
   body: "A loose fit as advertised. I have several of these loose fit UA shirts. This white one is a thinner material than my others. Very cool and comfortable to sleep in or wear outdoors.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Mar-19",
   nickName: "Nordstrom Customer",
   title: "Great!",
   body: "I love these and use them all the time on photography adventures. The only negative is that I had to buy longer laces. The laces that come with it are barely enough to double knot.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Aug-18",
   nickName: "Sid Gerber",
   title: "For some reason the white color is less expensive",
   body: "It's a great nice-looking shirt that I wear for work instead of a shirt that you would wear with a suit. High quality 100% nylon with a flap in the back that helps with ventilation.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Apr-19",
   nickName: "S.Lis",
   title: "No thick thighs",
   body: "I love Levi jeans in theory but...they’re never friendly for girls thick in the thighs.I had to order a size up to fit my thighs in & then they were baggy on my backside.I returned.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "2-Apr-18",
   nickName: "CM",
   title: "I need to do some hiking to see how they hold up but I am pleased with them so far",
   body: "First pair I ordered were too small. Second pair arrived and fit well. They seem to be well made. I need to do some hiking to see how they hold up but I am pleased with them so far.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Oct-17",
   nickName: "Kimberly A. Hinton",
   title: "Great once you figure out your size",
   body: "Had to exchange for a larger size but once I did that they worked out great.I am 143lbs most of my weight is in tummy so the size 29's were to tight however the 30/32 were just right.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-Dec-18",
   nickName: "Fabel Family",
   title: "Packaging is awful. Shirt itself is perfect",
   body: "Color is great, fit is great for my XLT guy but what careless packaging! The shirt was stuffed in a wad in a plastic bag. It took two days on a hanger to get some of the wrinkles out!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Mar-18",
   nickName: "dummy customer",
   title: "good for muck and snow",
   body: "I hope I like this pair as much as the earlier model of the same boot,  waded in water and the waterproofing lasted a long time, these fit well, have good soles for muck and snow, etc",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "14-Nov-18",
   nickName: "MaMaBear",
   title: "MOAB really does mean Mother Of All Boots!",
   body: "Very comfortable right out of the box. They kept me warm and dry when hiking for an entire weekend in fast changing weather. They also fit perfect, I wear a seven and ordered a seven.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Dec-18",
   nickName: "Ardent shopper",
   title: "Nice black jeans",
   body: "Slimming style. Nice fit in black fabric for fuller tummy and hips. The blue denim in the same size is a slightly less generous fit because the denim fabric seems to have less stretch.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Apr-18",
   nickName: "L. Erickson",
   title: "Great Shoes, Worth the Money.",
   body: "These shoes are awesome.  Always comfortable, fit as expected and hold up to many miles of abuse.  This is around my 7th pair of Merrell’s.  Can’t see myself ever buying anything else.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Apr-18",
   nickName: "Kevin",
   title: "No thanks",
   body: "Not remotely what I was expecting or trying to buy, also this is the single largest item I have ever seen in the size I usually wear.  I'm sure it's great for whatever it was intended for",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "22-Aug-18",
   nickName: "suzmguz",
   title: "but the person hated the fabric",
   body: "this was a gift also, but the person hated the fabric. It's not cotton. It's a special blend of threads designed to wick away moisture. So if your friend likes cotton, this is not for him.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "30-Apr-19",
   nickName: "Johanna",
   title: "Order a size up",
   body: "The size is off...ordered the same size in another color and that fit just perfect.....These had the Levi tags that indicated the correct size but came small. Can not wear because too small.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "28-Oct-18",
   nickName: "Patricia J. Tennies",
   title: "PFG = great",
   body: "Bought two of these for my son-on-law for Christmas, who lives on St. Thomas, USVI.  He loves these shirts.  They don't wrinkle, are fast drying in the sun and protect you from the suns rays.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Apr-19",
   nickName: "Brian",
   title: "These pants are too loose.",
   body: "I got these pants and they looked worse than in the pics, they fit looser than expected, and were longer than expected, they are dragging the ground a bit and they are my normal size (44x34).",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "8-Sep-17",
   nickName: "LilMom",
   title: "Great jeans.  AND AFFORDABLE!",
   body: "Super comfy.  Better fit than the Joe's Jeans, Guess, and NYDJ that I also tried.  Husband even reports that they're a good fit on the butt.  For the price of the Levi's, the rest can go back.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "31-May-18",
   nickName: "ER",
   title: "Way too long",
   body: "Extremely long! I was not expecting to have to roll the pants three times to make them an appropriate length. I am a 30 L and ordered a 30 L, but in these I need a 28 or even a 27. Be careful!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "30-Nov-18",
   nickName: "SLP Girl",
   title: "A little too skin tight",
   body: "These are okay but more like a legging than a skinny jean.  I find myself pulling them up more by the end of the day.  Not exactly stretched out just quitting a little.  I like the 311 better.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "31-Jan-18",
   nickName: "abc",
   title: "Comfortable, good for hiking",
   body: "Comfortable, good for hiking, and they look great on my big, wide feet !  So many styles of hiking boots look atrocious and are unbecoming to my feet,but not these !  I highly recommend them !",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Apr-18",
   nickName: "Tegan H",
   title: "Uncomfortable and short",
   body: "Cute... I'm 5'9' and it hits right at my ankle, so it's shorter than I'd like. Also the band around the high waist is super tight and I have a pretty small waist at that spot. Ordered a medium.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "2-Aug-18",
   nickName: "SianXu",
   title: "Love these!",
   body: "I bought these before I went on Utah road trip. We  hiked for a week continuously, explored Arches, Bryce Canyon and more, rain or shine. These shoes works perfectly and are comfortable enough!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Jul-10",
   nickName: "Nordstrom Customer",
   title: "bahama",
   body: "I love the shirt.  It is cool in this hot and humid climate.  The one fault I have discovered is the breast pockets are too large and are always billowed out. Other than this the shirt is great.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "16-Apr-19",
   nickName: "Arielle Patton",
   title: "Great shirts",
   body: "I buy these shirts for my dad all the time. He's a farmer so works outside and gets the shirts very dirty. They seem to stand the test of time and help keep him cool during the scorching summers.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-May-18",
   nickName: "K. Graham",
   title: "Love it and want another one",
   body: "I'm a size 16/18, 5'5', and wear a 38DDD bra. Ordered an XL and I love it! The fabric is good, not too thin (not see through) and the fit is very nice. It goes to the floor on me. Would buy again!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Dec-17",
   nickName: "genesis",
   title: "Beautiful pair of Levi’s",
   body: "Beautiful pair of Levi’s. I weigh 115lb and am 5’ ft tall. I got a size 27R but will be exchanging for a 26R. They feel loose around my waist just a tad bit. I know the 26R will be just right 👍🏽",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "11-Feb-19",
   nickName: "Terra W.",
   title: "I’m ordering more!",
   body: "Love love love these jeans! They were a little loose when I first tried them in but they shrunk and fit perfectly after one wash.I ordered a 28 and I am 5’6 & 130 lbsThey are my new favorite jeans.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "1-Aug-18",
   nickName: "Alvin Ortega A",
   title: "I ordered a Large and ti feels like an XL",
   body: "The size on this is one more. I ordered a Large and ti feels like an XL.Love the shirts, use them on a daily basis, but if you are ordering this model, dial one size down. At least this was my case.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Aug-17",
   nickName: "kev090",
   title: "Love it!",
   body: "Never expected less from Under Armour. The quality of this shirt is the best! Not to loose not to tight, just a regular shirt that would be good to wear around the house, the gym, or going shopping.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "25-May-18",
   nickName: "Jeremy Lindeman",
   title: "I just got the shirt and I noticed that some ...",
   body: "I just got the shirt and I noticed that some of the stitching on the right arm is messed up and starting to come out. Kinda makes me think that the stitching on that arm will completely come out....",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "9-Feb-19",
   nickName: "sb81",
   title: "Weird fit",
   body: "I love Levi’s for fit and durability, but I cannot find a pair of skinny jean the fit correctly. These gap and stretch and pull in weird spots, though I suppose they technically fit. I returned them.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "8-May-18",
   nickName: "Blueman7",
   title: "Not normal haggars.",
   body: "These are not the same as other haggars  I ordered. Different material and not khaki but more like polyester. Ordered black and they were normal haggars. Different company or fake I think. Returning.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "24-Jun-18",
   nickName: "Cindy",
   title: "I love how soft it is and can’t see through it",
   body: "This is what I’ve been looking for ! I love the how its soft and can’t see through! .. I’m 5’7 and 160 .. hits the top of my feet ! At Macy’s this dress would be 50.00 .. Get it ❤️ A large fit great !",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Oct-17",
   nickName: "True North",
   title: "A Tad Larger Than Expected",
   body: "I find these Columbia shirts run a tad larger than typical. Perhaps they are more “true to size” than other brands. Otherwise, look great; good construction. Would purchase again but one size smaller!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "14-Jan-18",
   nickName: "Coco",
   title: "Fit Great !",
   body: "I love Levi's so I'm total biasedI can tell you I'm 5' 1 165lbs and built like an apple and the fit is long but perfect everywhere else. Washed a few times and the color has stayed great.Hope it helps.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-Mar-17",
   nickName: "Kal14",
   title: "I like these shirts",
   body: "I like these shirts. They keep you cool. But these stain so easy!!! When you are cleaning and gutting fish these shirts don't hold up well. Other fishing shirts have scotch guards for this very reason.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "9-Oct-17",
   nickName: "Yifan (Brandon) Yang",
   title: "Light comfy material",
   body: "I like the material of this shirt. It is super light. I would give this shirt a five star but it is too big for me. I suggest reading the size chart, reviews and q&as carefully before buying this product.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "22-Dec-18",
   nickName: "Heather Fuller",
   title: "Perfect",
   body: "I wasn't expecting to love these, but they fit perfect! The waist is a little stretchy which I love, because hey, it's the holidays! Nice skinny fit and very flattering on the bum. Getting a few more pair.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Jan-19",
   nickName: "KAS",
   title: "Best walking, hiking boots ever.",
   body: "These are a replacement pair for the boots I've worn out. So happy to find the same quality, materials and comfort as my original pair. Looking forward to comfortable walks no matter the weather or terrain.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Aug-18",
   nickName: "kerensa",
   title: "Hope you can sew",
   body: "I love the shape and texture of this dress but the it has shoddy craftsmanship. The stitching in the seams isn't well done. I have already sewn up three holes. I've worn it once to dinner. About three hours.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "8-Oct-18",
   nickName: "walter alvarado",
   title: "Good fit for multiple sports or just wear it casual",
   body: "I lift weights so I have an thicker build but this works well for my cardio and weight sessions.  I even use them for basket ball.  Good fit. Don't retain sweat like cotton shirts and look good in my opinion",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "31-Jan-19",
   nickName: "Scott W",
   title: "Just right",
   body: "My wife purchased this boot, her second pair of this style (the first purchased over 7 years ago and now being used as her gardening boots). Very well made, good arch support and they were delivered quickly.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Mar-19",
   nickName: "Jerome Bigge",
   title: "A good pair of pants.",
   body: "These are well made pants and the material of which they are made is of high quality. You can buy pants from a number of places, but the quality likely won't be as high as you pretty much get what you pay for.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Oct-18",
   nickName: "Heather Sharpe",
   title: "Amazing fit",
   body: "The fit is amazing. I really don't like jeans that are too tight or cutting me in half because they are just uncomfortable but these fit perfectly ... that are fitted without being too tight. Love these jeans.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Feb-19",
   nickName: "Homealone",
   title: "NOT the yellow pictured.",
   body: "I ordered these shirts for a fishing club and they are not the yellow pictured, more like a neon or lemon yellow, very bright yellow.  The quality looked good but no even close to the shade of yellow pictured.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "23-Jul-18",
   nickName: "JCS",
   title: "I am overall very happy with them",
   body: "These are my go to hiking shoes. I am overall very happy with them. If I dont get the laces just right they sometimes hurt the top of my feet. Other than that I love them. Comfortable, good grip, good looking.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "11-Apr-18",
   nickName: "Nordstrom Customer",
   title: "These are distressed with holes, not just faded.",
   body: "I like the jeans, they fit very well...but from the picture I did not expect that they would arrive as 'distressed' as they are. I thought that I would get a pair of jeans without holes...that was not the case.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "18-Jan-18",
   nickName: "LIz Strahlo-Holdren",
   title: "These boots are terrific. They were comfortable right away and did not ...",
   body: "These boots are terrific. They were comfortable right away and did not need breaking in. My feet are usually sore within an hour of any new footwear. Wore these for 6 hours the first day and my feet were happy!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Jan-19",
   nickName: "Happy Customer",
   title: "Are they real UA?.",
   body: "My son only wears UA so I have bought alot  of UA, For one thing the emblem does not look right. It dose not lay flat. The material is kind of weird. I have my doubts. Let's see what he says. I will say nothing.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "9-Aug-18",
   nickName: "MJ Mook",
   title: "Love",
   body: "Love these pants! These are the only pants we buy for my husband. He is very tall so we have a hard time finding something to fit him. These look and feel nice and the little bit of stretch  in the band is a plus.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-May-18",
   nickName: "Nordstrom Customer",
   title: "Glad i sized up!",
   body: "Very glad I sized up to XXL. The top is still slightly snug on my 40DD chest so hopefully it wont shrink! Material is very comfy and decent amount of stretch. I love the pockets.  Bright blue color is my favorite!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "3-Feb-18",
   nickName: "JGSF",
   title: "Nice shirts. Fit well and good quality",
   body: "Nice shirts.  Fit well and good quality.  Cheaper or very closely priced to places ive visited who carry these.  Colors are a bit off when viewed online but thats not a big deal.  I would order more in the future.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Jul-18",
   nickName: "Nancie",
   title: "Highly recommend!",
   body: "Perfectly comfortable right out of the box.  I had tried several pairs before I found these and had no time to 'break then in'. I got theses the day I had to be on the range on my feet all day for 3 days in a row.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Nov-18",
   nickName: "Lisam",
   title: "Fantastic",
   body: "My husband uses these to work in. He works outdoors in Florida. They are light weight, light but protective an comfortable and pulls the sweat from him. The price is great and quick delivery. I will buy them again.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Aug-18",
   nickName: "Nordstrom Customer",
   title: "Great In the Heat",
   body: "I've been living in these 100% polyester shirts with the high heat and 80% humidity in SoCal! You still sweat but the wicking action of the fabric keeps you cool! I'll save my cotton t-shirts for the cooler winter.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-Dec-14",
   nickName: "Kindle Customer",
   title: "Great travel shirt",
   body: "Great travel shirt. Excellent for doing business in hot / humid climates like Hong Kong and Singapore. I own an assortment of different colors with a total of about eight. They are all well made and holding up well.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Jan-15",
   nickName: "Stephen M.",
   title: "Like wearing a plastic bag...",
   body: "As the shirt is all synthetic and a tight weave it is basically like wearing a plastic bag. I sweat like a stuck pig wearing it and as such don't wear it. If you perspire even a little bit stay away from this shirt!",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "16-Nov-18",
   nickName: "kld311",
   title: "Buy these!",
   body: "These are amazing. Perfect for cold weather on ice and snow. They kept my feet super warm and dry, better than any pair of boots I’ve had before. Excellent product! And the price was just right for the high quality.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Aug-18",
   nickName: "Emily Plahanski",
   title: "Runs large",
   body: "Amazingly comfortable. Size runs extremely large! My husband is 6’ 4” 160 pounds (tall and thin) usually a medium and the medium drowned him. We gave it to his friend - 6’ 5” and 200+ pounds and medium fit like a glove.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "3-Jan-19",
   nickName: "E_Dubb",
   title: "Great under shirt",
   body: "I use these for under my work shirts and they are very comfortable.  They breath better than cotton.  Only four stars because the collar gets loose by the end of the day, but I am very picky about that so it may just be me.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "4-Feb-19",
   nickName: "Cakelady",
   title: "Love these boots!",
   body: "I am on my feet all day on my job, plus I am out in all kinds of weather. They keep my feet warm and dry and I literally wear out a pair per year. It's not the shoes that wear out, but the arches do.  This is my third pair!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Feb-19",
   nickName: "Merchant",
   title: "Not same fabric / baggy sloppy",
   body: "Fabric changed!These jeans are baggy and saggy once worn for an hour!My old 711 can be worn for weeks and still pass the baggy falling down test .Very disappointed - can trust to buy these on line . Time for a brand change !",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "20-May-18",
   nickName: "MEG",
   title: "Given as a Christmas gift. It's the first time ...",
   body: "Given as a Christmas gift.  It's the first time in 30 years I've purchased clothes for 52 year old son and it was just what he wanted for a new exercise he's under taking. -  time to take control of his heart and life style.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "2-Mar-19",
   nickName: "Marybelle9288",
   title: "Extremely lightweight",
   body: "Great for sensitive skin. For those who always wear 2 shirts (an undershirt + tshirt or polo) due to sensitivity, this is something you can wear alone. Great for heated exercise as its extremely lightweight. Will buy another.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Jun-18",
   nickName: "V. Phillips",
   title: "Satisfied customer",
   body: "Merrell brand is my go-to shoe for comfort and quality. These boots are no exception. They are well made, sturdy, and comfortable. They do a great job of keeping my feet dry as well as I sometimes grudge through watery areas.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Apr-18",
   nickName: "Ruthannebarrett",
   title: "Just order the dress!",
   body: "I was hesitant to order a dress I hadn't tried on but the reviews seemed pretty good! I am 5'4 and  a size 12/14 and this dress fits great! I ordered a large! The fabric is so soft and I have received a ton of compliments on it!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-May-18",
   nickName: "Jewels Gold",
   title: "Great dress!",
   body: "I love this dress!  The fit was perfect.  I'm 5'4' and around 150 pounds, and ordered the M.  This dress is well made, not sheer came super fast.  Will be ordering another in a different color.  I love the black dress I received.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "1-Nov-18",
   nickName: "Alan Kulbacki",
   title: "Material is great , light and breathable",
   body: "Well, I'm a little overweight to begin with but the bucket space , i.e the space between the waist and the croch area is a little shallow , sitting is great but walking is a little tight .  I like the light weight material though",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "11-Jan-19",
   nickName: "Benji",
   title: "Good boot",
   body: "Very comfortable! Holding up well, though I haven't had them long. I think they look good, I got the tan/pink color and my partner has the grey/blue so we only match if you look closely. Happy with my purchase. Runs true to size!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Oct-18",
   nickName: "Nordstrom Customer",
   title: "These are not Levi's!",
   body: "I ordered Levi's 711 skinny jeans and recieved Calvin Klein Jean's ankle skinny. How do you confuse Levi's with Calving Klein?!? And I doubt they are even Calvin Klein, the quality is horrible! I'd give zero star rating if I could",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "28-Feb-19",
   nickName: "Pillowtalk",
   title: "Distressed skinny jeans",
   body: "Love these Levi's skinny jeans with ripped knees. Just enough distress to look cool without being too messy. The 26w and short length was perfect for me - 5ft 2' and 115lbs. Excellent fit everywhere, including leg. Would recommend.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Apr-19",
   nickName: "Svetlana d.",
   title: "FAKE!",
   body: "NOT REAL! I have 3 jeans from the exact same model bought from store and what was delivered to me is NOT what the real jeans are. The material, the stitching, the label.... all TERRIBLE QUALITY! Don’t waste your money",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "12-Feb-17",
   nickName: "Michael T",
   title: "Love this clothing but it fits a tad large.",
   body: "Love it but it does fit a tad large on me.  I wear XL at 6 feet 210 lbs reasonably broad shouldered and it's very loose.  I like that but if you want a closer fit then go a size smaller.  I have not tried a large though so be warned.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Aug-18",
   nickName: "SAS",
   title: "Fits well, looks good",
   body: "Good looking pants.I am a 35' waist so I ordered a 34' with the expanded waistline and it fits great.Long side pockets so you don't lose things.They came a little wrinkled so I put them in the dryer for 15 minutes and they were fine.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-Jun-18",
   nickName: "Kindle Customer",
   title: "Everything I needed",
   body: "Have absolutely no complaints and have done a lot of trekking around New Zealand in these bad boys.  Waterproof, great support, and took very little time to break in.  Never gave me blisters or pain at all.  The toe grips are clutch.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Apr-18",
   nickName: "yekkersrow",
   title: "Merrell makes great shoes. Period",
   body: "Merrell makes great shoes. Period. I've owned two pairs, for several years, they've never let me down and I have yet to find a reason to throw them away. When it comes to great outdoor quality shoes and boots, Merrell knows what's up.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Jun-18",
   nickName: "Jerlyn Jones",
   title: "these are very comfortable shoes.",
   body: "I took these boots right out of the box and hiked through Yellowstone. No need to break them in. My feet did sweat in them. Not certain if that was due to to socks I had or the boots. Other than that, these are very comfortable shoes.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-Dec-18",
   nickName: "Magicbird",
   title: "Very nice jeans but didn't fit my odd figure.",
   body: "I had a tummy tuck and breast implants about a year ago and ever since then I've had difficulty finding clothing that fits me right.  These are nice jeans--they deserve 5 stars--but they just didn't fit me right so I had to return them.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Jun-16",
   nickName: "Nancy/ CA",
   title: "NOT moisture wicking fabric - DOES protect from sun",
   body: "Had hoped for a fabric that would 'breathe'.  The ventilaiton flaps help, but the sweat from body is not wicked away, you are drenched in sweat.  On a sunny, warm day this protects you from the sun, but does not give enough ventilation.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "28-Nov-17",
   nickName: "Ozark Opinion",
   title: "Super comfortable boots",
   body: "Super comfortable boots.  My daughter has another well known brand and was shocked at how much more comfortable these were. I haven't gone on a long hike yet, so I can't attest to any break in time or other issues.  So far, I love them.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "7-Sep-17",
   nickName: "Dave97",
   title: "he wears it all the time now and says it's one of his favorite shirts and feels great when he is out working ...",
   body: "i bought this for my Dad for his birthday, he wears it all the time now and says it's one of his favorite shirts and feels great when he is out working in the yard and doing stuff around the house. He told me he wants more for Christmas.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Jun-17",
   nickName: "Robert Hill",
   title: "I have several of these and they are great for the summer",
   body: "I have several of these and they are great for the summer, as they are vented nylon, designed for activity, and if you catch them out of the dryer at the end of the cycle and hang them up, they are then ready to wear.  Highly recommended.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-May-19",
   nickName: " Gary",
   title: "Dog hairs & lint never leave this shirt...",
   body: "Dog hairs 'stick' to this shirt like glue. They will cling to it through the wash. I have several brands and types of breathable tee shirts and none cling and collect lint & dog hairs like this one. Have to lint roller it before every use.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "1-Feb-17",
   nickName: "Janice H.",
   title: "runs large",
   body: "I thought thought that this was aa black and gray shirt but when I received it the color was navy and gray.  Ran somewhat large.  I'm giving this as a birthday present in February so I may have to return it.  Loved the feel of the material.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "18-Nov-18",
   nickName: "Peter Zeller",
   title: "Well made, waterproof for puddles",
   body: "Daughter used them on several hikes so far, keeps her feet dry when we go through shallow water, puddles, mud.  Haven't been out in a thunderstorm or had them immersed very deep or long.  Good support of arches, good grip, relatively light.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Sep-18",
   nickName: "SYOTW",
   title: "Excellent quality.",
   body: "These pants are very well made and very comfortable. Great price as well. You could pay more for a lot less. Pockets are a good depth, colors (I bought black, heather beige, and true Navy blue,and gray.  Size ranges are also (L&W) plentiful.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Dec-18",
   nickName: "h0tlips11",
   title: "Not good quality",
   body: "The hem on this was at least one inch longer on one side of the dress, which was very obvious when I was standing, and proved to be true when I took the dress off and folded it in half lengthwise. Definitely returning and not buying another.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "22-Jul-18",
   nickName: "R. Lewis",
   title: "They are a good quality pair of pants but I found the m ...",
   body: "They are a good quality pair of pants but I found the m to be a bit tighter than other pants that i purchased in the same size.  I wear a size 38 and although i can squeeze in to them, they are very tight. They are a nice looking pair of pants.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "24-Apr-18",
   nickName: "Jonathan Seymour",
   title: "I had to use our shark steamer to get the fine wrinkles out of the skirt portion",
   body: "We bought this for our family pictures, this dress fit my wife very well.  After washing, the top was smooth, I had to use our shark steamer to get the fine wrinkles out of the skirt portion, but they came out quickly.  My wife loves the pockets!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Apr-19",
   nickName: "Zephanie Mae",
   title: "My favorite pair of jeans in my closet",
   body: "Very good quality jeans. Levi's are pretty well known for their quality so it's not a surprise. The fit is great, just be sure to know your measurements and look at the size chart just to be sure but so far I haven't run into problems with the sizing.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "31-Dec-18",
   nickName: "Lynn",
   title: "Front pockets are maybe an inch or two deep. Not functional",
   body: "Hard to believe these are brand name Levi'sFront pockets are maybe an inch or two deep. Not functional at all.Very disappointed but decided to keep them because I liked the color of the jeans. They are the only pair of light blue straight legs I have.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "7-Feb-19",
   nickName: "John Turner",
   title: "Ticks all the boxes",
   body: "Wanted a very comfortable, smart, durable pair of trousers  -  the unbeatable price and speedy delivery were bonuses. So much so, I bought another pair on the day of delivery itself: different colour, same response from me when the second pair arrived.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Sep-18",
   nickName: "Llenroc",
   title: "Boot arrived broken.",
   body: "The shoe box arrived this afternoon.  Brand new shoes.  However, as soon as I took the boots out, a piece of metal fell.  It is the metal hook for the laces!  See picture.  The manufacture quality was so bad the metal hook did not even stay on the shoe.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "12-Apr-17",
   nickName: "Chicago Sue",
   title: "I was delighted to find these on line and they fit perfectly",
   body: "My husband has a 29' inseam which is hard to find in the brick and mortar stores.  I was delighted to find these on line and they fit perfectly.  They also launder like a dream!  I take them out after 10 minutes and hang them slightly damp -- no wrinkles.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Sep-18",
   nickName: "josh",
   title: "Tall Girl Review!",
   body: "I’m 6’1” and this dress...works! It’s definitey not floor length, but it’s passable as a maxi dress without being awkward. I ordered a Large. I’m pretty slim, but I think if I had ordered and XL, it still would’ve fit around the waist and been a bit longer.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "17-Sep-18",
   nickName: "MICHAEL DOCKERY",
   title: "Very comfortable",
   body: "This shirt is very comfortable and fit perfect. I wear it to the gym and if i'm working outside where I would sweat alot. The shirt keeps me dry and it does not smell. It is flexible and moves well with me. I now have 3 of these shirts and probably by more.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-May-18",
   nickName: "Just me",
   title: "... buying these pants for some time and I feel like the quality has dropped",
   body: "I have been buying these pants for some time and I feel like the quality has dropped. They look worn much faster and don't hold their crease well. I have had about 10 pair over the past few years and just began noticing this. Any recommendations are welcome.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "19-Apr-17",
   nickName: "Rachael L Walters",
   title: "but when I got them the tag said 30 inseam but they fit more like 32\" so it worked for me\"",
   body: "I ordered a 28 R expecting these jeans to run small, but they fit true to size. I thought that an R length meant a 32' inseam, but when I got them the tag said 30' inseam but they fit more like 32' so it worked for me. I would definitely purchase these again.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-Oct-16",
   nickName: "JWise",
   title: "These shirts have a perfect material for daily wear",
   body: "These shirts have a perfect material for daily wear.  I've got several of the other models of shirts in the Columbia line and this fabric is the only one I feel very comfortable with even without a tee shirt.  Ended up buying 7 of them in long and short sleeve.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Jun-18",
   nickName: "Doc Anthro",
   title: "Size up an inch",
   body: "These pants are overall good.  The fit was a bit small even with the comfort waist.  It wasn't so small that we had to send them back but my husband would have liked a little more room.  The fabric is really nice and light which is great for our desert climate.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "10-Jul-18",
   nickName: "May Zamir",
   title: "Love it",
   body: "I am 5’4 and 166 lbs postpartum I was a bit worried that it might be too long but length is fine if you wear it with platform shoes,I was debating between the M or the L , I’m happy I got the M it fits very nice great for summer, will definitely get other colors",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Mar-18",
   nickName: "wboz",
   title: "This fit very poorly. I am a rather small ...",
   body: "This fit very poorly. I am a rather small person and so I ordered a small. I would wear a small T shirt from, say, The Gap. This was baggy as all heck. Given it's stretchy, I would call it a medium. Returned and decided I was too fat for a stretchy shirt anyway.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "16-Dec-18",
   nickName: "Derek",
   title: "Fit great, shrinks over time",
   body: "Was a big fan of this shirt when it first came and for the first 5 or so times I wore it. After washing as instructed the shirt became noticeably shorter with each wash. What was once rather long now barely reaches my pant line. I think this will be retired soon.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "9-Feb-18",
   nickName: "Nordstrom Customer",
   title: "Great for tall, athletic build",
   body: "Bought these for my husband who is a Realtor. He is tall (6'3') and has a very athletic build (muscular legs) so it is quite difficult to find pants that actually fit through the butt and thighs.  I ordered the 36W/34L in 3 different colors and they fit perfectly!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Sep-18",
   nickName: "mmt7",
   title: "So Much Better Than Any Nike or Adidas Shirt",
   body: "It's Under Armour's basic t-shirt, and I have bought every version of this for the past number of years.  I find it much more comfortable (for both working out and just walking around in) than anything by Nike or Adidas, and I've tried them all.  Highly recommend.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-May-18",
   nickName: "Bella Donna",
   title: "BEst boots I ever had",
   body: "BEst boots I ever had, well worth the $, expensive yea, but you get what you pay for. Quality fit, didn't even have to wear them in! Gonna wear them tomorrow for my work, which is on my feet 7 hours a day! Fit perfect! I ordered my size 9, fit like a glass slipper!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-May-18",
   nickName: "nancy j malone",
   title: "Merrell Boats waterproof and comfort.",
   body: "I read the other reviews  and decided  to go with majority and bought a half size up. At first I didn't  believe they would fit  but after wearing around the house for a week the gave and fit great. I wore them hiking only once so far but no blisters or discomfort.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Oct-18",
   nickName: "Geoffrey Fortier",
   title: "Fair But Downgrade",
   body: "Bought these after owning a similar pair a couple years go. Disappointed to learn that the metal has been replaced by a plastic, which I'm pretty sure won't hold up as well.  This version runs a bit smaller than my previous pair (same measurements, still have them).",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "17-Feb-18",
   nickName: "Kindle Customer",
   title: "Such a disappointment",
   body: "Bought these for my 99 year old father, who has lost feeling in his fingertips and can no longer manage buttons and buttonholes. He likes the fabric, likes the fit, but lo and behold instead of the usual hook fastener at the top, there is a button. Will be returning.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "2-Jan-19",
   nickName: "LightOwl",
   title: "Good Hiking Boots",
   body: "I like the look and fit of these hiking boots.  I have now worn them on several day hikes and the only problem that I ran into is that they are not 100% waterproof.  Generally they have kept my feet dry except when I used them snow shoeing.  My toes and heels got wet.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Mar-19",
   nickName: "Nordstrom Customer",
   title: "Best hiking boots",
   body: "These are amazing!! Even though they are not water proof I had to do several creek crossings and got mildly wet but my feet stayed dry. No blisters. Have done about 80 miles in them so far. Definitely recommend and size up for toe room when going down steep mountains.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Jun-17",
   nickName: "Adam G.",
   title: "A little pricey, but a good quality shirt that breathes well. Great for hot/humid environments (I live in Florida!).",
   body: "A little pricey, but a good quality shirt that breathes well. Great for hot/humid environments (I live in Florida!). I don't get as 'overheated' as I do with thick cotton shirts. Great shirt for when you're outside - fishing, taking a long walk, or at an outside event.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "25-Oct-16",
   nickName: "avi8tor4life",
   title: "Great for those hot days",
   body: "Great t-shirt and works well when the heat is on. You feel cool the whole time while feeling light at the same time. It has a loose fit so if you are looking for something tight, this isn't it. The material feels great on the skin too. I'm very happy with the purchase.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Mar-19",
   nickName: "Sarah Clark",
   title: "Great fit and flattering.",
   body: "These were better then expected-these are how my favorite fitting skinny jeans- only downside is I would say the material is a little thinner than I would normally like, but for the price worth it! They are true to size- I am 5 ft 3 weigh 110 and the size 26 fit perfect!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Dec-18",
   nickName: "NicoSD",
   title: "Nice, light material",
   body: "The pant seemed very well made and had a lot of give in the waist. A nice stretch. Even with the stretch, it was still slightly too small. I am a 34/32 across the board and even though the stretch was there, they still were not a good fit. I would just suggest a size up.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "6-Oct-18",
   nickName: "Amie",
   title: "Good jeans but",
   body: "Levi is a great brand but their sizes are all over the place! I have a 711 skinny in size 27 fits perfectly - 535 super skinny a 29 is too small! ! These 711 skinny’s are bunching at the knees and baggy in the back waist. Can’t seem to find a white skinny jean that work!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "10-Jan-19",
   nickName: "Cunningham",
   title: "Diagnol seems",
   body: "Please move the seems back to the shoulder vs. diagnols - these shirts are not comfortable - gave away.  The old underarmor shirts were great with no 'great' seems on the front or back!  Sadly they want to make them with a certain look vs. being a T-shirt (not a V shirt)",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "14-Feb-18",
   nickName: "Maryarena",
   title: "Very durable",
   body: "My second pair.  Comfortable from the first time and help me stay stable on the trail.  My first pair still look great, but it has been years and the sole is a little worn, but I will still wear them for regular trail walking.  The new ones are for more unstable walking.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Jul-18",
   nickName: "too many computers",
   title: "These are lightweight and comfortable hiking boots",
   body: "These are lightweight and comfortable hiking boots. I generally wear a 10 in workout shoes and a 9.5 in regular wear shoes, so I ordered a 10. Nice and roomy, fits well with a pair of hiking socks. Haven't worn them in cold weather yet. Will amend my review after I have!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "29-Sep-18",
   nickName: "Nordstrom Customer",
   title: "Great breathable material",
   body: "Great breathable material! My husband wore these shirts on our disney vacation in the hot/humid Florida weather. Very impressed with how dry it kept him. Also seemed water resistant, when those quick rainstorms hit the water just beaded up and rolled off. Would recommend!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "5-Dec-18",
   nickName: "Nordstrom Customer",
   title: "Awesome!!",
   body: "I really love these pants. They're the perfect length (for me) and width (for me) and soft and wrinkle resistant. I liked them so much I bought three more and threw out my old cotton pants. My only question is when the heat of summer comes, will it be just as comfortable.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Jul-18",
   nickName: "Nordstrom Customer",
   title: "For reference: I'm 5'3, 130lbs. I bought ...",
   body: "For reference: I'm 5'3, 130lbs. I bought a small in the gray/purple color. The dress fits as expected. The material is soft and thin. Almost too thin (bra lines show through). Some women may want to wear a slip or spanx depending on your shape and where you wear the dress.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "17-Mar-18",
   nickName: "Mills",
   title: "Good quality pants.",
   body: "Ok these pants are good quality pants, I have returned because my husband has put on a few lbs. I will buy next size up, the waist expand is great, however my hubby needs next size up. Am going to buy again sometimes we are in denial (lol). Going to buy navy blue and black.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Jun-18",
   nickName: "Steve 55",
   title: "A little too snug for me...read on",
   body: "No complaints with the shirt quality. I read where UA had made certain shirts a little more 'roomy' and went with it. BUT......XXLT is fine for workouts or under another shirt as a base but as a t-shirt with shorts, too snug for me. Just my opinion.....your mileage may very.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Aug-17",
   nickName: "Kate",
   title: "My husband loved it. First time we purchased the Loose Fit\" ...\"",
   body: "My husband loved it. First time we purchased the 'Loose Fit'  and it was a nice surprise... both flattering and comfortable on him. Material is nice. Price, looks, and comfort, all in one. (Wish there would be  more choice of colors at the 'sale' price as we would buy more.)",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Mar-19",
   nickName: "Marylin",
   title: "Nice!!!!",
   body: "Great boots but go 1/2 size up.  I am a size 7 and they were too small.  I just got my 7 1/2 and they fit great.  Also, these are very stiff and will need some breaking in.. beware of just using them immediately on a trail.  Other than that they are great and love the color.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "15-May-18",
   nickName: "Moonko",
   title: "I love 711s, I’m happy to finally receive these.",
   body: "I’ve wanted these jeans for a while and have resisted making the purchase, until I spotted my size up for sale. I love the 711s and I have a plenty of pairs (hence the initial resistance) these fit well, waist is either slightly larger than usual or I may have lost a 1lb or 2.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Aug-18",
   nickName: "Mike Fasnacht",
   title: "Amazingly comfortable on the legs",
   body: "There is a reason these are a Best Seller, Slipping into them to see if they fit was probably the most heavenly sensation my legs have felt all month, the waist could be better it pinched a bit but the legs were so comfortable that it made the uncomfortable waist a minor issue",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "13-Sep-18",
   nickName: "Russ",
   title: "Beautiful !!",
   body: "This shirt was a little more than I would normaly spend but once I got it I knew it was worth every penny. It is the sharpest looking shirt I own now and someone is always telling me 'I love your shirt'It's a Columbia so you know the quality is great!! Very very happy with it!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-Feb-18",
   nickName: "Kiva",
   title: "Picture of kalamata looks like a deep beige",
   body: "Picture of kalamata looks like a deep beige, name sounds like a dark brown... in truth? They're boring old army drab green. Material is not like jean, more like jegging but thicker. Disappointed by the color, not super pleased with the material.  But they fit well and will work.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "20-Jul-18",
   nickName: "Susan Elder",
   title: "GREAT FIT WHERE OTHERS FAILED. PAY EXTRA FOR THE WATERPROOF - A MUCH BETTER BOOT.",
   body: "GREAT BOOT.  My wife had had problems with hiking boots pinching her small toe due to fitting problems (?).  But these Merrell boots were great.  She wore them in Kauai and walked through water and never got her feet wet.  BE CAREFUL TO BUY THE WATERPROOF.FIT WHERE OTHERS FAILED",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Apr-19",
   nickName: "Sharon Marie",
   title: "Long wearing, comfortable pants for work",
   body: "My husband used to wear pants from a uniform company that he called 'polyester hell'. They were long wearing, but plastic feeling and horribly warm in thew summer. These pants have a nice drape and almost silky feel to them, and wash up beautifully. We are very pleased with them.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Mar-19",
   nickName: "Cat lady",
   title: "Great Fit",
   body: "I am 46 years old, 5'6, 140 lbs, with a bit of a belly (two kids) - these jeans fit great! They do stretch a tiny bit if you're up and down a lot but for the most part they stay in place with no sagging. The material is a little thicker than other jeans I have. Will def buy more.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Sep-18",
   nickName: "Adalberto",
   title: "too large!",
   body: "The shirts was very very large to me. I'm size M in all of my shirts but I bought M in this and that was very large to me and I did sell to buy again because I want this shirts! I rate four stars about only for that for the size, so the qualiti, colors, fit all is very very good!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "5-Jul-18",
   nickName: "Hala F. Salha",
   title: "light weight",
   body: "light weight. Wore it all day around the house and felt very comfortable. I am a size 9 but had to get this in size 11 to have the space I need for medium and heavy hiking socks. love the color, the traction, and the overall look and feel. have not yet tried how waterproof it is.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-Jul-18",
   nickName: "Mary",
   title: "Best shirt for travel",
   body: "Purchased this shirt for a trip to Ecuador.  Don’t think that this shirt is for fishing only- we don’t fish.  I wore it hiking in Ecuador and it was great because it didn’t get too wet and dried very fast.  It washed well in the sink and dried quickly when hung on our clothes line",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Feb-18",
   nickName: "Hannah Armstrong",
   title: "Inconsistent cut",
   body: "I've purchased many washes of this size and cut, and I find that every pair fits me a little bit differently. This particular wash ('cast shadows') is much looser than other washes I own, and they stretch out more throughout the day. (These jeans in 'soft black' are my favorites.)",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "30-Nov-18",
   nickName: "Speed",
   title: "I have purchased these before",
   body: "The pants seem to last a really long time.  I alternate between 2 pair (blue and black) all week in the office.  I've had the same pairs for years now.  I only bought this pair because I've grown  in the waistline too much and the comfy band was maxed out.  Had to move up a size  :(",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Jul-16",
   nickName: "A",
   title: "Good shirt, but white stains easily (even suncreen stains it)",
   body: "The white color looks good until it gets stained brown by your sunscreen.  I have tried spray suncreen and rub-on sunscreen but all my white UA shirts get stained immediately.  You can keep exercising in them, but don't plan on wearing them to the beach where you want to look sharp.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "18-Feb-18",
   nickName: "George Whatsisfais",
   title: "Bestest, mostest and greatest pants I have ever purchased!!!...",
   body: "Omg, Omg :-)These are my new favourite pair of slacks.  These are the most comfortable, perfect fitting and delightful material feel, WoW.I love this brand now and style of dress pant slacks.  Awesome!Did I mention great look, feel and fit.  Where have these pants been my whole life?",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Apr-17",
   nickName: "usaf.brat",
   title: "Crotch to waist feels like I'm wearing a diaper",
   body: "The area from crotch to waist was very long.  For these to ride at the proper waistline would have left a large gap in the crotch making my husband feel like he was wearing a diaper.  He usually likes a little extra room down there for his 'stuff', but this was down right ridiculous.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "29-Sep-18",
   nickName: "M. Ruff",
   title: "Get yourself one!",
   body: "These are my go-to around the house, layering, or working out shirts. I'm 6'2', about 260 lbs, and the xxl's fit me. Recently they've been cut slightly longer which has been a welcome change because the first shirt I bought was borderline long enough. Highly recommended these shirts!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Nov-18",
   nickName: "Sara Ward",
   title: "Best hiking boots I’ve owned",
   body: "Took these on my trek to Everest Base Camp in Nepal. Fit great, didn’t need much breaking in, provided great ankle support on uneven terrain, good traction, waterproof, and warm. No place on earth will test a par of hiking boots like the Himalayas, and they passed with flying colors.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "1-Jul-18",
   nickName: "Gary",
   title: "Very cool in miserable summer weather",
   body: "Excellent shirt for hot, sticky weather. It dries quickly, doesn't need ironing, and resists wrinkles pretty well. The sizing is a bit large, but that helps with the cooling. Lots of pockets and retaining loops. I'm not a fisherman, but I love the shirt when I am out doing photography.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Jan-19",
   nickName: "CK",
   title: "High Arch",
   body: "I ordered these boots along with several others to try them out. They seemed like nice boots and they fit well but they had very high arch support inside. I didn't see anyone else mention this but for me I felt like this was going to be uncomfortable in the long run so I returned them.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "25-Sep-18",
   nickName: "lrwar",
   title: "Good to go out of box but order half size larger!",
   body: "Great boot. Good arch support for those with high arches. Comfortable out of the box. Ordered half size larger based on reviews of boots running small. Plenty of room in toe box with wool hiking socks. Light weight, very stable, good ankle support. Would buy again or recommend to others.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Apr-18",
   nickName: "Nordstrom Customer",
   title: "PERFECT for tall girls.",
   body: "I AM IN LOVE. I am 5'8 and I have super long legs, so find a long dress that looks decent is impossible. I took a chance when ordering this and I do NOT regret it. It is so flowy, long, and comfortable. I am definitely buying one in every color! I got the medium and it is the perfect fit.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Apr-19",
   nickName: "Mr boss",
   title: "Good hiking boot inserts not so good",
   body: "Wife had a pair just like theses but small size she wanted to try next size up so far she likes them but almost sent them back the insoles up at the small toes were bent like they don’t fit boot right so she had to buy better inserts you would think that good boots would have good inserts",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "14-May-18",
   nickName: "E. Hook",
   title: "My favorite work boots.",
   body: "My favorite work boots.  Comfortable and supportive. I'm on concrete all day so the right shoe is so important.  These are the only shoes  I can last  in all day without foot pain.  I'm 54 and have high arches.  I wear a 10 and they fit perfectly and were comfortable right out of the box.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Nov-18",
   nickName: "TimW",
   title: "Wide width is NOT any wider than medium width",
   body: "I already have the Merrell Moab 2 in the vented hiking shoe.  It's a 7.5 medium and just a little too snug in the width.  I ordered the Moab 2 in the higher waterproof hiking boot in 7.5 wide and it doesn't look or feel any wider than the medium.  If you have wide feet, find another brand.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "10-Aug-16",
   nickName: "ernestkaye",
   title: "These shirts run too big.",
   body: "Shirt looked great when it arrived.I normally wear a Large shirt.I should've read the other reviews before I ordered a Large in this one.Definitely fits larger than normal 'Large' shirts.So much so that I had to return.3 stars, but only due to the inconvenience of over-sizing and returning.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "25-Aug-18",
   nickName: "Billy Liu",
   title: "These pants have a lot of give but I wasn't ...",
   body: "These pants have a lot of give but I wasn't prepared for just how much it expands. These things were closer to parachute pants and the length was 4 inches too long for me (the 29 length came out to the same length as a pair of jeans that were 34 in length!). Not at all what I was expecting.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "30-Aug-18",
   nickName: "Matt Sorenson",
   title: "Just what the description says",
   body: "These t shirts have to be the best ones I have ever owned.  I'm a larger guy, so wicking is very important.  I wear these under my button down shirts to work each day, and they under Armour keeps me dry all day.  The 4xl size fits great for me, and they last in the wash too.  Ordering more.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "7-Apr-19",
   nickName: "Kalynn",
   title: "Great quality jeans",
   body: "Although I returned these, these pants really did look and feel great. The black was dark and they looked good on. However they were very high waisted and I prefer more of a mid rise so I returned them for the same 711 jeans in a mid rise instead!  5’6” 140lbs and purchased a 29- fit perfect!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Sep-18",
   nickName: "CLC",
   title: "If you have time to return buy it.",
   body: "My pants only look like the color on the back and bottom. Where the thighs are they look horrible. Spent 45.95 on a look alike. I am too busy to return the item. The quality feels freat and the size is perfect. The problem is the color is not the color shown on the picture on the front thighs.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "14-May-18",
   nickName: "animotek",
   title: "Excellent hiking boots",
   body: "Excellent hiking boots. I already have a pair exactly the same model. Extremely comfortable, they fit right from the start with no 'breaking' in. I  ordered this new pair in a slightly different color just to have it, if/when my current hiking boots wear out. Highly recommend these hiking boots.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Jul-17",
   nickName: "Mr. Pickles",
   title: "Okay but way too long.",
   body: "My husband loves these pants and we usually get them at Kohls but even after the copious coupon gimmicks they were still less expensive here. The only issue is that the pants were 2 inches too long!!!!  I definitely ordered and received pants with a 32 x 32 tag but I had to hem them. What a hassle.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "2-May-19",
   nickName: "Amanda Bahnson",
   title: "Love these boots",
   body: "This is actually my second pair of these boots.  Only replacing the first pair because my feet changed after a surgery.  They are great!  If you need extra arch support, like I do now, they have a removable insole to make your orthotic fit.  Great boots!!  Can’t wait to get out on the trail in them.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Apr-19",
   nickName: "JazzyChoo",
   title: "Comfortable and plenty wide",
   body: "I enjoy these boots deeply! My ankles will hurt after awhile but they’re so comfortable and for my picky feet that’s a blessing. They do run an inch big. They’ll last a long time without showing any wear. I know this because my father has been wearing merrell for many years. I wear them all the time!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "13-Mar-17",
   nickName: "Andrew Z.",
   title: "I don't love the puffy chest pockets",
   body: "I will never understand Columbia's obsession with making hiking/travel/activity shirts that don't look normal.  I don't love the puffy chest pockets, or the big Columbia tag.  That being said, their shirts are incredibly comfortable, sweat wicking, and breathable.  I just wished they looked more normal.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "10-Jun-18",
   nickName: "Nordstrom Customer",
   title: "Great fit, strong chemical smell",
   body: "Great fit. I’m 5’1 and 160 and a medium fit exactly right.The reason for the three stars is that the dress arrived smelling strongly of chemicals.  I washed 4 times before I was able to wear the first time and even then a faint smell lingered.  Hopefully after a couple more washes the smell will go away.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "7-Dec-16",
   nickName: "Nordstromiac",
   title: "Good shirt, inaccurate manufacturer sizes",
   body: "I like UA Tech Loose shirts. That said I ordered 2 different colors both in the same size, each was made in a different country. The 1 felt like a true large, the other 'large' looked and fit like a medium. I'm disappointed as their outsourcing causes size differences preventing me from ordering anymore.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "22-Aug-18",
   nickName: "KC",
   title: "Soft Black jeans are so comfortable.",
   body: "Love these jeans. I've always loved Levi's, especially the 711 style. I ordered the soft black jeans, and they literally feel like I'm wearing jeggings. They are so soft and comfortable and stretchy. Honestly, I could have ordered a size down based on how stretchy they are, but other than that I love them!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Mar-18",
   nickName: "Damien X Heenan",
   title: "I would suggest going up one size if you'd like more flexibility and comfort",
   body: "I owned the same size Haggar pants prior to order and used their size chart to determine my size. I was expecting the stretch to offer a bit more comfort when ordering the same size as the two pairs, which matched the size chart.  I would suggest going up one size if you'd like more flexibility and comfort.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "2-May-19",
   nickName: "Bachelor",
   title: "Majic pants",
   body: "Wore these pants straight out the box to a job interview and got hired! Oh the pants gave me supreme confidence! Everybody was looking at my pants. And I just waltzed around and was almost dancing showcasing my pants! These are Majic pants ! next I'm going to the casino to see just how lucky these pants are.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Jun-18",
   nickName: "Michael F",
   title: "Fantastic shirt. Looks good",
   body: "Fantastic shirt. Looks good.  They are great to work out in or just hang out in hot weather. Wisks the sweat. Very light and loose fitting.  Only reason for not getting 5 stars is the price. If they just dropped it $5 it be a 5 Star.  Still worth it to me since it’s hard to find a competitor that is similar.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "25-Nov-17",
   nickName: "Kathy Salvador",
   title: "Happy about it",
   body: "Very happy with these jeans, they’re really comfy! I ordered the 33(16) and for reference I’m 5’6” and approx. 200lbs. I have only worn these jeans once so I do need to break them in a little (I found myself pulling them up in the back a bit- big butt lol). All in all I look forward to wearing these more often",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Aug-17",
   nickName: "michael guynes",
   title: "OK at best",
   body: "I have 3 other UA shirts (Red) just like this one and for some reason this one feels cheaply made.  I wear these in Iraq on a shooting range that I work on everyday. I won't be buying from this seller again.  But don't get me wrong.... the shirt works.....but I will be buying UA shirts from a different source.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "20-Mar-19",
   nickName: "Shelby",
   title: "So comfortable",
   body: "As a postal worker, this is my favorite and only brand that I can wear for the extra comfort and stability.  Right out of the box and walking 12 miles, I can feel confident that I will not get blisters or have part of the shoe rubbing on my ankles. I love Merrells and will only buy Merrells.  Love these boots!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-Nov-18",
   nickName: "ShopGirl",
   title: "Love these jeans!",
   body: "I absolutely love these jeans! Perfect fit and great quality. I am 5’1 113lbs and I ordered a size 27 regular. They are a tad bit long on me but they look great rolled up as well. I love the quality of these jeans and I don’t need to worry about the knees tearing more, like I do with other jeans. Highly recommend!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-Jul-18",
   nickName: "Mark",
   title: "Excellent shirt, I love the fabric",
   body: "Excellent shirt, I love the fabric, great fishing shirt or for just wearing on hot days. The only reason I didn't give it 5 stars is because of the fit. I typically wear large shirts so I ordered this one in large. It fits about one to two sizes bigger. I'm ordering a medium now because I like the shirt that much.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "10-Jul-18",
   nickName: "cracker1408",
   title: "LOVE",
   body: "I am in love with this dress.  The fabric is stretchy and it looks so nice on.  I am 5'8' weigh 175# and wear an XL.  I ordered a Large according to the size chart and it fits wonderfully! I usually have trouble with dresses being long enough but this one is great!  I plan to get more colors! Don't wait! Order now.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Jan-19",
   nickName: "Mark P",
   title: "low maintenance",
   body: "The pants are comfortable, fit as expected, and low maintenance. Throw them in the washer and dryer and they come out ready to wear. No ironing needed. The pants are dark and I have a white Golden, but it's no problem. the pants don't attract her hair like some of my pants do. I have ordered more in different colors.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Jul-18",
   nickName: "BRandi",
   title: "Perfect dress!",
   body: "The dress is perfect! I bought it in navy and royal blue and just bought it in 2 more colors. You can dress it up or down, it is super flattering and very forgiving! I have belly pudge and a big butt and it makes me look great! I’m 5’8, D chest, 170# and I ordered large. I can’t imagine anyone not loving this dresss!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Mar-18",
   nickName: "Jeannie",
   title: "Perfect Jeans",
   body: "Levi's jeans are the only jeans that fit well in the waist (not too large) and also the hips. I roll these up a little to make them more like ankle jeans. Also, can keep them rolled down for fitting well in riding boots. Quality is good and color is just what I was looking for. I also like the 710 super skinny style.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-Oct-18",
   nickName: "Cy",
   title: "Not great material for hot weather.",
   body: "Fit large for the size I normally use. Sleeves ok but body of shirt pretty baggy and loose. Not bad, but not what i was expecting. Maybe it's good for catching the breeze. Material seemed to stick to my body when I sweat...I ordered the other material shirt instead, in a size smaller and seams better for hot weather.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "1-Mar-18",
   nickName: "Nordstrom Customer",
   title: "hoping a 38x30 will be better.",
   body: "Had to return them. I have several pairs of Haggar men's pants, in this style, in size 38x32. Yet, I ordered this pair in 38x32, and they're very very long. The cuffs are down at my toes. So I guess quality control/consistant sizing is not a thing at Haggar. Going to return and reorder, hoping a 38x30 will be better.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "27-Jan-19",
   nickName: "RJA Boston",
   title: "great fit, comfortable",
   body: "I like the slightly more informal feel of the pants. When dressing for work I don't feel like I am overdoing it. Unfortunately my waistline has been fluctuating more than I would like and the waistband on the these pants has just enough stretch to keep me in the same size throughout. Very comfortable! Fit was right on",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Apr-19",
   nickName: "Nordstromfan",
   title: "Comfortable and excellent grip!",
   body: "I bought these shoes for a trip to the desert in Chile last year and they were amazingly comfortable and I just felt very safe with every step I gave in them. I've also used them to go hiking along the trails of the Gran Canyon and no slips or weird steps. Very good grip and comfort. I am so happy I chose these shoes!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "20-Aug-18",
   nickName: "Nordstrom Customer",
   title: "very cute jean I like that its got a bit of room around the ...",
   body: "very cute jean I like that its got a bit of room around the waist so you don't look like a mushroom top but is tight in the legs and everywhere else. cute with heels. Love the color its a darker jean color, the color stays pretty well I have had these for years and many washes. The jeans fit the same after washing too.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "20-Oct-18",
   nickName: "Brian R. Cook",
   title: "Very Nice",
   body: "Pleasantly surprised! Normally make it a practice to never order clothing online, as you never know hot the items will fit.  The reviews seemed to be contradicting each other so I caved and gave Haggar a shot.  The fit was just as ordered, nice soft fabric and good quality!  Definitely will be ordering different colors.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Aug-18",
   nickName: "PCF",
   title: "... two of these dresses and they both stank so bad I washed them",
   body: "I bought two of these dresses and they both stank so bad I washed them, soaked them, hung them outside for several days.....but NOTHING got rid of the horrible stench! I had to send them back because there was no way I could wear them with the smell.  It smelled sort of like permanent solution.  I feel like it was toxic.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "3-Nov-18",
   nickName: "Lynette",
   title: "Third times a charm!",
   body: "You definitely get hat you pay for!  started on the low end 60$ pair-didn't fit-large to size. Moved up to the 90$ pair-didn't fit-large to size even though the description said fits small to size.  Tried these and they are awesome!  Color choice could be better but II will buy another pair as my daughter stole the first!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-May-18",
   nickName: "Nordstrom Customer",
   title: "I ordered an xl and I'm very happy with the fit",
   body: "I'm 5'5, 230 and carry my weight in my stomach, I  ordered an xl and I'm very happy with the fit. The dress is flattering and the material itself is soft and not too thin. On me it just grazes the ground. The purple gray is a very pretty color in person leaning slightly more towards a lilac than gray. Plus there's pockets!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Feb-19",
   nickName: "Rocky Lotito",
   title: "Perfect fit, comfortable, and looks good",
   body: "I've bought these pants now in three colors: black, heather grey, and British khaki. All three are fantastic; these are my go-to slacks. They are super comfortable, and the expandable waist means they're very forgiving if your size is off by an inch or two. Buy a few of these and they'll be the only slacks you'll ever need.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Mar-19",
   nickName: "Greg",
   title: "I'm wearing them right now",
   body: "I wasn't sure how I'd feel about the stretchable waist, but it's great. My only (small) gripe is that the design of the stretch waist creates an extra 'loop' in the pants and my belt 100% of the time tries to go in that extra loop thing. Its a bit annoying. But the pants themselves look great, and are extremely comfortable.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "11-Dec-18",
   nickName: "Compudotcom",
   title: "These were small for the size",
   body: "I always buy 36x34 sometimes even as low as 34x34, but these 36x34 were way small around the waist, and my size has not changed in three years ! I just bought a pair of another pants locally at my correct size of 36x34, and they fit perfectly! So beware you may want to go up one size bigger than your used to when buying these !",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "10-Jan-18",
   nickName: "Dave Hodges",
   title: "Great shirt",
   body: "I work as a paramedic, and our agency color is green, so I bought a couple of the green shirts to wear underneath our button up shirts.  These shirts are nice and soft, wicks away the sweat to keep you dry and cool.  Allows for great flexibility during times when needed.  I highly recommend this shirt to anybody whom is active.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Mar-18",
   nickName: "E.R.",
   title: "Sizing is off",
   body: "This is for the 711 Skinny in Rustic Woodland, size 28 S. I wanted an ankle-length jean. Nice fabric, nice wash, but insanely small. I own two pairs of recent size 28 Levi's that are borderline large, but I could barely squeeze myself into this pair - and I definitely couldn't move - or sit. At the same time, it had weird folds.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "18-Aug-18",
   nickName: "Topper",
   title: "UnderArmour products seem to be different everytime I get one",
   body: "These aren't like the shirts I ordered in the past. The fit is off and they feel more plasticky. If I could order again I'd get the  charged cotton ones, I prefer those in terms of fit and function but it looks like they are phasing those out as well. I'm quickly becoming a not-fan of underarmour for basic gym and underwear uses.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "18-Jul-17",
   nickName: "P.V.",
   title: "Pick a smaller size than your usual size",
   body: "Great looking pair of pants. The fabric is comfortable and slightly stretchy in case of the occasional expanding girth.  My regular size is between 32 and 33 inch. I find the 32 inch size is on the slightly large size. The 31 inch size fits me  very snug, like modern tight fitting pants without looking like a pair of skinny pants.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "1-Apr-19",
   nickName: "connieg",
   title: "Don't delay!",
   body: "Great price for a quality dress. I'm 5.3, 128lbs, 36B and I got the small in purple gray. Fits to chest but stretchy. It smelled funny when it came but with one wash the smell went away. It is not as long as I thought it would be. I could wear a low wedge but will likely wear flat sandals. You could probably size up for more length.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-Jan-17",
   nickName: "amina",
   title: "i'm a 110lb 5'11 girl and i ordered a men's small so that it would fit me big so i could wear it with my leggings and chacos &\"",
   body: "i ordered this shirt when i was a 'prep' in high school lol.i'm a 110lb 5'11' girl and i ordered a men's small so that it would fit me big so i could wear it with my leggings and chacos & it was perfect!i wouldn't wear it now since my style has changed, but the quality of this shirt is awesome & you definitely get your money's worth.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Jun-18",
   nickName: "k_m",
   title: "The dress is exactly as pictured and the fabric is very soft and comfortable. A perfect summer dress that can be dressed ...",
   body: "Based on other reviews, I ordered the X-Large as everyone said the dress fit true to size. I personally would have preferred the dress to fit somewhat looser and should have ordered the XX-Large instead. The dress is exactly as pictured and the fabric is very soft and comfortable. A perfect summer dress that can be dressed up or down.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Nov-18",
   nickName: "Heather S",
   title: "My favorite pair of jeans!",
   body: "These jeans are so soft and so comfortable! I normally am a yoga and sweatpants kind of person, because jeans are always so uncomfortable, but these pair are almost like wearing a pair of yogas . They’re super stretchy , and surprisingly don’t get saggy after wearing them twice or three times before washing! I’m buying another pair :)",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "2-Aug-17",
   nickName: "Scott",
   title: "Perfect! Run a tad big",
   body: "Love these so much! I tried on 3 sizes based on the reviews, and I actually needed to go down a size from my normal. I'm 5'4', 102 lbs, and I have particularly short legs. The 25-short is perfect. For reference, in American Eagle jeans I always wear a 2. These are so comfortable, perfect thickness, great quality, and not too stretchy.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-Aug-17",
   nickName: "B.A.B.",
   title: "Material just a tad thinner than I'm used to; otherwise, fine so far",
   body: "Not bad, not bad.  I'll go with four stars as the material is just a tad thinner than I'm used to.  I've only worn them a few times over the last few weeks since I've got them, so whether this aspect of the fabric leads to quicker wear and tear remains to be seen.  The fit is fine and as I expected, and I do find the waist comfortable.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Oct-16",
   nickName: "K Dude",
   title: "Neither size fit properly.",
   body: "Tried the Medium and it was too baggy and large.  I exchanged it for a small and that was too tight.  Something in between would have been perfect, but that doesn't exist.  Unfortunately, I gave this a shot.  It didn't fit right with either possible size.  Most seem to have found this shirt to fit perfectly for them, but it didn't for me.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "17-Nov-17",
   nickName: "Frank P.",
   title: "These shirts are great! They breath and allow sweat to evaporate",
   body: "These shirts are great! They breath and allow sweat to evaporate, while keeping you cool. I've just about quit wearing cotton shirts anymore and solely use UA gear. I've had one (bought at a retail store) for years that has gone through the wash at least 100 times and it's held up great, so longevity for this brand is great for the price.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-May-19",
   nickName: "XYZZY",
   title: "Good looking, well fitting and durable product. Glad they never changed the design.",
   body: "I have been wearing these Haagar slacks for close to a decade. (No not the same pair) I am glad that they have never messed with success, and reinvented these. They wear like iron. I have never experienced any zipper, hem, pocket, seam or any wear issues with all the pairs I have owned. Very nice to be able to order the exact size online..",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Jun-18",
   nickName: "Nordstrom Customer",
   title: "Little snug and short but extremely comfortable",
   body: "I’m 5’10” about 205lbs and the dress was a tad snug on my arms and bust. It’s a little shorter than I like but other than that, it’s so comfy and perfect for a dressy occasion or to dress down to casual. It gives me a little bit of a pooch look in my stomach area. But other than that, I do overall like the product especially for the price.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "16-Mar-19",
   nickName: "Rachael Mokthephathai",
   title: "Fit is great, color was not as expected.",
   body: "I ordered them in the color Totem Blue, and to be honest, they're a lot lighter than I expected. I'm not skinny, so I usually go for dark pants, and these are almost like a sky blue, instead of what's shown in the picture. Eh, I'd order again, but in a different color. I'm in the process of losing weight, and these were cheapest. Oh well! :D",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "2-Jul-17",
   nickName: "Boone29680",
   title: "Buy the size that matches your waist.",
   body: "Really nice belt. I use it for golf, because in summer I perspire enough to ruin a leather belt when I golf. Highly recommended but there are two things to know. There is plenty of length, and also the weave is made of a stretch material. So, buy the size that matches your pants, not the next larger size as you would for a nice leather belt.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "9-Jan-19",
   nickName: "Tamara",
   title: "Super nice fabric",
   body: "I bought these for my Dad who never buys pants, but really needed some new ones.  Even though they are 100% polyester, they feel like cotton.  Really comfortable.  The buttonhole was too small for the button, but I removed the button and sewed on a flat hook and eye closure which works better for him anyway.  Totally pleased with these pants.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Jun-17",
   nickName: "newuser",
   title: "Red wine came off with no stain",
   body: "I normally wear a large/xl and ordered a large.  A little roomie is OK and I think it fits my shoulders and the length is better  than the medium I tried on .  The first time I wore it it got splashed with red wine which came right out and did not stain-  the wine did not penetrate and came off the fabric with just a damp napkin.  Dries quickly",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Jul-17",
   nickName: "ric",
   title: "Excellent product...",
   body: "Display picture is accurate. Very well made and designed shirt. A little pricey but well worth it. Seems to be a little big for small, but I believe it's designed that way. There is a little history around the actual design of this shirt, that is why it's made this way. Fairly good selection of colors. Custom faded, just like bumblebee. Nice...",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Jan-19",
   nickName: "Nordstrom Customer",
   title: "Waterproof works; comfy out of the box",
   body: "Fit as expected, wore a few times in the neighborhood before hiking and had no problems. Went hiking in rain with dogs and feet stayed dry and warm (even after tramping through large puddles that didn't come over height of shoes). I was looking for something with a bit more ankle support than my current merrell sneakers, and these fit the bill.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Feb-19",
   nickName: "Bob Lemon",
   title: "UA CANNOT REPLICATE SIZE",
   body: "You could order 3 shirts, same size, different colors - they will all be different fits.I ordered a shirt months ago, it fits perfectly.  I went back and did the 'Buy Again' option and the new shirt (SAME COLOR AND SIZE) is a completely different fit.  I've been doing this for years with UA, I've just come to the conclusion that they don't care.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "5-Jun-18",
   nickName: "amanda vess",
   title: "I absolutely love this dress",
   body: "I  absolutely love this dress!! I am 5 foot 7 and 250 pounds, trying to find a maxi dress that fits right and doesn’t make me look like a hot air balloon is a true struggle!! This dress fits so comfortably and it’s so soft!! The length is so perfect too, it come to the top of my feet so I will definitely be wearing flats! Will for sure buy again!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Dec-18",
   nickName: "S. Hara",
   title: "Shoelace Loop Broke",
   body: "I ordered up a half size for the fit was fine, and the shoes are comfortable. I wore them for a 4.5 mile hike and didn't get any blisters. BUT, the first time I wore them the shoelace loop at the top ripped out as I was lacing my shoes up. Seems as though they're glued not stitched. Ordering a replacement and I hope the same thing doesn't happen.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "31-May-18",
   nickName: " La Smurf",
   title: "XL fit 14/16 perfectly. Buying more colors.",
   body: "It’s sized nicely. Purchased for 5’8, between size 14 and 16. Dress flows nicely, did not show extra weight around tummy,  not too tight. XL fit 40DD bust without appearing stretched. Worn with flats, long but not dragging ground/floor. Color and fit as pictured. Laundered in cold water and hung to dry without any differences. Want all the colors!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Jan-17",
   nickName: "Ricky Dee",
   title: "I bought them because I had an old pair that have held up like iron and the crease remains",
   body: "Have had 4 pairs for over a year now.  I bought them because I had an old pair that have held up like iron and the crease remains.  The old pair always looks great coming out of the dryer.  The new pairs often look very wrinkled out of the dryer.  Never look as good as the old pair.  I will not buy these again.  Am looking for another brand today.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "3-Dec-17",
   nickName: "Kathy",
   title: "Good Quality, Not the Right Cut for Curvy Figures",
   body: "These jeans are definitely not for you if you have an hourglass figure. The waist was huge on me and the legs were super tight. I took a chance because I liked the look. The jeans were good quality material like I would expect from Levi's. I was disappointed they didn't work out for me. My rating is really just due to the fit, not product quality.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "10-Jul-18",
   nickName: "Peter",
   title: "the pants are too tight and do not stretch\" like they are supposed too\"",
   body: "Black pants (made in Kenya) fit at least one size smaller in the waist than the khaki colored pants (made in Bangladesh) of same size. The elastic stretch pieces are physically shorter than on the black pants, therefore, the pants are too tight and do not 'stretch' like they are supposed too. BTW the khaki ones I ordered here are too tight as well.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "30-Dec-16",
   nickName: "Joseph Lesinski",
   title: "Very comfortable, fit well",
   body: "These pants are wonderful. I sit at a desk most days and these pants accommodate the sitting position just as well as they do standing. The relief the waistband gives from standing to sitting is awesome. These pants fit as I expected them to, no issues. I have been using this brand of pant for a long time and they hold up very well to daily activity.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Sep-18",
   nickName: "Tmfitz",
   title: "Great value, comfort, and ventilation.",
   body: "Bought this shirt for hiking and was very pleased with the quality of the shirt.  Ive owned several under armour products that have lasted me almost fifteen years, just time to update them.  The durability in the brush is not great which you shouldnt honestly expect from a light polyester shirt anyways but that was the only drawback I've come across.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Sep-17",
   nickName: "flutterby",
   title: "Wonderful casual collared alternative to a polo",
   body: "Wonderful casual collared alternative to a polo. Comfortable lightweight easy wash great for travel and flattering casual option that can go from hiking to fishing to dinner out. We have purchased multiple colors. People will stop your man to ask where they got the shirt! Also appropriate for women's sport and hiking if the size is right! Great shirt!!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Jun-18",
   nickName: "Duane R. Collie",
   title: "Cool and Flexible",
   body: "Terrific pants.  I own and operate a retail store that requires a lot of lifting of merchandise while still looking good in appearance. These fit the bill exactly because they are light and cool, and move with you. No more blown out crotches while picking up an 80lb box.  These are - for me - the perfect work pants in the summertime.  I'll be buying more.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "7-Feb-17",
   nickName: "stsj",
   title: "Long-standing quality",
   body: "Sorry nordstrom, but I did a complete description already which somehow got lost.  I'm sure you agree that an evaluater's time is too important to waste.  So, once again and in shorter form:  These Haggars are nicely designed and well made.  The fabric is light and very smooth.  However, I have only worn them once.  I happily wore Haggar slacks 30+ years ago.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Feb-17",
   nickName: "Dave",
   title: "Buy a size bigger for correct fit.",
   body: "You must buy a size bigger than your waist to fit comfortably. It doesn't 'stretch' as they said on the website. I have other Haggar pants that fit me perfectly using 42 x 32 however, when I tried these on, they were not comfortable at all but tight! They are sending me a replacement size 44 x 32 and I'll make my remarks when I try them on when they arrive.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "1-Apr-19",
   nickName: "wshernap",
   title: "@nd pair in a couple of weeks",
   body: "As I said in the title, this is the second pair I've purchased within a couple of weeks and the first pair fit perfectly.  The second pair was way, way too small.  It was as if they put the wrong size on the label.  I've been buying size 44 waist and I lost a little weight so I switched to 42.  The first pair fit perfectly and the second pair is unwearable.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "2-Dec-17",
   nickName: "Kevin C",
   title: "No surprises, a VERY  good thing.",
   body: "I'm somewhat surprised it didn't shrink more than it did!  I've noticed the 'UA' products tend to last longer as well, and it feels good.  Beware of the differences between anything branded 'Under Armor' vs. 'UA'...even if the former are legit and actually made by Under Armor, they're best used as rags after being washed once.  But this shirt I'd buy again.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "1-Aug-14",
   nickName: "David",
   title: "The Most Perfect Workout Shirt",
   body: "These are the best workout shirts I have come across.They are thin, but not too thin (i.e. versatile) and are fantastic in hot 100F weather or on a cool day.The material is smooth and light and sturdy.  No nipple rub scars from jogging.It's great they come in many colors as well.Hopefully UA carries more heather colors as they are the most unique & stylish.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Feb-18",
   nickName: "pdpie96",
   title: "Perfect light hiking boots",
   body: "Got these for trip to Sedona, AZ. I usually hike in trail sneakers or even Keen sandals and didn’t realize how much more comfortable these light hiking boots are until trying them! In particular the soles, though flexible, protect against small rocks and still give you feel of the ground. And the low ankle collar prevents rolling on uneven ground. So happy!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Dec-16",
   nickName: "Delilah Mayfair",
   title: "Mostly good!",
   body: "I would give these 5 stars except for the stupid tiny front pockets. I don't have a lot of keys & I keep them in a little KeySmart organizer so they are very compact. But even that is too big to fit in the key pocket securely. Annoying. If the front pockets were all just one inch deeper they would be useful. This is why I usually buy unisex skinny jeans instead.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "21-Dec-18",
   nickName: "Katie",
   title: "Love these",
   body: "I bought these for a hike up Mt Washington and wore them right out of the box. I guess shoe people would say you should give them in a break in period to make sure everything feels good but I had no issues at all. These stayed very waterproof and warm while not being overly heavy. They are a little bulky but that's kind of the point, they are meant to be rugged.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Jul-15",
   nickName: "Jason Short",
   title: "Runs large, but is a great shirt",
   body: "This shirt does run VERY LARGE.  I am normally a large and fit perfect in a medium.The shirt is super lightweight and really helps keep you cool on super hot days.  I wore it in Florida recently and when it got wet it was usually dry in a few minutes.  Super for hot climate where you want to keep the sun off your skin.  Combine with a sun hat and you are all set!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Sep-14",
   nickName: "Alvarosva",
   title: "excellent product",
   body: "xcellent product. Shop fulfilled with the delivery and arrived on time. the texture and material of the product is of high quality. I am satisfied with the product. I recommend the seller and the products they sell.The product price is commensurate with the quality. The relationship between price and quality is good. The expectations of the product is guaranteed.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Apr-18",
   nickName: "Mrs.Earl",
   title: "Flattering and comfortable",
   body: "I am getting to know this new post baby body,  currently 3 months out and still bigger than I would like to be. This dress fits great and is super comfortable and I love the pockets. It is not nursing friendly!!! Ha! I couldn't find a dress I liked that I could nurse in, so I had to get undressed to feed baby, but ... It's not supposed to be. I would def buy again",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Nov-18",
   nickName: "Johnene",
   title: "Best Jeans!",
   body: "Perfect fit, soft, quality denim. The deconstruction looks cool and edgy, a bit like a peek a boo, where you don't really notice the slits till your legs bend while walking. (It's a fun and unique feature, I think).I absolutely love these jeans. They're so comfortable it feels like I'm wearing yoga pants.The shipping was very fast.I'm really happy with my purchase.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Mar-19",
   nickName: "sarah92",
   title: "The fit is all wrong",
   body: "I'm not sure what body type these pants are supposed to fit. I wear a size 10-12, and ordered in a size 12. These fit my upper thighs well, are very loose in the waist, and are way too small in the lower thighs and calves. I can't order a size up because the 12 is already so loose in the waist. The only reason I gave 2 stars is because they appear to be real Levis.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "28-Nov-16",
   nickName: "ironing man",
   title: "Almost perfect!",
   body: "Haggar has nailed it with these pants.  They look great, are cool on hot and humid North Carolina days, come perfectly pressed out of the dryer if you follow the washing and drying directions.  (They wear virtually without wrinkles--minimal after sitting in the middle seat on a coach flight for five  hours.) No more no-iron khakis for me, getting these in every color.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Aug-18",
   nickName: "Frank Castle",
   title: "Good fit... unusual fabric difference",
   body: "I have ordered many of these shirts from nordstrom/Under Armour in two sizes(XXL and xxxl) and multiple colors all are very nice and fit correctly..... however the Royal/white color almost seems to be a totally different shirt the  fabric feels much thinner and it is almost see thru maybe it's a newer version? Idk but I'll be sticking to gray, navy, and black from now on",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "17-Oct-18",
   nickName: "Tom Hoffman",
   title: "Great traction!",
   body: "Although my wife has only worn these hiking boots one time, she said she was pleased with the traction the boots offered her in mostly dry conditions on a moderate 3.5 mile hike we took in Northwest New Jersey. The sole could be more flexible - it felt a bit stiff. Still, the boots haven't been broken in yet. She found the boots comfortable the first time out in them.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "11-Mar-18",
   nickName: "Katanajo",
   title: "Very Happy w\\Quality",
   body: "Husband played linebacker in school and wears an extra large. He said it fits pretty good but just a tad small for him. Then again, he has a big build. We decided to keep it as it was not so tight he could not fish or wear it. This material is very thin which is what we wanted and it has SPF and air vents. I wash on warm, delicate and hang dry to make them last longer.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Oct-15",
   nickName: "Alex RSR",
   title: "but on these Columbia shirts which I have like 7 or 8 my best fit is small",
   body: "I am large in almost all shirts, but on these Columbia shirts which I have like 7 or 8 my best fit is small. I like fit but tie, medium fits me fairly ok but too long for me I am 5.10' tall and 175L  t which mean I am not a short nor a fat or belly gay I will call myself regular. So my recommendation is: if you like it fited buy tow sixes down if not buy one size down.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Dec-17",
   nickName: "kristin o",
   title: "They're made with Lycra and are like leggings. So comfortable",
   body: "Never taking these off! They're made with Lycra and are like leggings. So comfortable!!! I have the worst ti,e with jeans because I have hips, thighs and butt, and these are perfect. I'm 5'6', 138lbs, normally a size 4 or 6 depending on the brand, but am a pretty consistent size 28 in Levi's and these were no exception. About an inch too long but that's no biggie for me.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-Apr-19",
   nickName: "Stephanie",
   title: "Awful",
   body: "These do not fit the same as the ones I’ve tried on and bought from Macys. They are thinner and stretch out throughout the day. There are also places where the threading is coming out. Im pretty positive these are fake or the jeans that werent made well enough to be sold in department stores. Sad that Ive torn the tags off and washed because I would return in a heartbeat.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "9-Apr-18",
   nickName: "Ashley Moffitt",
   title: "Buy this dress!",
   body: "It is perfect exactly what I was looking for and more! I’ll be buying more in the same size due to such a great fit, it’s hard as a short person to get something that isn’t 8 inches too long! Somehow in the buying haze I missed that it had pockets, you can’t fathom how overjoyed I was when I realized this! Cute dress: check, fits great: check, AND POCKETS: double check!!!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Nov-18",
   nickName: "Anna Green",
   title: "Good fit and quality, length a little long.",
   body: "Perfect fit other than length. I ordered short length which is still a tad bit long and it kinda affects how the ripped holes look on my legs.  They are a bit closed in and not spread how they should be. Other than that, the quality is wonderful and I can safely say I think these pants will last me a long time! Product also came on time which is a plus. I'm 5'1 and 144lbs.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Aug-18",
   nickName: "Linda",
   title: "Jeans came worn!",
   body: "I am writing this review based on how shocked I am. Today, I received one of MANY Levi’s jeans ordered here on nordstrom. As I began opening the package I noticed the jeans came with no tags, pockets out and the pants unbuttoned. They looked as if they have been worn and washed. I am VERY disappointed and grossed out by this. nordstrom, I expected more than this. Major let down!",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "2-Mar-19",
   nickName: "Megs44146",
   title: "Love this maxi!",
   body: "I bought this to wear as a comfy casual dress but ended up wearing it to a wedding. I dressed it up with cute jewelry and got a lot of compliments on it. I’m 5’2, 130 lbs and bought a M. It hit the floor, which I expected with my height but not bad enough to bug me. It also hides all imperfections, highly recommend! Going to buy more colors! Can’t beat $11 for a maxi dress!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "2-Apr-19",
   nickName: "tsl789yk4",
   title: "Fit like a tent.",
   body: "Way too big. I've recently lost weight. It's been nice buying large shirts instead of XL.  However I should have bought this in a medium. The large is enormous. I understand it is supposed to be airy and loose but it was too big.  Felt ridiculous wearing it. Had it fit, I probably would have enjoyed more, although I'd definitely recommend the long sleeve or the short sleeve.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "5-Oct-18",
   nickName: "Debbie Sparks",
   title: "Perfect fit",
   body: "This was my first time ordering jeans online.  I've gained weight since I last bought any.  I've never bought any that didn't have sizes like 4, 6, 8...20.  I asked the seller for advice on what size to order.  I am 5'3 and weigh 152. I carry too much weight around the belly.  These jeans (31 average) fit me perfectly.  I was sure I'd be sending them back.  They are awesome!!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "2-Dec-17",
   nickName: "Joe",
   title: "quality control has dropped off",
   body: "quality has dropped.  I will not be purchasing tech shirts going forward.  this is my 10th under armour tech shirt.  They have changed the sizing on the medium and the material itself is now so thin its transparent.  I have also notice under armour quality has dropped on their cold gear shirts and I will not be purchasing those anymore as well.  Has this happened to anyone else?",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "27-Nov-16",
   nickName: "Red3M(.)com",
   title: "I have played many rounds of golf in these and they are very comfortable. They will keep the sun off your legs",
   body: "Fit exactly as the size they say they are. I have played many rounds of golf in these and they are very comfortable. They will keep the sun off your legs, but yet are lightweight and cool even down here in Florida. They do not stain or pick up dirt easily. I have many pairs of golf pants some 3-4 times the cost of these, but these are as good a quality as the more expensive ones.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "5-Jul-18",
   nickName: "Abcdefg12",
   title: "the color is nice and the material is pretty soft",
   body: "Pros: the color is nice and the material is pretty soft. The pockets are great and the size is let true to standard.Cons: the material is thin. You can see though it in the light. It's not long enough for tall people. I'm 5'11' and it's pretty short on me. The waistline is awkwardly placed and makes me look pregnant, because of the cut. It's not flattering on me in the slightest.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "3-Jun-18",
   nickName: "Jonaessa",
   title: "It has pockets! And it’s comfy.",
   body: "This dress is fantastic! I am quite a busty woman so I tried to read lots of reviews before selecting a size. I went with an XL and it fits perfectly. The material is very soft. Though it felt heavy taking it out of the package, it wasn’t heavy at all despite its thickness, if that makes sense. And it has pockets!! I ordered a different color because I was so pleased with this one.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Jun-18",
   nickName: "Tony",
   title: "Shorter than expected",
   body: "I only give it 4 stars bc it is shorter than expected. I’m 5’4” and it sits about 2 inches from the floor, so I wear it with flats. The material is like a soft cotton and has some stretch to it. I ordered a size small.  I’m wearing this currently as a maternity dress (pre-pregnancy size 2/4) and it works great. I plan on wearing it afterwards too. I love it, but wish it was longer.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "8-Mar-17",
   nickName: "books:)",
   title: "The legs fit great but the waist is huge",
   body: "These jeans are the weirdest fitting jeans I've ever owned. The legs fit great but the waist is huge. This is the second pair I ordered trying to find a good fit. The first pairs would of fit my waist but the legs were so small I couldn't fit my foot through. I'm wondering if nordstrom only gets the messed up Levi's. I have to keep this pair because I ripped the tags off like a dumba$$",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "31-Mar-14",
   nickName: "CritterCreekRanch",
   title: "Columbia Men's Bahama II Shirt",
   body: "I buy Columbia shirts for my construction man, they are comfortable, breathable, and fit true to size and I do not have to iron them.  He also is an avid fisherman and hunter.  If he is not at work he is in the woods or out on the pond or lake.  After hundreds of washings, from wearing to work or play the color has not faded it has not shrunk.  I highly recommend this brand and style!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Jul-18",
   nickName: "Samantha Shucavage",
   title: "Freaking love this dress",
   body: "Freaking love this dress.  Read the size guide because it’s not made like standard sizes.  It’s sooo comfortable, and the cut of it accentuates the right areas and hides the problem ones.  This is a great buy.  I’m 5’9, 36G, usually wear size 14, and I have the 2XL.  I could probably size down, and you could for sure if you’re smaller busted.  I have multiple colors- highly recommend.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-Jan-19",
   nickName: "Beezus11",
   title: "The jeans are nice looking, but the label is from China",
   body: "The jeans are nice looking, but the label is from China and the fit is off. inseam seems too restrictive and there is not enough stretch. still on the fence if I will be sending them back. I also hope that nordstrom would be more transparent as to where their items originate from. I try to purchase items from the US primarily because sizing is always way off when they come from oversees.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "8-Aug-18",
   nickName: "sdog",
   title: "watch color",
   body: "I live in these shirts and they are great, thought I would buy a couple of light blue shirts, didn't know what shade to order. one of the shirts matches picture, the other is odd tone of blue,  can't tell you which is which; the tags don't have the color written on them.  the pictures looked identicle in color on the listing. just know which color you really want before you buy online",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "22-Feb-19",
   nickName: "Sara",
   title: "Comfortable and flattering",
   body: "I love these jeans.  They are comfortable and flattering.  I am about 5’7”, 150 pounds.  After reading the reviews, I purchased a size 30.  I think I could probably have sized down to a 29 because there is a little stretch to them, but that would just be for the sake of vanity. They look nice and feel great.  When I pulled them on, both of my daughters complimented the way they looked.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "20-Jul-17",
   nickName: "Michelle M.",
   title: "Runs very big",
   body: "This shirt runs really big. I even went to a place that has same shirts to check sizes. The large in store was just right when my father in law tried on (they didn't have short sleeve in store so got online). The large that was shipped to me was not same large in store. It said large but I think really  an xtra large. Size down one when ordering. Otherwise, a beautiful  well made shirt.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "11-Sep-18",
   nickName: "N. Earl",
   title: "Shorter in length, pills easily with seatbelt",
   body: "This maxi dress pilled something terrible after a day in the car wearing a seatbelt. Only a few low quality shirts/blouses have ended up like that, and I can’t very well not wear my seatbelt. So, instead of a quick, go-to dress, it’s now a ‘around the house’ dress.Worth noting also that the length was about 2” shorter than the other Maxi dress I bought in the same size, different color.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "9-Apr-15",
   nickName: "Debb",
   title: "Great shirts for a great price!!",
   body: "I bought my husband two of these shirts for his birthday and he loves them!! He had bought one of these shirts about four years ago and it quickly became one of his favorite shirts!! He loves the vented area on the back because it keeps him cool! The shirts arrived on time, the fabric is lightweight and cool, the colors are beautiful, the quality is great!! Awesome shirts for the price!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "5-Jul-18",
   nickName: "Jdmjr85",
   title: "Love It!",
   body: "I brought this to wear to an event.  The fact it has pockets made it even more appealing.  The material feels nice and isn't clingy. It is true to size. I am 5'3 and a little under 200lbs and usually wear a size 14. I ordered this dress in an XL and it fit perfectly. I am a little top heavy so the material did stretch there and made it a little transparent, but wearing a black bra helped",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Dec-18",
   nickName: "Holly Hill",
   title: "Love them",
   body: "I love these jeans. Levi's have always been my favorite and I was thrilled to find these on here for a few bucks cheaper than in the store. They both look and feel really nice. They do have a little bit of a stretch which is nice for a girl with a round butt like me. I'm 4'11/110lbs/size US 6 and I ordered a size 28 short. They fit me perfectly and I will definitely be back to order more",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "31-May-18",
   nickName: "EJ",
   title: "Love it!",
   body: "This is very comfortable and the fabric is amazing. However, I’m not sure about any of the light colors due to it being very thin material. I’m 5’7” 130lbs and the size Medium fit perfect, I received a of compliments. The only downside, it’s a little too long with flat shoes. As long as I don’t wear flats I don’t have to pick it up as I walk. With boots or my Toms, it’s the perfect length!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Nov-18",
   nickName: "kcf12",
   title: "Super Comfortable",
   body: "I am 5ft tall and weigh about 150lbs. I wear a size 10 pants and a 36DD. I ordered a large and although it was too long (as expected) the rest of the dress fit fantastic. It is super comfortable and the pockets were a great perk. I would suggest getting a darker color if you have a bigger chest like I do as I noticed that the fabric stretches and can become see through if stretched too much.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Dec-18",
   nickName: "Kindle Customer",
   title: "DO NOT PURCHASE unless you REALLY LIKE CHEMICAL ODOR’S.",
   body: "Waste of my $$$$:  This dress SMELLS LIKE CHEMICALS SO BAD I COULD NOT TRY ON. Even after washing 3 times and several attempts to air out (outside, cuz the Chemical smell gave me headaches) were fruitless. Tried to give it away, but NO ONE COULD HANDLE THE ODOR. Had it in my car for abt 3 hours and it funked up my car. Had to wrap it in multiple bags to decrease smell before THROWING IT AWAY.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "20-Apr-19",
   nickName: "Deborah B",
   title: "Great boots!  Wide width and super comfortable!",
   body: "This is my first pair of Merrell Women's Moab 2 Mid Waterproof Hiking Boot and I love them!  Straight out of the box they were super comfortable; no need to break them in.  I have wide feet and it's hard to find boots/shoes with wide width, so this was a pleasant surprise to find boots that came with a wide width and also half sizes.  They fit perfectly and I will definitely get another pair.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Feb-18",
   nickName: "Katharine Byrd",
   title: "Perfect postpartum jeans",
   body: "I gave birth 10 weeks ago and am in that awkward stage of not yet fitting into my pre pregnancy clothing and not wanting to wear maternity clothes. I bought these because who can go wrong with  good pair of Levi's? So glad I did. They have a slight stretch that makes them incredibly comfortable and flattering. The color is just as pictured and a good light, casual color. Size is right on point.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Jul-18",
   nickName: "Lindsay Garland",
   title: "Cute, comfy, runs a bit small.",
   body: "Feel like this runs a little small. I'm 5'5 120. 34B and definitely carry my weight on the lower half so a S in maxi dress like this is normally perfect. This one is a little tight on the top and at my waist. I feel like it would be really tight on anyone with a larger chest. That said, I still liked it and would definitely order another color at this price, but I will order a medium next time.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "1-Sep-15",
   nickName: "Bromptonboy",
   title: "Cool and Practical Shirt",
   body: "Great looking practical short sleeve shirt.  I cycle commute to work almost every day - and I prefer to wear these synthetic SPF shirts that can look business casual (when paired with a good set of trousers).This shirt is vented, light, and airy.  The large size that I have fits my shoulders nicely, but it quite loose and baggy around the middle - so you may have to tinker with your normal size.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "17-Mar-17",
   nickName: "K Dog",
   title: "Great for a business casual environment",
   body: "Great pants for a business casual environment. the fabric and expandable waist keep you cool and comfortable should you be required to be physically active throughout the day. I have several of these in various colors and the fit and finish have remained consistent. Add a golf shirt or dress shirt and you are good to go.Haggar Men's Cool 18 Hidden Expandable Waist Plain Front Pant,Graphite,42x29",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "21-Dec-18",
   nickName: "Cathleen Manny",
   title: "Metal lace grommet is defective.",
   body: "These boots fit well and were comfortable, but I had to return them before I ever got to wear them even once. One of the top metal lace grommets broke the very first time I laced the boot. One of the two little stud pieces that hold the grommet on the shoe broke off...they appear to be made of cheap ‘pot’ metal. Honestly, it’s so disappointing, the cheap way everything is manufactured these days.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "26-Oct-17",
   nickName: "Nina",
   title: "Oh, Levi. The love/hate continues",
   body: "I returned the 711 Skinny. I am 5'4', weigh 124 pounds and I purchased size 28. The legs were crazy skinny. I'm not a toothpick. I knew a larger size was still not going to fit. Levi's fit either perfectly or way off the mark. Absolutely no consistency in size. The pants I absolutely love are the 811 Curvy Skinny in a 29. I also like the Mid Rise Skinny in a 28. The 711 is definitely not for me!!!",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "12-Jul-17",
   nickName: "Swap",
   title: "Perfect for Training",
   body: "This are great for my workout. Ordered the second one. I would recommend to buy a size smaller since these run a little loose near belly. But i have one with size L and one with M. I love both of them. I have chest 41.I am taking one star out as it is not pitch black, there are some fabric spots on my black one. Its not a quality issue, its just how they are.I still would go ahead and buy third one.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "16-Oct-18",
   nickName: "Maurice",
   title: "Runs Very Large",
   body: "Great quality and color was nice, but it was way too big! 5'4' 140lbs and the XS was still big. It might be passable if that's the look you want, but I thought it looked a little like a kid trying to play house with his dad's clothes. I returned it and I'll try some other styles. It's a great shirt and Columbia is always making great products. I was just a little shocked that the shirts ran so large.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "15-Jun-18",
   nickName: "David",
   title: "I like the fit and shape of the pants",
   body: "I have a pair of Haggar pants that i have been wearing now for 15 years. They look fresh and almost New. I like the fit and shape of the pants. Very comfortable to wear all day long. The new Haggar pants also fit well and look great! I hope that these pants also last 15 years. The new Haggar pants are also comfortable to wear all day. I will buy more in the future as I replace other off brand pants soon.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Jan-19",
   nickName: "RobbnCA",
   title: "Love UA shirts but these are stinkers",
   body: "These fit well and look great.  But even after cool days they stink of chemicals and body order.  It might be my body odor but my cotton shirts don’t stink and my other poly blend odor wickening shirts don’t stink like that.  Worse part is my hamper stinks of that chemical smell for days after I do wash.  Have to put these in the garage after using them each day.  Like UA products but these are stinkers.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "13-Nov-17",
   nickName: "Matthew T",
   title: "Hmm, amz I fat?",
   body: "Very nice pair of trousers here, very comfortable, I ordered the 36w and they seemed to have to stretch out a long way when I put them on, I was thinking, 'wow, 36w must be their extreme limit' but no. After I grabbed the yard stick I discovered that they were indeed perfectly 36'  before any stretching. So maybe I'm fatter than I thought?Well I'm going to order another pair and I'll let y'all know, okay.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Sep-16",
   nickName: "Vernon",
   title: "An Honest Review After 5 months of Use...",
   body: "I purchased these trousers on 9/3/2016, and today is 2/3/2017.  I wear these trousers every day to work (4 days a week).  I won't buy a second pair because I only have a couple of more months to go until I retire, so I'll keep wearing them every day until then.  These pants are very comfortable, and they're very flexible at the waist.  I would definitely buy them again (if I wasn't retiring in July 2017).",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Jan-18",
   nickName: "Nordstrom Customer",
   title: "Best Purchase Ever",
   body: "Oh my word! I have wanted these boots for 2 years. I wasn't comfortable spending that much on a pair for myself. I finally broke down and got them for Christmas. These have to be the most comfortable boots I've ever had! I have walked many miles in them and really don't even want to take them off. Definitely one of the best purchases I've ever made! I ordered a wide in my regular size and they were perfect!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Jul-18",
   nickName: "Harlow213",
   title: "Awesome, quality jeans that look and feel amazing...",
   body: "Absolutely love these jeans! I'm 5'5', weigh around 115 lbs and I purchased the 25s. I'm small-framed and lean however I do have a shape/curves and these fit like a glove. Perfect amount of stretch, super comfortable, not too thin, not too thick. I'll be buying more pairs in different washes asap. These also retain their shape over time. I can wear these for an active 12+ hour day and they don't stretch out.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-May-19",
   nickName: "CathyBT10",
   title: "Great shoe, but not tall enough for good ankle support.",
   body: "I usually wear a 7.5W, but after reading reviews, I ordered up - 9W which was perfect size.  I hoped these would provide good ankle support, but they are not tall enough.  Otherwise, the shoe is great, good outer sole, and the insole has great comfort when standing.  The seller was great and product arrived on time.  If you do not need the ankle support, these are great shoes.  I wish they made these taller.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Jul-15",
   nickName: "Jayme",
   title: "Nice Shirt for the Price",
   body: "I bought the Gulf Stream, Sunlit and Black as gifts (approx. 6'1'/195lbs) and we are both very pleased with the quality, feel of the material and colors.I listened to other reviewers and sized down.  Normally I would have bought an XL, but instead I purchased a Large.  The Large is still very roomy/not fitted, but I feel it is meant to be comfy for fishing.The material feels a bit like mens swimsuit material.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "20-May-17",
   nickName: "Léon M. C.",
   title: "Best Pants I've Owned",
   body: "I think that these might be the perfect pant. Not too thin, not too thick, durable, color-fast, comfortable, true to fit, and good cut that doesn't make you look like your wearing a fancy parachute pant like most pant of this style. Hang them directly after washing/drying on some wooden pant hangers and forget ever having to iron again. I wear these every day as a military contractor and absolutely love them.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Apr-19",
   nickName: "Karen Wissler",
   title: "Great material, brighter color, runs super large.",
   body: "Color not close to picture and went back and looked on Laptop also. Way brighter. You can see him in a crowd from far away. As noted all over these reviews it runs super big.  My guy wears a large and sometimes an extra large because of his barrel chest. I got a medium as reviews recommended and it fit perfect. He loves the comfort of it and delt with the really bright color i know just to be a good sport. :)",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "16-Apr-14",
   nickName: "Johnny",
   title: "Great shirt!",
   body: "I am new to these shirts and styles so i can really tell you a lot about them, i like this one, it is tight but is suppose to be tight. I consider it as a light compression shirt (very light) unless you down size your self i would guess. Its a good buy all around if you like a shirt that is light and is a tight fit, also it is cool feeling so in the summer an while you workout this will help a lot!5 out of 5!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Nov-18",
   nickName: "Dena ",
   title: "GREAT fit and very comfortable! Arch support is just right!",
   body: "I was looking for a winter hiking boot with aggressive tread, waterproof material, lightweight and a good arch support (their good look was a nice bonus!). I have never spend this much on a boot, but it is worth every dollar!  Right out of the box they were comfortable and easy to walk in.  I would recommend them!  I have not yet been in the woods, but I walked in them for awhile and the comfort level is great!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Apr-18",
   nickName: "Nordstrom Customer",
   title: "Fits great, quality material, with POCKETS!",
   body: "This was one of my first nordstrom/online dress purchases. I was so please with how quickly it arrived. The fabric feels thick, definitely not see through, and nice quality for the price. It looked a little small out of the package, but fit perfect without being too tight.I am 5'5, 135lbs, size 6, 36C ordered a small and fit great. I like that the length is just enough so if I wear short heels it doesn't drag at all.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Jan-16",
   nickName: "Scott",
   title: "These shirts are great. Nice and light weight",
   body: "These shirts are great.  Nice and light weight.  Great UV protection.  The sizes do run big but in reading the other reviews I anticipated this so they fit as I had hoped/expected.  I wear a XXL and ordered a XXL.  These are likely a size larger so there is plenty of room for me to move around comfortably. In other words they are not snug.  If you want it to fit without a lot of room, order a size smaller at least.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Jun-18",
   nickName: "Khaslam",
   title: "Super soft and absolutely perfect",
   body: "I absolutely love, Love, LOVE this dress!!! I’m 5’7” 32DD and I got a medium and it fit perfect. Super loose but in a good way. Soft material. Was the perfect length for me. I wore it with sandals and the dress was just a pinch past my ankles far enough off the ground. I love the pockets, was honestly the selling point for me. Would 100% recommend for a nice casual dress! Probably going to order one of every color!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "1-May-18",
   nickName: "D. Mancill",
   title: "The medium fit perfect! The material is super soft",
   body: "I am 5'4, 135lbs with a 34DD chest.  The medium fit perfect!  The material is super soft, but thin.  I first ordered the black in a small.  I had to return it.  They didn't have anymore in medium black, so I ordered the purple grey and it is very pretty.  Looks great with a white jean jacket and white sandals.I ordered a black one from a different seller and the material was scratchy.  This is the seller to go with!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "18-Jul-18",
   nickName: "Monique Diaz",
   title: "Smells terrible",
   body: "I love the look and feel of the fabric, but it smells really awful. I've soaked it for 3 hours and rinsed it and it still reeks of some 'chemical' like smell! I've washed it twice on a heavy duty cycle and the smell is still there. I hope another few washes will do the trick, because I'd really like to wear it for my daughter's upcoming 1st birthday. I'm tempted to purchase another to see if maybe I recieved a dud🙁",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "22-Aug-18",
   nickName: "Paula Comer",
   title: "He does like his new trousers",
   body: "My father in law doesn’t do much these days at 92 he’s earned it. He has put on some weight so we wanted to get him some New trousers so we went up a size. We had to send them back. With that elastic waist band they were to big so we stuck to his size. If you’re going to order these I try the option to try for free 7 day option when ordering that you won’t have to do as much reordering. He does like his new trousers.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Mar-17",
   nickName: "glaxojo",
   title: "Good fitting/smooth finish pant",
   body: "Product arrived on a SUNDAY as scheduled so that's impressive.  They fit well and have a good finish.  The color was true.  I purchased these for golf so we'll see how they hold up in the heat, so I can't give five stars yet.  4/12/17: Just returned from a week of golfing in Orlando and these pants really kept me cool.........so I have upgraded them to 5 stars.  I still wish they had a greater variety of colors though",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Nov-18",
   nickName: "Jennifer Kim",
   title: "My favorite pair",
   body: "So, I bought these jeans first fromMacy’s. I wore them all the time! I started getting holes in them near my butt pocket area. One night I put my phone in my back pocket and went to get out of my car and my back pocket ripped and my butt was exposed! Good thing I just got home! Anyways, I went inside and immediately started looking for another pair. So happy I found them again! I love how stretchy and comfy they feel.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Sep-18",
   nickName: "Mikey",
   title: "Tad short in length.",
   body: "I usually go with Nike’s dri-fit shirts for my exercise gear but I wanted to give Under Armour a try. What I noticed was the chest is a bit wider for these (Nike grips me a lil better) and also the length is about 1-1.5 inches shorter than the Nike brand im used to. When I lift my arms over my head I expose my stomach (6’ 2” 215lbs)  Overall a great shirt that im happy with but in the future i think I’ll stick to Nike",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "24-Jul-18",
   nickName: "Melanie M.",
   title: "So comfy and perfect fit!",
   body: "I love this style of Levi's! The 711 fits my figure perfectly. The stretch is just enough and makes these so comfortable. I have a bit of a booty, so I tend to have the issue of jeans that will fit over my hips are too big in the waist and gap in the back. That doesn't happen with these. Fits true to size and the dark color is perfect for dressing these up for the office with a blazer. I want this style in every shade!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Mar-19",
   nickName: "Anna F.",
   title: "Waterproof and comfortable",
   body: "I bought these shoes for a trip to Ireland. I knew I would need waterproof shoes that would keep my feet warm and dry while also being comfortable enough to sustain being on my feet all day every day for a week. These shoes delivered perfectly! I have plantar fasciitis, so my feet typically hurt no matter what shoes I'm wearing. My feet felt supported and comfortable the entire trip. I definitely recommend these shoes!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-Oct-15",
   nickName: "A. F. Navoff",
   title: "easy to wear in humid climate especially around the beach",
   body: "Bought this shirt for extended travel in the Med especially Greece.  Needed something durable, easy to wear in humid climate especially around the beach.  Also easy to wash and dry quickly.  This shirt was outstanding great set of pockets to make it easy for all the things we carry today.  Would dry after washing in an hour in the sun.  Wicked off the sweat avoiding the smell from shirts that did not.  Well worth the money.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Jun-15",
   nickName: "S. Fraser",
   title: "Slightly baggy",
   body: "Got this as a Father's Day gift for my Dad.  He liked the yellow color, not to bright, not too pastel.  I have a couple pairs of Columbia PFG pants and love them...just keep in mind that while this material dries quickly, provides sun protection and is fairly cool, it does not stretch much at all.  This shirt in particular is about a half size larger than what it says on the tag.  Better to be too loose than too small though!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "6-Jun-18",
   nickName: "Blake",
   title: "Awesome shirt!",
   body: "Fantastic shirt! When I moved to the south, I didn't realize how important it was to 'dress lightly' due to the humidity and extreme heat. I bought this shirt 1.) because it's trendy and 2.) because it was extremely affordable. This shirts maiden voyage was, in fact, a day on the river. Not only was it incredibly effective ventilation, but also very light and move-able. Very pleased with this shirt, I cannot wait to buy more!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Jul-18",
   nickName: "R. Cushman",
   title: "Light Weight But Durable So Far",
   body: "I have been wearing these to work for the last two weeks and so far they are wearing well. I work at a store stocking shelves and must get on the floor and sometimes lay on the floor to get to items at the bottom shelf. There is enough movement in the pants to not cause a problem and dust from the floor wipes away well enough with a brush of the hand.They are light weight and breathable so that too much heat does not build up.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Jul-16",
   nickName: "charlie",
   title: "A great medium weight cotton shirt",
   body: "I have a couple of these shirts and really like them. The fit is on the roomy side which I like, but I would say they run almost a size larger than marked. It is a medium weight cotton shirt. It isn't as light and breathable as a Tamiami, but it is still  a great option for a summer day, and even earlier and later in the season. When I wash it I normally just put it on a hanger to dry and have never felt a need to iron it at all.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "7-Jun-18",
   nickName: "RRR",
   title: "They Run LONG!",
   body: "These pants are extremely comfortable, and the workmanship is some of the best I've seen. However, compared to a pair of 36x32 that I purchased a week prior to these, the 32' inseam has to be nearly 1' longer on this pair. I'm now trying to decide whether or not to return this pair. After all, if they were too small I could diet, and it too large, I could cinch up my belt, but I don't know how to immediately lengthen my inseam! :-)",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "7-Oct-13",
   nickName: "Nicholas Montalvo",
   title: "A little large, but they work.",
   body: "I guess these shirts run a bit large.  I'll remember to order one size down next time. Other than that, the shirts are very light and breathe well.  I've seen some complaints about the fabric being thin, but it hasn't worn out or torn with the abuse I've put them through.  I have to say that I actually prefer the lighter material, as I cool down and dry off must faster than some of the heavier sweat-wicking clothing I've used before.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "22-Jul-16",
   nickName: "Brian W.",
   title: "Great feel, low rise seat",
   body: "I just got these and tried them on.  They fit, but as some other reviewers stated they are low rise, lower than expected.  I thought I would be ok with that since I tend to wear my pants lower than the actual waist and I'm sick of having a baggy crotch, but when you bend over or sit down they really  leave some plumbers crack.  Otherwise the pant looks, and feels perfect.  They are lightweight, and look perfect for business casual work.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "11-Jun-18",
   nickName: "Carolina E P",
   title: "Pleasant surprise!",
   body: "This dress was a pleasant surprise. I am 5'4 and 180lbs. I ordered a large. I probably should have ordered an extra large but with a body-shaper tank top underneath it is a great fit. The fabric is soft and the fabric is long enough to wear with heels but still a good length to wear with flats if I wish to. The pockets are a perfect size for my phone or keys and it all flows down nicely. Also, not easily wrinkled! Overall great purchase.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Sep-18",
   nickName: "Chee Keong Chen",
   title: "Very comfortable and very quick drying",
   body: "I bought the Tamiami II and Bahama II shirts together. The Tamiami shirt's material is stretchable (elastic feel). Both are very quick drying (I stay in a high humidity place >80 and both shirts can dry in a matter of hours ~6hrs, although the Bahama II dries slightly faster). Bahama shirt's pocket is a bit bulky and has a opening at the back (for better ventilation). If I can only choose 1, my personal preference will be the Tamiami II shirt.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-Oct-18",
   nickName: "Nordstrom Customer",
   title: "Was on feet for 8 hours, 5 days straight and no discomfort. Great hiking boot.",
   body: "I loved these boots. I have wide feet and these were still good. Was on my feet working for 8 hours straight - walking/ bending and my feet didn’t hurt one bit. I wore them for a few days prior to actually using them for what I intended to use them but didn’t really need to break them in. I added Dr. Scholl’s custom insert because I have a low arch and high pressure on my heel. They were even better with insert. Highly recommend and waterproof.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-Jun-16",
   nickName: "Rachel",
   title: "Awesome gift for outdoorsy dad!",
   body: "I bought this shirt for my outdoor loving dad for Father's Day.Pros:> fits well> blocks sun which is important for him> the back has a flap with mesh so my dad doesn't overheat which happens when you're out fishing all day in the sun> great color selection> great and dependable brand> material is comfortable against the skin and doesn't get all wet and sweaty ( breathes )Cons:> I don't like tags in shirts and it would be better if it was tagless.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "7-Jan-19",
   nickName: "Nordstrom Customer",
   title: "I only wear these now!!",
   body: "I had recently gained a little weight so I needed some new, stretchy jeans and YESS these are perfect! I wear them all the time. They are stretchy and the color is just a classic denim that goes with anything. They fit true to size (got a 29, i am 5'4', 145 pounds with a tummy pooch) and they are comfortable standing and sitting. Even though they are strechy, they do not stretch too much that they sag or anything. Would and probably will buy again!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "7-Jun-16",
   nickName: "usafpj",
   title: "Nice pants, but know that they are not a relaxed fit",
   body: "Nice pants, but I wish it had said slim fit somewhere on the description.  I am not a fan of slim fit.  Maybe they are not classified as slim fit but they are pretty tight through the thighs. I do like the material and how they breath.  I am in Saudi Arabia now so I quite informed on this subject. They are worth the price, just keep in mind your body shape and decide if they are what you are looking for.Sizing was correct for me in waist and length.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "20-Dec-16",
   nickName: "Sara",
   title: "Happy with my purchase- but there were no tags",
   body: "I am happy with these jeans but I already owned a pair when purchasing them and knew to order a size up. One thing that was super weird was the fact there were no tags or stickers on the jeans when I received them! I love the color and like the way they fit so I ignored that part but I still find it strange. I usually wear a 29 but the legs seem to run smaller in this style so I went with the 30. The waist is a little large but I like the casual fit.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "19-Jan-19",
   nickName: "Terri M. Borer",
   title: "Quality product and great service",
   body: "Exactly as described.  The quality of these boots make them well worth the money,  and this site had the best price.  I usually take a size 9 for shoes, but 9.5 for most boots.  I read other reviews about them running small so I ordered the 9.5 and they fit perfectly.  Ordered these late Sunday afternoon and they were on my doorstep by Tuesday afternoon.  All of the other sale options wouldn't get them there until Wednesday.  Great service, thank you!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "5-Sep-18",
   nickName: "Kindle Customer",
   title: "Also the material is comfortable but thin and flimsy as compared to other wool ...",
   body: "I tried this pants on. The size was exact with maybe an inch of wiggle room. It could expand maybe 3/4 inch on each side but it still could be tight. Also the material is comfortable but thin and flimsy as compared to other wool blend pants that I own. It may be cold in the winter. So I don't now how long this will last.Six months later, I had to order other pants, This pants is impossible to iron, the thin material is impossible to iron a good crease.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "18-May-16",
   nickName: "Joseph Elinich",
   title: "Great Sun Protection",
   body: "As with all clothing that is UPC rated it is hard to decide if it actually does work as advertised.  However, I did not use sun screen on my shoulders and I saw no sun damage or redness on my shoulders after a long day at Disney World with the kids so I can only conclude that it does the job.  Material is light and airy and the fit is comfortable.  Only caveat is that it is boxy and runs big in the body but that has already been noted by many reviewers.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "9-May-13",
   nickName: "Deepak Krishnankutty",
   title: "Am hooked on Under Armour!",
   body: "After using Under Armour gear on the golf course, I decided to try out their gym gear. Excellent, as expected. These HeatGear performance tees are light, comfortable (the raglan sleeves are great) and the material wicks moisture so quickly that within minutes of my workout cool-down, they are dry again and have no odour too...quite amazing!These tees are expensive for what they are, in terms of actual material content, but worth it. Will be buying more.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Aug-18",
   nickName: "Nordstrom Customer",
   title: "Great boots !",
   body: "These booots were awsome.  I purchased these boots for my 12 yr old granddaughter. She wore them when she went hiking along the Appalachian Trail.  She wore them through countless streams and her feet never even got wet at all.She hiked about 40 miles in pretty rough terrain and not one blister.  She didn't have time to break them in, because they came just one day before she left for the hike, but they were awsome.  Could not have asked for better boots!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-Apr-19",
   nickName: "RubyRae",
   title: "Poor quality, unflattering pockets.",
   body: "Again - pockets on dresses only work if the material is structured or if you have no hips. Otherwise you're adding material to your widest point. This dress is made of a cheap, thin, slinky material so the pockets wind up looking like wads of fabric sitting at your hips. It isn't cute. The material also highlights any texture on your body - which can be unflattering in the wrong light. Had to return - you can get better quality for a similar price at Target.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "20-Jul-15",
   nickName: "nate42nd",
   title: "100% polyester not charged cotton",
   body: "These are 100% polyester not Charged cotton. I thought I was buying Charged cotton, but I will keep this shirt. It's a great fit, the material is great for hot temps. It's very fine material. Loose fit. You can see through it when held up to light. Not what I expected but I will keep and wear it.Edit : I don't know how you are supposed to dry these. If you put them in a dryer every piece of lint sticks to them. Might want to air dry them. Comfortable shirts.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "20-Jul-15",
   nickName: "Iseedumbpeople",
   title: "Expandable waist makes these good looking pants comfortable as heck",
   body: "Let me tell you about these pants.  They are great.  Very sharp and the material looks professional.  The waist is a flex waist so that really works for me as I work investigations and have to put a holster, cuff case, magazine case, cellphone clip, and badge case all inside the waistline and it expands with each item while holding items snug but not tight making it uncomfortable.  I have been looking for a pair of pants like these and have ordered many more.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Jan-19",
   nickName: "Troy Fine",
   title: "Comfort and Style",
   body: "I’ve been dropping weight and had to buy smaller pants.  The custom length was an unexpected bonus that only adds to the overall sharp look they have on me.  Enough room in the legs to bend down comfortably without looking too loose or baggy, and the interior of the pockets are the same color of the pants for those wondering so no color clashing when bent over and side pockets open up.  I work retail and lift objects off the ground often so this was important.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-Jun-18",
   nickName: "D. Bilderback",
   title: "Love this dress!!!",
   body: "I can’t say enough how much I love this dress! I’m 5’1 and wear a 10/12. I have a 1-year-old and 3-year-old so I’m trying to finally get my body back to a point that I can be happy with myself.  This dress does a great job of not showing my post birth belly. The material is very light and makes it fine for hot weather even those it’s long.  I get compliments on it every time I wear it.  It is super long and drags on the floor. But I’m 5’1 so that was expected.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Mar-16",
   nickName: "Nordstrom Customer",
   title: "These are the best dress slacks I have ever owned",
   body: "These are the best dress slacks I have ever owned. The expandable waist works great and doesn't lose its tension. Very comfortable and they breath great. I am a big guy and I am usually hot, these pants do not get warm and feel great. I would not suggest these pants for very cold weather. I was so impressed with them that I purchased more in different colors. Having to wear dress slacks almost every day while doing a lot of sitting, I highly recommend these pants.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Jan-16",
   nickName: "Beverly Labovitz",
   title: "Very Nice Slacks",
   body: "These slacks are beautiful and comfortable, with very soft material.  My only problem is that the button is extremely difficult to unbutton, much to my surprise!  My husband and I are going to button and unbutton it over and over this evening in hopes to stretch the buttonhole a little, and if that doesn't work, will take it to our alterations gentleman and see if he can put a slightly smaller button on it.  But my husband is very happy with these slacks, in general.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "13-May-19",
   nickName: "MWB",
   title: "Somewhat disappointed",
   body: "The waist size is marked as being the same as other Haggar slacks I have and the fit well.  However, these pants were easily an inch or more smaller.  Although I can still wear them, they are definitely not the waist size marked.  Also, the pants were not pressed properly and had to be redone.  Not the value I expected but I guess I learned a lesson about buying clothes over the internet. Very disappointed in Haggar.  Will definitely buy a better brand in the future.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "12-Apr-18",
   nickName: "Sobe",
   title: "Order smaller size",
   body: "It was just delivered, so I can share my initial reaction. It's a very nice shirt. Quality made & the color is great.I've only tried it on, but it is definitely larger than I expected. I typically wear a large in most shirts, so I ordered a medium after reading these reviews. It's not so loose that it looks bad; just not my ideal fit. I'm unsure if I'll return it for a Small or just keep it.Otherwise it certainly looks great and I'm hoping it keeps me cool on vacation.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "4-Sep-17",
   nickName: "Tom H.",
   title: "Not long enough for Big Guys.",
   body: "Nice fabric.  I see these shirts EVERYWHERE and on Big Men too.  I ordered XXLT with the hope of it being long enough to wear out and give me a long enough shirt tail.  It only widens the shirt....not lengthens, so I had to return because if you have big shoulders and are over 6' tall, these are not sized long enough as the photos suggest.  I'm just going to have to go to a store that sells all the sizes and see if I can find one that is truly made for Big and Tall men.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "15-Jun-18",
   nickName: "James W. Butler",
   title: "Cheap pants but your co-workers won't care",
   body: "These are some of the most comfortable pants that I have. Since I sit at a cubicle, I'm not going all out with a tailored suit for work. These are dressy enough for me since I don't even wear a tie. The polyester is kind of weird at first, but it is convenient since you don't have to take them to the cleaners.Every now and then I throw on a nice sport coat and they don't look out of place. I ended up buying 4 more in different colors. Great every day pants for the office.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Feb-19",
   nickName: "alphamom",
   title: "Not for my girls with booty",
   body: "I really wanted to love these. They are super cute, love the rips, fade, and the stretch however there was a huge gap between my back and the pants and when i bend or squat my bum hangs out. I originally had a smaller size then exchanged for a larger size thinking that may fix the issue but it didn't. I may try a high waisted version or maybe a different cut but I haven't found this wash in other styles so its disappointing but this style def isn't made for women with booty.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "24-Oct-18",
   nickName: "Von Adroy",
   title: "New Loose Fit is way too loose",
   body: "Shirts fit way larger than my old shirts of the exact same style [loose fit] - this Large fits like X-large. The material is also much thinner and wrinkles up easier. Unwearable for me, since I do not have a beer gut to hide, and I feel like a little kid again wearing my dad's clothes.  I bought two, washed them and put them through the dryer on high, but they didn't shrink at all; now I can't return.On the plus side - the material is very soft and does not stick when sweat.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "12-Sep-18",
   nickName: "A. Butler",
   title: "Still on the hunt for perfect olive jeans, but these will suffice for now",
   body: "The fabric is not really a good denim, but extremely stretchy, so some camel toe might occur if you’re not careful. They’re pretty skin-tight all over, and kind of accentuate any saddle bags you might have. These are just the slightest bit too small, but until I find a better pair that fits, I’ll keep them. The color is like a dirty light olive, more brown/tan than green/army green, but goes well with some of my dark tan, not quite Cognac booties. They’re good enough for now.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "12-Oct-13",
   nickName: "YogaMavenMom",
   title: "Worth it",
   body: "Under Armour is always worth the money.The quality is excellent and it fits just as expected. This particular t-shirt is comfortable and versatile. My fiancé wears it with gym shorts or a more casual pair of plaid shorts. It is light weight and breathes nicely. We love all of our under armour gear. The one item we purchased that we were not happy with (a pair of mens slides) customer service happily replaced with an item of greater value that we were extremely satisfied with.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Apr-18",
   nickName: "E. L",
   title: "Look great, nice fit! Comfortable!",
   body: "Very nice, had a great fit! I didn’t read if they could be ironed or not, but when I ironed them they left a little bit of a shine. I would up ironing them inside out and that worked, I think my iron was just on too high and was too hot for the material. I still gave them five stars because I should have payed attention to the temp of the iron. My husband said the waist was very comfortable! He was happy with the look and fit!  We will be purchasing another pair soon! Thank you!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-May-19",
   nickName: "Bermúdez",
   title: "Love this dress - might order 2 more",
   body: "I absolutely love this dress. I had originally bought it for church on Sundays. It's super comfortable, the material is great - not thin or low quality. I love that it has pockets. You can accessorize with a belt if you feel it's too loose but honestly it looks great either way. I'm 5'9 and it covers my toes which is great too because I have a hard time finding dresses that are long enough. I purchased the wine red color and I may but the army green and navy blue. Definitely a great value.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Mar-14",
   nickName: "W. Raffel",
   title: "Great Shirts, Great Qualty, Great price, make me a happy Traveler.",
   body: "The size of this shirt definitely runs on the large side (loose fit). I usually wear a large and based on other reviews I ordered a medium; I am glad I did because the medium is a PERFECT fit for me. The shirt is very light weight, but very durable. It makes packing for a long trip a breeze, because you can pack more shirts and still not have a heavy suitcase. The pockets on the front are deep and perfect for people that have a lot of things to carry with them. I highly recommend this shirt.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "16-Oct-16",
   nickName: "Dylan",
   title: "Great jeans for Rugby\" thighs and normal waists!\"",
   body: "I had the exact same pair of jeans I bought in 2007. I wore them day in and day out for 5 years. I finally broke down and spent the money to buy myself another pair. My only regret is not doing this sooner. If you have more muscular thighs, but still kinda scrawny legs, these jeans are great! They are so comfortable too. I have worn this pair three times a week for a month now and they are just as wonderful as I remember. I normally only wear 7 jeans, and these are by far the best pair ever.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "1-Dec-13",
   nickName: "CAT",
   title: "Could not be happier.",
   body: "I have purchased several of these shirts for my husband.  He originally wanted one for when he goes fishing. Then, I noticed that he was wearing it every weekend. I love that they look great and are wrinkle free. My only wish is that Columbia would make this and the long sleeve version in more colors. My husband has lost weight but still needs a 3xlt. The color selection for the tall sizes is rather limited. I guarantee that my husband would buy more of these shirts if there were more colors.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Feb-17",
   nickName: "Kyle",
   title: "Buttons on pants break!",
   body: "The pants fit and have been comfortable. I purchased two pair of these pants and the same thing happened to both the buttons broke with in a month or two after purchasing so I had to go resow a new button on them. Very annoying! I have a older pair of these pants and I am still using the same button that came with them so apparently they are using a cheaper weaker plastic button. Thank heavens I had a belt to hold up my pants for the rest of the day or it would have been a bit more embarrassing.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "7-Oct-18",
   nickName: "Buckeyenut",
   title: "Great pants and a professional look",
   body: "These are wonderful slacks/pants.  I normally shy away from the expandable waist because all the pants I've purchased normally slide down on me, and I'm a trim guy.  Not these pants.  Great quality, extremely comfortable fabric, and they stay in place without sliding down on my waist.  I purchased two pairs and now ordered three more.  They won't be as warm during winter but I love the look.  Very professional vs a pair of dockers and I know this fabric will hold up.  You will not be disappointed.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-May-16",
   nickName: "Phil",
   title: "The fabric is very comfortable, however it prints really bad when you have ...",
   body: "I bought this in three different colors, they all fit really well.  The elastic waist works well, however if it gets stretched a bit you start to get lines in the back that look awkward.  The fabric is very comfortable, however it prints really bad when you have anything in your pockets, or your underwear and pocket seams show when seated/pressed against your leg.  I've washed them several times and they've held up really well.  In spite of the minor issues I am pleased and will plan to buy again.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "20-Jul-18",
   nickName: "Nika",
   title: "beautiful, comfortable, but a little transparent.",
   body: "I love this dress, it looks beautiful putting it on. The fabric is not too thin not too thick, it's perfect for summer in my opinion. Only reason I gave it a 4 star is because it's a little transparent. I got the color white, and as you can see in the picture, you can see my bra. If you like this dress, maybe get another color unless you only wear white like me. Also, it is a little too long for me. I'm 5'1, and I have to take it to a tailor to fix it, but if you are taller than me, this should fit.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "22-Jul-15",
   nickName: "Kenny",
   title: "Good quality.",
   body: "I've had Haggar pants before and they were well made and lasted long despite my job requiring a fair amount of walking around the store at full time hours. Most pants I've had wear out in a few months but this brand lasted about a year and a half and that's only because the metal hook it had(not sure if it has a proper name)  broke and I decided not to fix it. This pair seems to be just as good of not better after a few months of use. This one does not use the button and hook combo but just a button.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Feb-19",
   nickName: "Mark E. Swope",
   title: "Beware of size descrepancies",
   body: "I bought 4 pairs of these pant at the same time. Two black and 2 blue. In each set I got one that was big enough that I had to wear a belt to keep them up, and 1 that was so tight on my waist that by days end you could not wait to get them off because you were in pain. I am not sure how 4 supposedly identical pairs could come with 2 that fit and 2 that don't. I will admit the ones that do fit I really like, but when you pay for 4 pair and really only get 2 pair there is a bit of disappointment there.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "7-May-19",
   nickName: "sueshire",
   title: "I love this dress!",
   body: "I am 5'9' and was worried this dress wouldn't be long enough. But the length is perfect, not too short nor dragging on the ground. It is stretchy enough that you can choose your size and be off a little and it will still fit. The comfort level is amazing. It's like wearing your favorite tee shirt. It washes beautifully, although I haven't dried it in the dryer yet. I don't want it to shrink. The label says to hang to dry, but I know eventually I will be tired of that and will just put it in the dryer.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "8-Aug-18",
   nickName: "TazandSteve",
   title: "Already ordered more colors...",
   body: "Love this dress! Bought two colors because of the stellar reviews and it did not disappoint. I especially love that it has the pockets on the side seam so they remain almost hidden, yet they can hold my cell phone (a Google pixel XL phone). I'm on the larger side, 5'6' and 180#, but a Large fit me perfectly because I'm small on top (38B) but my hips and bottom is where I store my extra fat. I've already ordered another color because you can't go wrong with an outfit that you can dress up or dress down.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Apr-18",
   nickName: "michelle sanders",
   title: "These dresses are the perfect length with my wedges - hits right at the ...",
   body: "I am 5 ft tall so it's very hard to find maxi dresses that don't need to be hemmed. These dresses are the perfect length with my wedges - hits right at the floor! (Which is the type of shoe I usually wear with the maxi dresses I do have) If I wanted to wear sandals I would have to make a little side knot to keep it from dragging. I have already ordered the dress in other colors - along with my height, I am about 140, size C/D in bras and I ordered a medium. It fits great at the top, not too tight or loose",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "5-Sep-15",
   nickName: "Clark",
   title: "Not for the athletic/formerly-athletic",
   body: "I would consider my body type to be 'formerly-athletic' I have a lot of muscle, but have added some other 'stuff' too since taking on a desk-job.I ordered the largest waist size and no complaints in the actual waist (I need a belt to hold them up), the legs are just not big enough to accommodate my thighs. They are quite uncomfortable to be honest.I am sure they are great pants for many, but I would AVOID these pants if you have muscular legs. The *cough* *cough* inseam could use a little more room too...",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "7-Jun-17",
   nickName: "Marie",
   title: "Good jeans, stretch out a bit quickly, sizing not consistent.",
   body: "I am 6'1 160lbs and ordered a 31 and a 30 - the 30 fit best. These are a little short on me, but my inseam is probably 34/35'. I really like these jeans but they do stretch out quickly. However, with a higher rise they do not fall down like other jeans when they stretch out.One note - sizing and fit do not seem consistent. I had purchased the same jeans from Macy's (for $15 more) and returned them after ordering these, however they did fit slightly differently, even though they were exactly the same jeans.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "5-Feb-17",
   nickName: "John Orton",
   title: "I have a little dog that sits on my lap while I'm driving how many time jumps in the car into my lap with wet and dirty feet lea",
   body: "These pants fit exactly as I was expecting.  In the past when I buy a 32 inch trouser length it's too long, and a 30 is too short.  But by Haggar making available a 31 inch length which is very seldom sold by other manufacturers it makes it fit exactly as I want without having to do any hemming. Thank you,  Hagger!  Also I notice the material is very stain resistant.  I have a little dog that sits on my lap while I'm driving how many time jumps in the car into my lap with wet and dirty feet leaving no stain.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Jan-19",
   nickName: "Jason M. Connors",
   title: "Took me a little getting used to, but I really like them now.",
   body: "Had to pick up some dress slacks for work, my waist having grown more than I'd like (38x32), I wanted something flattering that wouldn't be too tight across my backside nor have flared pockets - an all-too-common thing. I bought graphite and black. At first I tried them on and wasn't a fan, but I gave the black ones a week of wear to test them out and grew to love them. Week 2, I wore the graphite ones and I like them even more. It was a decent deal and I'd recommend them for anyone needing some dress trousers.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Jun-18",
   nickName: "AML",
   title: "This dress is worth buying! Soft, comfortable, and flattering",
   body: "I bought this dress in royal blue and I found the color to be true to the product photos.I ordered a small. At 5'8' and 135 lbs with a size 36B chest, the fit is just right in my chest, stomach and rear.  I think the medium would be a little too loose on me.The hem hits just below my ankle and works well with flats and sandals.The material is soft and comfortable and doesn't cling, although I recommend wearing it with a slip or seamless undergarments to prevent VPL.I'll order this dress in other colors for sure!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-May-16",
   nickName: "Paul w.",
   title: "Good pants",
   body: "I hate khaki's, and I hate ironing. Usually I find that khaki's are too tight and that I need to buy them a size larger than the jeans, sweats, or other pants I wear. As for ironing, well I think that speaks for itself. It's an annoying chore that conforms to an ancient convention that is just a time waster these days. Having said that, these pants actually fit very well and require very little if any ironing straight out of the dryer. I'll definitely look to this style and brand again when I need more work pants.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Aug-18",
   nickName: "indi",
   title: "I love the dress",
   body: "I'm 5'10, 160 lbs and based on advice from others on here I bought a size XL. I love the dress! The green color is slightly darker than shown but still very pretty. The pockets are a nice surprise too. The length is perfect for me to wear with flats - I don't wear heels so I'm not too worried about it not being long enough with heels. The material is a little thin and wrinkles easily but I purchased this for lounging around with friends, not to wear to some fancy event. I think I'll be going back to buy some more!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Mar-19",
   nickName: "Tim H",
   title: "Size  large is atypical and made for a VERY wide person.",
   body: "Received this for a christmas gift and never tried it on till yesterday as it was a large and what size I wear for shirts.  Opened the shirt yesterday and tried it on as we are headed south and thought I would take it with me.  I tried it on and is SO WIDE and short,  It is made for someone who is VERY WIDE and looks goofy on a normal body type.  I think I can fit my whole family in it.  Sad thing is now I can;t return it either.  It is as if this is some irregular made shirt and sold at high dollar amount. Beware.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "20-Jan-16",
   nickName: "AshU2010",
   title: "GREAT SHIRTS",
   body: "I purchased this shirt for my husband. It arrived quickly and was exactly what was described. Beautiful color shirt. These shirts tend to fit a little loose in our experience. My husband wears a large t-shirt and wears a medium in these shirts. The Columbia polo style he wears a large. These shirts are great wash and wear shirts. They are very low maintenance but look great! He always wears these fishing, outdoors and takes them on cruises with us. They are very comfortable and cool. The really seem to hold up well.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Sep-14",
   nickName: "Jay T.",
   title: "This is one hard-working hot-weather shirt. And it looks good.",
   body: "Son took this shirt to SE Asia, where he trekked across country and had to do his wash by hand. This shirt dried within minutes, he says, and even after getting caught in a monsoon, within half an hour he could put it back on. Looks good, too, incredibly cool and comfortable, and didn't wrinkle at all. Looked as good when he got home as it had when he took the tags off. It's expensive, but so well engineered and made that it's worth it if you're spending any time in a hot, humid climate. Much cooler than a tee-shirt.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "14-Feb-14",
   nickName: "taff",
   title: "Great shirt!",
   body: "I purchased these as a work/undershirt and have really liked them. They are very comfortable, seem durable so far (got my first one a few months ago), and look great. Hot or cold it does the job. Summer heat/sweat is were they shine though. They really do seem to dissipate your sweat over a greater area and keep you cooler than a cotton tee shirt. They are also more attractive under pressure (no blotchy sweat stains as with cotton tees - especially with dark colors like I prefer). They will be my 'go to' tee of choice.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Dec-18",
   nickName: "Nordstrom Customer",
   title: "Perfect fit!",
   body: "I'm 5'6'' and 135lbs.  I've realized my body just loves these Levi's Skinny Jeans.I go for 27 R and it fits great.  They allow me to stretch and move but stay fit wise well.  No stretching noted with the first few months noted on these.  I have noted some stretching in their cheaper (strauss?) brand in the past.  These originals I haven't noted that.The 'boombox' is a fun speckle look I got a bunch of comments on.  I bought the black recently as well.  I plan to gradually gather multiples from this levi brand and style!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Nov-18",
   nickName: "C. Kaufman",
   title: "Had a funky smell that is still there after three washes",
   body: "I don't really know how to rate this dress because while it was a nice fit and flattering, it smelled really awful.  Not your typical 'new clothes' smell but some sort of weird smell that I can't describe.  It kind of makes me worried about what sort of chemicals they used for the dye.  I thought one wash would get rid of it, but I have washed it at least three times now and let it hang to air out, and the smell is still noticeable.  I can't even return it now because of course I had to remove the tags, etc. to wash it.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "29-Jan-14",
   nickName: "Keith",
   title: "Good shirt",
   body: "I do not usually order clothes that under armour classifies as 'loose' fit so I was not familiar with the sizing. I am 6'2, 220 lbs and usually order XL, So I was surprised when this shirt arrived and i put it on and it was huge. Still a great shirt. Good quality and very comfortable. Other people have complained about the switch from 95/5 poly/cotton blend to 100% poly but honestly I am not sure it makes much difference. A nice comfortable tshirt either way. I went back and ordered another, size large and it fits great",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Dec-18",
   nickName: "kmthoennes",
   title: "Versatile",
   body: "During the month of December, I participated in something called Dressember where you wear a dress every day for the month to raise awareness and money to stop human trafficking. I was interested in having a longer dress for some of the chillier days and thought this dress would be a good option. I really like how it fits and because I ordered black it can be worn in so many different ways. I've worn it with a scarf, with a belt, with a knot tied at the bottom, with a cardigan, etc. It fits nicely and is very comfy, too.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "15-Nov-14",
   nickName: "Kylie",
   title: "Gift for dad and he loved it!",
   body: "I got one of these for my dad for Christmas. He is a fisherman and doesn't have any quality shirts like this. I listened to the other reviews and got a size smaller than he usually needs, and it fit him just fine. The fabric is really nice and light weight, with plenty big pockets. My dad loves his shirt and wears it maybe a little too much, haha. Every birthday or father's day, he asks me if I got him another shirt! I finally got him a few more! They are a great buy and I recommend them to anyone who is the outdoorsy type!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Mar-19",
   nickName: "WillWork4Shoes",
   title: "Great fit!",
   body: "As a petite woman,  it's really difficult to find cute maxi dresses. I am 4'11', 118lbs. I ordered the XS. I washed it before I wore it on the gentle cycle and low heat dried it I  the Dyer (you're supposed to air dry but I was hoping to shrink it slightly) . It's a really soft Jersey knit material.  Super comfy. It washed and dried well. It fits me perfect with wedge heels! If i wear it with flats. I'll probably have to knot the bottom, as it will be too long.  But i am super impressed with the style, fit, and quality! Yay!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Dec-17",
   nickName: "Nordstrom Customer",
   title: "Rustic woodland not true to size.",
   body: "The 711 skinny jeans have been one of the best jeans I've purchased. I usually get them at Macy's or Jc Penny but decided to get them here, a couple dollars cheaper. I purchased 2 colors and I must say the fitting is different depending the color.The rustic woodland color has no stretch at all so it's not true to size, I recommend going one size up for that specific color. It says they are midsize, which it's not, more like a low rise. They fit, I just prefer for my jeans to have some kind of stretch to feel more comfortable.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "13-Aug-17",
   nickName: "M. Wyatt",
   title: "My Perfect Jean",
   body: "My perfect jean.  I am 5'6' and have kindof short legs for my height, a big butt and a smaller waist.  Normally, jeans that fit my butt are way too baggy in the legs and/or waist, or jeans that fit my waist and legs squish my butt flat :/.  These have a great mid-rise that fits snugly but not too tight, and is a true skinny jean WITH room in the butt.  Great amount of stretch, and the distressed washes (I have two different ones) are done well enough that I don't just end up ripping them more like some other styles I've gotten.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Jul-18",
   nickName: "Electric Eclectic",
   title: "Cool shirt",
   body: "I am giving the shirt 4 instead of 5 stars strictly on the basis of looks.  I am not a fan of the shoulder flap (or whatever it is called) on the back.  These shirts are comfortable.  I ordered an XL (44 inch chest and around an honest 37 or so inch waist) and returned for a Large.  I would also prefer that the tails of the shirt were more tapered and were cut to be flat at the bottom.  But overall, a comfortable casual shirt for high weather.  Certainly cooler than most other shirts.  So 5 stars for function and 3 for fashion.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Dec-18",
   nickName: "henrietta",
   title: "Fav Go to Skinnies!",
   body: "I own Three pair all in different colors. Fav jeans hands down! I used to wear American Eagle (for years!) and since the fabric has changed there I switched to Levi’s! The fit is better, they don’t stretch or sag after an hour and I do not have to constantly pull them up! Love these! Also just for info. I take a size 29, with a 30 inseam. Even the Levi’s site suggests a size 30/32 but by my measurements I sized Down and they fit perfectly not too tight as I was afraid of! Also I’m 45, no junior shaped body here for reference lol",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Mar-19",
   nickName: "EssentialDarkness",
   title: "Effortlessly Comfortable",
   body: "Purchased this dress in an XL(normally I purchase a 2xl when buying on amazing but I got this in my normal size)Color: Acid BlueHeight 5'5Measurements 40C , 42 waist. Round tummy/plush thighs/plump backside.Pants size: 16Tops: l to xl (depending on material)Fit was great, soft material, stretchy and luv the pockets.Wrinkles fell out with a low heat ironDress is thin and you will need undergarments and shapewear if you dont want it to be to clingy.I reviewed mine in heels and it was still hitting the floor.Coming back for more.  Buy the dress",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-May-18",
   nickName: "Customer62",
   title: "I was pleasantly surprised and I love love this dress",
   body: "I am very wary of ordering clothes online and I honestly did not expect this to fit (that's the experience talking)!!  I was pleasantly surprised and I love love this dress.  I wear it to work, BBQ's, shopping etc.  Very comfortable fabric and yes, the top is a little see through but as I bought the navy dress, a black bra fixed that issue!  I have had so many compliments and this dress hides a multitude of sins!!  Love it, and will definitely buy more colors.  I am 5ft 6 and it is the perfect length on me - I got the x large and it is perfect.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Sep-14",
   nickName: "John Dinger",
   title: "Columbia Bahama II Shirt",
   body: "My second Columbia shirt and really like it. I only use them for kayaking and find them very comfortable and quick drying. Made a mistake on the second shirt and ordered a large instead of medium. If you happen to be a size 40 suit jacket you will find the medium is a very good fit. In all my other regular shirts I usually buy large because I like a looser fit, but the Columbia is perfect in medium.The material takes a lot of punishment and sometimes after a trip I think 'well, I trashed it this time', but it comes out of the wash as good as new.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Nov-15",
   nickName: "Brad44090",
   title: "Best value you will find!",
   body: "I was iffy on buying these without trying them on, but I'm so happy I did. These are the most comfortable dress pants that I have ever owned. The quality is fantastic, they have a front permacrease already installed, wrinkle free, and the stretch waist makes buttoning them so quick and easy! If these were $90, I would still buy them and be happy!The only thing I would say is they are a tad on the long side of your measurement. I am a 31' length, so I would go with 30' on these, rather than 32'.Worth every penny, and you will be so happy with them!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Aug-18",
   nickName: "jeans",
   title: "Casually dressy, well made",
   body: "Love the ease, comfort & style of this dress.  I am 5'8', 145 and usually wear between a Medium & Large.  I ordered a large and it fits perfect, a Med would probably have been a tad snug.  So easy to dress up for the office and I received several compliments on this dress  Wore slightly heeled wedge sandals, no problem with the dress on the floor, but I am tall.  The hunter green is a gorgeous shade and is definitely NOT see through.  I would say your best bet is to stay with the darker colors.  It really is a great dress and I may get more colors!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Jun-15",
   nickName: "Merigold Savior",
   title: "Great product",
   body: "I work out in fields as a consultant and these shirts are perfect. It normally gets around 95 everyday in my area but always feels 104-108 with the humidity. These shirts are so cool and comfortable that it is almost like you don't even have a shirt on. I also like how water just seems to beed off these shirts if it rains. Great product and some say get a smaller size, but in my experience this shirt fits true to size. I think some people are confusing the Bahamas Columbia shirt with the bonehead Columbia shirts which are one size bigger than label.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Aug-17",
   nickName: "Roland W. Tollett",
   title: "Nice light weight shirt for boating and everyday wear",
   body: "Great shirt overall; mustard color looks nice.  I normally wear an XL, but went with a Large.  Plenty of sleeve length and room in the mid-section.  It's a little tight under my arms.  I could use a little more length, but didn't want to pay more for the L-tall.  I'm 6'3' 210lbs for reference.There are 3 obnoxious scratchy tags on the inside of the shirt at the belt line, 2 of which are heavy duty and about 2' long.  Why I ask?  These tags are not easy to remove. Stupid, but shirt is worth this inconvenience I guess.  Great for hot days in the south..",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Apr-19",
   nickName: "Nordstrom Customer",
   title: "Cute dress!!",
   body: "The only reason I didn’t give 5 stars is because I am short and dresses like this are never offered in petite for us!! I am 5’3” about 145 and carry weight around my mid section. I purchased a medium and it’s perfect, other than the length but I expected that. I got the gray, pink, black, mint colored pattern and it’s much prettier in person! The fabric is a thick, slinky, stretchy kind. Soft and not too clingy. The pattern helps hide the areas I don’t like so I would worry about buying a solid color, but I would buy it again if offered in a cute print!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "17-Jan-19",
   nickName: "Pauline",
   title: "Love love love!",
   body: "Love love love this pair of jeans. I received it today and I am happy with the purchase. I am 5'4' and 165 to 170 lbs and I ordered the Holiday Fun size 32 Regular . The colour is so beautiful and it fits great, the material is really nice too. I think I could have gotten away with a size 31 which is a size 12 Medium. to get a snugger fit, so I ordered 4 more pairs in different colours including this colour again lol.UPDATE: l bought the other colours in size 31 including the Holiday fun and they fit even better! I have decided to give the size 32 to my daughter.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Apr-19",
   nickName: "Bridget",
   title: "comfy and FLATTERING!",
   body: "I'm about 5'6', 130lbs and ordered a size small. I have a little lower belly 'pooch' that some dresses tend to highlight. This one is so flattering because of where the waistband hits. Plus I LOVE the pockets. Gives it such a cool, casual, instagram vibe ;) The length was also ideal for me. I like my maxi dresses to basically skim the ground, and this one was ALMOST there. I will most likely be ordering a few more of this dress in different colors/patterns. You can't beat the price on a dress that offers so much softness, stretch, flattering fit and overall style!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Jan-19",
   nickName: "Cagilbert04",
   title: "I purchased these three times!",
   body: "I purchased these jeans three times- my first pair was too small, although it is the standard size I buy. Like waaaay too small, so I ordered up two sizes, no big deal. It's just a label. Those pants were literally falling off. The next size down, which was only one size larger than the initial pair, fit fine-ish. They were more boyfriend fit, not skinny. They did not hold their shape after washing them. Thank goodness for nordstrom, because this trial and error has been a real pain, although when  I purchase from the Levi's store, I don't seem to have the fit issues.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "22-May-17",
   nickName: "Allen",
   title: "These jeans fit pretty much like the ones that I bought at the ...",
   body: "These jeans fit pretty much like the ones that I bought at the Levi store. The back brown rectangle Levi's tag feels like paper instead of leather, and the fabric seems a little bit thinner, but they have a good amount of stretch and great coverage in the back. I love the fact that I can find the short length jeans.  These ones are not quite as short as the ones that I bought at the Levi store though. I still have to roll them up at the bottom, even though they are a short and I am 5'4'. I have worn them multiple times and they have not gotten stretched out. Very happy :-)",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "10-Jul-18",
   nickName: "Lucas Costigan",
   title: "STINKS!!!! Do not buy!!!",
   body: "This dress STINKS!!! It smells mechanical, or like oil, if that makes sense. Pretty much walk into a mechanic’s garage and take a deep breath, that is this dress!!! And it came with a stain on it which I had dry cleaned out, hoping that was the source of the smell. Nope. So then I bagged it with baking soda for three days, and washed it with a heavy amount of vinegar and Tide Pods... nope!! There is no hope. And since I’ve washed it, I obviously cannot return it. Total waste. I WISH I had seen these 1 star reviews before I bought it! Will never buy again from this company.",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "9-Jul-15",
   nickName: "NHRICK",
   title: "Goodbye Monkey Butt !",
   body: "Too bad I can only give these Haggar pants 5 stars.  They look smart, are comfortable fitting, and will exceed any expectations you have for a dress pant.  Cool?  You won't believe it.  I have worn these black pants directly from work to the golf course in August and they still kept me comfortable.  I recently had to replace several pairs that I have been wearing to work, 5  days a week, for 4 years.  Much use and untold washings have taken their toll...they just don't look as sharp. Still fine for casual wear and on the golf course.BUY THESE PANTS !  You'll be glad you did.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-Aug-18",
   nickName: "BlackKeys",
   title: "Perfect Dress for Shorter Ladies Too",
   body: "I am about 5'2' and 110 lbs so I ordered an XS. It fits perfectly! For someone at my height, floor length dresses of any kind are hard to come by that won't need any hemming or adjusting to them. I was so thrilled when I put on this dress WITH a pair of wedge sandals and the bottom of the dress fell about half an inch above the floor. The fabric is SO soft and comfortable against my skin and the color (the dark green) looked exactly what I was hoping it looked like. It's a perfect look for any casual setting and it even has pockets!!! A total win at a pretty inexpensive price.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "5-May-19",
   nickName: "Peashy",
   title: "Reallllly comfortable",
   body: "Love this dress and am going to purchase more in different colors. I receive so many compliments when I wear this, and once people see me with my hands in the pockets they always ask where they can get this dress also. Highly recommend!  Only thing I wish could be better was for it to be just an inch shorter. I’m 5’4” and the dress it just long enough to where it i almost trip in it... it hits the floor exactly. This is good news to all you taller ladies though!  It should be plenty long for taller ladies also. If you are 5’4 or shorter wear shoes or short heals for the perfect length.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Feb-19",
   nickName: "Roger Lyons sr.",
   title: "No iron",
   body: "these Haggar Men's Cool 18 Hidden Expandable-Waist Plain-Front Pant it tells me it is NO iron pants  well these pants had every deep wrinkles in it  from where they were packaged form factor they were made at it every deep wrinkles had to take a tile damping it put over the pants I hope this will take out the wrinkles and where they had set on shelf that  and wrinkles were dirty had to wash them to get the dirt stan out of them I got another pair which was VERY GOOD but these gray one still not sure of yet will add more later to this post but love the name brand that is all I have worn",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "14-Apr-18",
   nickName: "Ryan",
   title: "best office pants I have ever owned",
   body: "I am a real person leaving this review, I am not a spammer bot or anything. I rarely leave reviews but I am leaving this review in hopes that Haggar never discontinues making these pants... because THEY ARE THE BEST! I would give it 11 stars if I could. No lie, they fit me perfectly, super low maintenance (I have never ironed, steamed, or dry cleaned them), the price is nice, and they look really really good. I take them out of the dryer then hang them and then when I wear them it looks like I had them dry cleaned and pressed professionally. I hope Haggar continues to make these forever!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Oct-14",
   nickName: "CrankWrench",
   title: "Cool, light weight, good fitting shirt that feels good",
   body: "I bought this for a vacation trip with the idea I'd use it for fishing eventually.  I like it so much now, I wear it to work on casual Friday.  The fit of the Medium is good for me, shoulders fit, body is loose but hangs well (I'm 5' 8' and 160 lbs on the lean side).  The thing I like most is the way if feels when I wear it, like there is no shirt at all.  It is remarkably cool to wear and the fabric feels soft.  I have some other technical shirts that are scratchy, not this one.  I've washed it 6 times by now and the color and shape are unchanged.  It's a very bright, light yellow color.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Feb-19",
   nickName: "Jaysen R.",
   title: "Essential dress",
   body: "This is an amazing dress. Very comfortable and versatile. Can be worn belted to give it a fun stylish look.Runs large. I’m 5’ 4” 115 pounds size 32D and got the xsmall. I thought it would be good for my daughter and I was going to use it to determine the right size for me. I ended up keeping it and wear a belt most of the time so it’s not baggy.I bought my mom the extra large short sleeved dresses (she’s busty and larger and only 5’ 1”). She had to have it hemed because it was very long and dragged on the ground.I’m currently pregnant and it’s perfect.I wish I had this dress in every color.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "23-Jan-19",
   nickName: "Shawna",
   title: "Perfect fit!",
   body: "Buying pants is such a hideous task especially when you are a bit bigger of a girl. The back pant pockets are the main factor when I shop. Usually the bigger size you go the wider the back pockets are making your booty look far worse than you would ever imagine on yourself.BUT NOT THESE PANTS!! I got a size 33 (16 in normal sizing) and the back pockets are spaced quite flatteringly! The overall fit is great as well! The amount of stretch in these jeans is just right- keeping the jean look exactly that: jeans.I want more! Waiting to see more options than just this one in the size 33 y’all! ;)",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "7-Oct-15",
   nickName: "FishSlayer",
   title: "Love these shirts, will buy more when I can",
   body: "Great shirts for fishing or any other summer activity. I own five of them now and they are pretty much all I wear outside of work during short sleeve weather. I was apprehensive when I first bought them because previously I wore nothing but cotton, but these are just as soft and dry out much quicker than cotton. My nephew and I were out on the boat and both got soaked running across some chop, we stopped in a bay to dry out in the sun and my shirt (at twice the size of his) dried in about 10-15 minutes; his cotton t-shirt was still wet when were loading the boat on the trailer at the end of the day.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Jul-15",
   nickName: "Adrianne",
   title: "Great pants!",
   body: "My husband loves these pants! Bought them for work (he's a restaurant manager), and they wear very comfortably, feel nice and soft, look professional and flattering, don't wrinkle or stain easily, have held up to multiple washings and still look new - overall great pants, especially for the price. The fit is perfect in the waist, the expandable waistband has just the right amount of give to be comfortable to move around in - and the length is a little longer than you'd expect for the measurements, which is good for his tall, slender build.  Will definitely be buying more of these pants in the future.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Jul-18",
   nickName: "Courtney King",
   title: "Perfect summer dress!",
   body: "I'm only 5'1, a little on the heavier side. I ordered an XL and it fits great! It's not too tight around the arms or anything like I was anticipating and being shorter, it's an awesome length! Doesn't drag on the ground like I also suspected it would. Light weight. I tried it on over a tank top I had on at the time and you could slightly see the tank top through the top of the dress, but not see through enough to be a problem. Pockets sit at a nice angle, so they don't bulge out and are barely noticeable. Great dress that could easily be dressed up or worn casually. Would definitely buy again! (ordered in black)",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "15-Apr-18",
   nickName: "KJR",
   title: "I have a pair of 711 Levi's in 27 short that I love. They are a true denim",
   body: "I am 5'4 and 130 lbs. I have a pair of 711 Levi's in 27 short that I love. They are a true denim. Wanting a lighter color I bought 'in btw the lines' in a 27 regular bc they didn't have short. I really liked the color but the regular was too long for me. It also was a way stretchier legging-ish material. Which if it doesn't lose its shape through the day is fine but I returned them so I don't know. Bc of the light color and the material I felt it showed cellulite... Maybe going up a size would help but I'm not sure. If they had a 27 short id be willing to rebuy and give it a try. But I didn't like the long length.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "1-Aug-14",
   nickName: "Hank",
   title: "A nice non-functional shirt",
   body: "Bahama II short sleeve shirt fits well and I like the color, but whoever designed the pockets was out to lunch.  Surprisingly, there is no dedicated space for a pen.  The main breast pockets are large and functional, but the additional smaller pockets are absolutely worthless for anything - they are practically sewn shut - both sides of each of these smaller pockets is sewn down tight.  No, sir, I will stick with the Columbia Bonehead shirts.  I just wish that the Commando color of the Bahama II was available in the Bonehead series.  I will neither buy another of these Bahama II shirts nor recommend them to anybody.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "11-Jan-16",
   nickName: "Mary B",
   title: "Fantastic pack & wear shirts!",
   body: "A little big on him, but he didn't want to return it or exchange it so I guess it's a winner.  The color is very handsome on any guy (right ladies?!).  The fabric is, I am told, extremely comfortable and breathable.  It has some wrinkle-resistance which makes it a really great shirt to pack for travel, or even wear it on a drive and still look neat and nice when you finally get out of the car.  He took it on a trip to Italy and judging by the photos, he wore it almost every day!  We will be getting more of these in lots of colors, we just might look at going down a size for the next batch.  These are really great shirts.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "24-Sep-15",
   nickName: "CoolShade",
   title: "Not bad at all.",
   body: "I ordered one pair only to test the fit.  I'm not small (sadly) but compared to another brand, this is a bit smaller.  It isn't enough to make me order the larger size, which I think would be too big.  I'm not a fan of the 'too small suit' look currently popular.  Also, I have worn them but once and they have not been laundered, which may influence things a bit. I like the appearance and the feel, overall.  And yes, I can feel the 'cool' difference which might be important here in FL.  I will have to order a shorter length next time, but I think that's my issue, not a sizing issue.  And they are good enough to order again.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "26-Apr-19",
   nickName: "Yvo1234",
   title: "Worth buying",
   body: "The dress is a bit longer than I expected based on reviews. I bought an xl in black and l in grey purple. I really like them. I hand washed the black one and just put on a hanger to dry. I can’t soeak to how it would hold up in the washer. My theory is it looks really nice on and it’s cheap so why risk ruining it w the washer and dryer. For reference I’m 5 foot 5 and in my 9th month of pregnancy at 217 lbs. it looks really cute on but I wear a belly support under it to keep everything in around my hips etc. I’m pleased with it. I would def recommend. I only took one star off for length but for the money it’s well worth it.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "3-Jul-18",
   nickName: "anonymous",
   title: "Soft and comfortable and fits perfect!!!!",
   body: "Ordered my dress over the weekend and it arrived today! Tried it on as soon as I received the package to ensure that it fit right and it did! I Ordered a medium which is usually my size and I'm glad I did. I did not go by the size chart for the bust size. The dress fits just right and not too snug nor too roomy. I like the feel, it feels really soft and comfortable. You want throw on a long necklace with some wedges to dress it up or wear it as is with some flats or sandals for a casual look. I really like the pockets too! I ordered in two colors black and green. Pictured is me wearing the black. I'm still awaiting the green.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Aug-18",
   nickName: "Brittany",
   title: "It fits pretty well and is comfortable",
   body: "This dress is okay. It fits pretty well and is comfortable, but the material is really thin. It doesn’t really matter for the bottom as it’s flowy, but it makes the top see-through. I don’t have a large chest, and you can easily see my bra through it, so I would imagine women with large chests would have a big problem. I am keeping it because the bottom is cute, and I can throw a cardigan over the top, or wear a matte nude bra and it’s not very noticible. The sleeves are not too tight, which I sometimes have a problem with in fitted tops. I am 5’ 4” 160, and the meadium was a good length and fit other than the top being sheer.",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "30-Oct-15",
   nickName: "Bill",
   title: "Solid Pant",
   body: "Great pants for the money. Fit exactly as expected. Was looking for a functional pant that fit well and is easy to care for (basically eliminate or easy to iron). Bought a sample, to try. Washed, dryed, ironed, still fit good. Best part is after the first iron (packaging creases/wrinkles), if you get out of dryer before it stops you can pretty much get away with not ironing anymore. If you do have to iron, it is much easier. Size accurate. Colors accurate.Only negative is some of them had thick nylon attaching the tag to the back pocket, leaving somewhat noticeable holes. Bought 12 pair, this happened on three. Maybe too picky,",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "22-Dec-15",
   nickName: "Gary Winters",
   title: "I love these pants!",
   body: "Over the years, my waist has gotten larger, and my length has gotten shorter. I love these pants - they fit well, they're comfortable, they clean up nice, and they are perfect for business travel. But this size (44x29) is hard to find in stores. Don't know why it took me so long to realize I could order them through nordstrom, but it did. So I ordered one pair as a canary and it arrived in a couple of days and was absolutely what I was looking for. Now I'm back to order three more colors. Price is more than reasonable, too, in my opinion. Yay! No more hunting through stacks of pants at the store looking for the one pair in my size!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "27-Jan-14",
   nickName: "cramseyio",
   title: "Great pants, might seem baggy if you are a slim person",
   body: "These pants are exactly what they say they are. They are made of a nice, durable fabric that feels good on the skin. They are very comfortable throughout the workday. My only complaint is that I wish they weren't as baggy on me. I am 6'3' 160 lbs, so fairly slim with smaller legs. These pants kind of make me feel like I am wearing pants that are too big, even though I'm not. They don't look excessively big, but could be a little slimmer in my opinion. Not a deal breaker, these are still one of the best pair of pants I own, and it will be tough to beat the price. When I buy another pair, however, I may try to find a slimmer pair.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "18-Oct-15",
   nickName: "Joseph C.",
   title: "Perfect everyday slacks, fits the same year after year",
   body: "My go-to slacks for day to day use.  I bought a couple pairs three years ago and they are STILL in the rotation!  Had too much turkey at Thanksgiving, well NO WORRIES because these pants will continue to deliver solid performance and fit!I can't say I notice the 'cool' feature, they are definitely breathable and very comfortable.  I can wear them all day and find it hard to convince myself to change into pajamas when I get home because these are just as comfortable!  I do admit that when I wear different slacks I am just not as cozy as I am when I wear these.Consistent, long lasting, and comfortable... what more could you ask for?",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "28-Mar-19",
   nickName: "Kay Ayim",
   title: "Comfy and has pockets!",
   body: "Really like this dress, but needed a cinch belt for the waist. It's not that it's too loose, but because of where the seam hits. Kind of emphasizes the belly a bit and looks like a maternity dress without the belt (don't need to start any rumors!!). That being said, it would actually make a fantastic maternity dress if you size up - super comfy and flowy, and like I said, POCKETS! Anyway, comfy and cute and fit pretty well (Medium - 5' 6', 155#, 34C). If you have a larger chest, you might want to size up, but then it may be just a little long. With this kind of dress, though, it probably doesn't matter if it's a little bit too big.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Jul-18",
   nickName: "john",
   title: "perfect for camouflaging the stomach!!!!!",
   body: "Love love love my dress!!! I got a XXL in Navy Blue and I'm 5'3' and 217lbs and it fit perfect. Anyone that carries all their weight in their tummy should get this dress. I'm very curvy and not that big up top but I've got a butt and a mommy stomach and it hides it clearly!!!! And the length is just grazing the floor with 2 in wedge on. I read tons and tons of reviews before ordering this so I know these reviews helps so I'm being totally honest. I'm very self consious cause I've gained a lot of weight after my 2nd baby and this dress makes me feel good!!!! I'm gunna buy more in the floral prints& the tank top one!!!! As many as I can!!!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Jun-13",
   nickName: "Cubby",
   title: "Nice Slacks",
   body: "I've had lots of Haggar pants over the years and have always found them to perform as expected.  Always fit and wear well.  Usually only have to replace them because of style changes from late '60's cut that would be snug on a No 2 pencil to flares that could have hidden clowns feet, but they always have something to fit the style as well as traditional cuts.  These fit well with the help of the expanding waist band.  Not too snug and still require a belt.  a good balance.  Material is good, cut is good.  They are well made.  Would have gotten the 5th star if they could make this extra 40lbs go away instead of just stretching to cover it.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "29-Mar-19",
   nickName: "Bob Sassafrass",
   title: "Fit as expected, pockets made me return it",
   body: "Cute and fit exactly as expected...I really liked the pattern and style and almost kept it just based on how cozy and comfortable it is! But I had to return because the pockets lay in such a way that it makes it look like I have saddlebags on my hips. Sad too because I love pockets! I think because I am thin it hit my frame in a way that looked less like 'concealing' and more like 'big hips.' I would recommmend it to folks who maybe already have 'extra to love.' The length was also great (I'm 5'7 and it hit just right not too long or short). I may try to find a style like this without pockets because I really did like it/want it to work for my body.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "29-Dec-15",
   nickName: "Bob M",
   title: "You Will Love Them. Fit Is PERFECT",
   body: "On Time Shipment! I'd always purchased from a 'large online clothing outfit.' In last year they screwed up everything and each pair had different fit.. Some so loose it was impossible to wear. I always ordered a custom length. The crotch on new ones was so long on them I had to have altered. In the end I just donated all to local Mission.I decided to order three different brands from nordstrom; Dickies, Dockers, and Haggar. Ordered exact size I needed and I AM EXTREMELY PLEASED WITH ALL THREE. They all fit perfectly!!!  I will have to have length tailored but worth it to have pants that look really good and most importantly  FIT. Oh, the quality is excellent...",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Aug-18",
   nickName: "Andrew Grogin",
   title: "Awesome shirt",
   body: "I'm so glad I read the reviews first before buying, the shirt is one size larger than normal, I'm 6'2' 200lbs and I bought a Medium and it fits perfect with room to spare, so trust me when I tell you to definitely order a size down, i tried the Large on in store and it looked like a tent on me so I'm happy with Medium for sure, Columbia PFG shirts are meant to be a LITTLE roomy on you for breathability, the shirt is definitely wide regardless of the size you get, my only minor complaint is that it wrinkles really bad so you'll have to iron it or throw it in the dryer for about 10-15 minutes to get the wrinkles out before wearing it, other than that great shirt!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Jun-14",
   nickName: "JM",
   title: "Decent pants for work/summertime.",
   body: "Reading other reviews, I can state:1. buttons are hard to do/undo, they should have used clasp/hooks2. pants are loose at the bottom, so be sure and get the right length - but I believe the loose factor comes in due to these being so thin and lightweight they aren't like cotton where you have some shrinkage and wrinkles, so these pants do extend longer even if the same size as other kinds - they do 'flop' around a little below the knee, but that is due to how thin they are3. they do feel lightweight and cool, but I haven't worn them in anything hotter than 80 degrees yet4. they do ride up a little when you sit5. I have washed them and didn't have any issues with wrinkling",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "3-Apr-19",
   nickName: "Josh",
   title: "Comfy maxi, can be used as maternity",
   body: "I love this dress. As my 4th trimester approached, my belly was getting bigger and bigger and maternity clothes were not comfortable anymore.  I cringed at having to buy more maternity clothes, knowing I'd never wear it again (this is my last pregnancy).  I decided to give this dress a shot, and I am so glad that I did.  It is so incredibly comfortable.  Feels like a nightgown.  I am 5 foot and with my baby bump, it just skims the floor with flats.  Once the baby is born, I will have to get it hemmed or wear with wedges.  I will be wearing this dress for months after the baby is born.  Will be a perfect postpartum dress and will order in multiple colors.  For the price, why not?",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "30-Apr-19",
   nickName: "Tracy CT",
   title: "Perfect Spring/Summer dress for any occasion!",
   body: "I absolutely love this dress!!! I wore it for my baby shower and got so many compliments on it! I plan to order another print soon.I’m 5’3” and normally wear a size 4. I have a small baby bump and haven’t gained weight anywhere else so size medium fit me (according to the size chart provided for my bust size). I ordered the white floral and the only down side is it’s kind of see-through. I didn’t worry about the top too much since I wore a nude bra with it. I just wore it with a short nude/beige half slip and it worked out perfectly! The plus to this soft, comfortable dress is that it has POCKETS!!!! It’s so hard to find a dress with pockets! Especially a maternity one! I love that!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Mar-19",
   nickName: "Remedy do da",
   title: "I ordered two because I love them",
   body: "I love these pants so much that I ordered two pair. My best friend loves them so much that she stole my first ones. Lol. They're my favorite 'a little more than casual' casual pants.I'm 5'9 and 130lbs. They fit me great.My best friend is 5'5 and 112lbs and they fit her great also? I dont know how. But these pants fit us both perfectly.Neither one of us have a butt though so idk how they'd fit on a person that does have a booty. They'd probably be uncomfortable on a big butt. But the world would thank you. (Bless tight pants on big bootys)They are built to fit your legs and butt tightly. If you dont want that then these arent for you. But I personally love the way they show off my legs.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "20-Nov-18",
   nickName: "Colt",
   title: "What's that smell?",
   body: "That was the first thing I thought when I received my package. It reeked of rubber tires. I opened it up and it was definitely coming from the jeans. I thought maybe it was from the nordstrom truck and immediately threw them into the washer. Two washes later, they still smell so heavily of rubber that I don't know if any washing will get it out. I thought maybe I was being hyper sensitive until my husband came up to me today while I was wearing them and asked why I smelled like plastic. Of course I can't return them now that I've washed them and worn them. Awful smell aside, they fit really well, but I don't really want to wear them and I'm hesitant to buy another pair because of this experience.",
   rating: 2,
   fit: 3
 },
 {
   createdAt: "14-Oct-18",
   nickName: "ALMO",
   title: "Came as Described and fit well.",
   body: "I recently bought these Levi jeans in black and was looking for some new white denim for the season. These came packaged folded nicely in the plastic sleeve inside a cardboard box with a few other items.  The first pic shows them as they looked before being opened and the 2nd is then laid out on the ugly carpet (sorry about the eye sore) but it shows the bright white of these pants. The last picture shows how the waist fit on me- I dont think they're too tight not too loose. I am often between a 24 and 25' so this skinny mid to high waist I chose the 25. They are a little long but or reference I'm only about 5'1' and 100lbs si it is expected I'll wear heels or get them altered.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "13-Jun-15",
   nickName: "drummers girl",
   title: "Good quality shirt.",
   body: "Good quality shirt. I thought all the Columbia shirts had the same fabric. Learned the hard way that some are 100% cotton and some are nylon. Glad my son did not notice that the black one I just got him was nylon. The polyester is better. The cotton is awful. They have the same na me on the three fabrics because the style is the same. So, if you want the better shirt look carefully for the fabric. The cotton, no matter what you do is wrinkled. Very hard to get the wrinkles out even when ironed. He will wear it out m on the boat...maybe. glad I got it on sale. The last one I got was black and has white buttons. I didn't think it would matter but it does. The black buttons would have looked much nicer.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "23-Apr-19",
   nickName: "JoeS",
   title: "Great dress for work and leisure!",
   body: "Love this dress because of soft, flowy fabric. Length is great and fits as expected. I’m 5’7 and don’t wear heels - just flats, 140 lbs pre-pregnancy, 170 lbs at 28 weeks pregnant. Around 24 weeks pregnant at about 160 lbs I ordered a Medium but it was too small in the bust and a little too snug around my hips/butt. I then ordered 2 more in Large, on solid color and one print. The print was a little larger and longer than the solid and thus a Medium in the print would probably work. The Large in the solid color is perfect even now at 170 lbs. If you’re larger than a C cup in the bust area I would recommend going a size up of your normal size.  The Medium should be fine for me once the baby weight is gone.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "28-Dec-18",
   nickName: "barbara basinger",
   title: "These are just amazing and awesome !",
   body: "Love Levi's! I have a bubble butt and small waist and these fit great. I'm 5ft 8, 145 lbs, size 27 waist.  I also have a 28 waist pair. Both look amazing (damage is done wash on both pairs) . Levi's always fit better after ive worn and washed them once; .the denim seems to 'remember' my shape after they've been worn. These look amazing on my butt and are an all around great pair of jeans.  I love that they feel heavier like traditional denim but fit close to the body.  These work great with boots too! I have curvy legs (slightly larger than average calves)  and am still able to wear socks with these jeans tucked into my tall uggs. I love these jeans so much. They fit similar to how my lucky brand and buckle brand jeans fit.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Mar-18",
   nickName: "Smith Joe",
   title: "Great Style & Fit",
   body: "I have 4 other Tamiami II short sleeve shirts that are always my go to. The material is great for hot weather. I am 6' 215lbs with an old man stomach, and the large fits like most XL shirts. I accidentally ordered this Bahama II and almost cancelled the order.  Glad now that I didn't cancel. The fit seems to be a bit more snug than the Tamiami II. The material is not quite as thin but still very nice and cool. I like the pocket flaps to give a bit different style at times. I always wear the shirt tail out, and it is plenty long for that. I did get the white so only time will tell how long it keeps its clean look. I would like to have another few colors of the Bahama II. No way to go wrong with Columbia brand. Thank you nordstrom for fast delivery.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Aug-18",
   nickName: "Kristy Logan",
   title: "A must have for your closet!!",
   body: "Just received this dress and I love it!! I bought the XXL because I normally wear a 16-18. It was a little snug in the top but I’m big breasted so if I wear a sports bra it will be fine. Love the navy blue color. It looks better than the picture. The length is perfect to wear flats or wedges. It just barely hits the floor. Very well made and not see through at all. Material is a little heavy but airy enough that it won’t be too hot for summers in Florida. Planning on wearing this for date night with the hubster. Would definitely recommend to anyone that is a little curvy and thick in the midsection like me. Will be buying more in other colors real soon! Such a great value as well. If you are on the fence about this dress DONT BE! It’s worth it.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-Nov-16",
   nickName: "smithmts",
   title: "Fit of Leg Roomy For Some, but Great Materials & Construction, TRUELY Wrinkle-Free",
   body: "I am really happy with these pants.  The material truly wrinkle-free and the they aren't so glossy that the look cheap.  I personally find that synthetics are much more comfortable to wear, and was AMAZED by how much better these felt than the cotton Nordstrom dress pants I switched from.I really like that this product comes in multiple colors, and am really happy with the black and taupe.My one criticism is the cut of the leg.  Its a classic cut which is roomy, but also just a tad frumpy.  If they had a slim fit version of the Cool 18 I would definately by those.  However my happiness with the material and construction is enough to outweigh that.  I'm currently wearing them as is and would consider taking them to a tailor to get the legs altered.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "12-Oct-13",
   nickName: "Mathew",
   title: "Great travel shirt",
   body: "I must thank all the other reviewers for warning that this shirt fits large. I bought a size down from my usual and it fit well.The Bahama shirt looks and fit very similar to the Bonehead and the Tamiami. However, the material for all 3 shirts are rather different. The Bonehead is cotton, the Bahama and the Tamiami are both synthetic type material which have different UV protection abilities. I must say that I like the Tamiami as it offers the best UV protection and has the nicest fabric of the 3. But this is subjective and many would prefer cotton. The Bahama has a different pocket deign from the Tamiami and again I personally prefer the Tamiami.It is a good shirt however and nordstrom offers a pretty competitive price for it. Happy overall with it.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "8-May-19",
   nickName: "MALINDA D MESSER",
   title: "These boots are not waterproof!",
   body: "I hike in wet conditions regularly, and needed a waterproof boot. These boots seemed to meet that need until a couple of weeks ago. I've only had the boots 4 months and now my feet get wet just walking through dewy grass! This is unacceptable! I paid way too much for these for them not to perform as advertised. Today I read all the one star reviews complaining of the same problem -- the boots are not waterproof. Wish I had read them before buying. I did just call nordstrom to complain and they are refunding my money, but now I have to find something other than Merrells to meet my needs. I have to start at the drawing board. This was my third pair of Merrells. I had always loved them, but no more! It is so hard to find quality merchandise anymore. Very disappointed!",
   rating: 1,
   fit: 3
 },
 {
   createdAt: "26-Aug-18",
   nickName: "Luna",
   title: "Beautiful casual dress.",
   body: "This dress is so nice! I am really loving it. The fabric is really thin, but it is not see through ( mind you, I got the black one ). It feels so nice on skin, and the dress is very comfortable. It also fits me perfectly, accentuating everything nice, and nicely hiding some 'flaws'. Perfect style for my shape. It has a nice flow and it's not clingy. It's a really beautiful casual dress.The dress had terrible stink to it when it arrived. I had to wash it three times to try to get rid of it. After the first wash, the whole washer stank of it. But at the end I managed to get rid of that terrible stink, and in the process I've learned that the dress washes really nicely, holds up well, and it didn't shrink, which was a huge concern. ( I washed it on delicate, and hung to dry. )",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "23-Aug-14",
   nickName: "Jean-Yves HERVE",
   title: "Good shirt, but color not faithfully represented",
   body: "I had been disappointed with my recent purchases of Columbia goods, but these shirts are really of high quality.  The material is very pleasant and air circulation is excellent, whether the shirt is worn tucked in the pants or over them.  The cut is definitely on the ample side, so the people who always order one size over their real one should be careful with this item.  The only thing I don't like much, and take a point off for (but wish I could take a half point off only), is that the color is not as it appears on the web site.  I had ordered the 'Capri' and the 'Bright Peach' colors.  Both shirts are a lot more vivid in reality than I expected/hoped.  Furthermore, the 'Capri' is much more blue (no hint of green at all on the real shirt) that what is pictured on the site.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "1-May-19",
   nickName: "Candice",
   title: "Great dress, very pretty color",
   body: "Bought in the purple/grey first to test out sizing and it's so pretty! Very comfy dress, and definitely something that will fit nicely whether you're pregnant or not, so I like that I'll be able to keep wearing it. I bought a 2nd in one of the greens. Both gorgeous, LOVE the pockets (even my husband noticed and was excited for me!). Two things that knocked off the 1 star - not really the material or mfg fault but the material pilled up really easily around my belly when my dog jumped in my lap. Dog nails will do that but it was on my way to family Easter and I was a little bummed it happened so quickly. Also the dresses are a tad too short after washing. And I'm pretty short at 5'2' so I was surprised to see that. I still recommend - definitely economical option with beautiful colors!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "10-Apr-19",
   nickName: "Barbara",
   title: "Great maternity/postpartum dress!!!",
   body: "Love, love, love this dress!!! I purchased this dress at roughly 32 weeks pregnant (5’4” and 165 lbs at time of purchase) and I’m still wearing it super comfortably at 38 weeks (170 lbs now) pregnant. It’s so incredibly comfortable. The fabric is soft and lightweight. And, it’s the perfect length for me to wear with flats (tall ladies beware). I adore that this dress has pockets and doesn’t make me feel frumpy. My only complaint is that it doesn’t come in light colors (except white [which I won’t wear while 9 months pregnant] and that light purple/lavender color). Such a shame bc I’d love this dress in a pretty shade of coral or pink.  I’m also excited that I’ll be able to wear this dress postpartum. Albeit, it’ll probably be with some wedges (since I won’t have the giant belly lifting the fabric) but that’s fine with me.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Sep-18",
   nickName: "Jessica Tice",
   title: "Almost long enough for a 6’0 person",
   body: "I ordered 2 of these dresses, one in black and one in army green. I am 6’0 tall and I read some of the reviews that some taller women felt it was long enough, and knowing how hard it is to find a maxi long enough for me I gave it a shot. At 6’0 this dress hits right at the top of my ankle bone, and if you’re okay with that then it’s definitely long enough. The material itself is very soft and doesn’t feel too thin, however, I was wearing a white bra while trying it on and I could see it peeking through a little (nothing a black or nude bra couldn’t fix). The pockets are an added bonus and they blend with the dress well! Everything about this dress I love except for it hitting at the ankle on me, it doesn’t look bad, I just like things skimming the floor. I still think I might keep the black and tie it in a knot at the side.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "27-Mar-19",
   nickName: "Denise Brown",
   title: "TBH...",
   body: "I WAS very skeptical about buying this dress. I am 5'9' and 150lbs, I am a weird tall but not really... I got a medium per the sizing chart and the other reviews/pictures. Normally dresses made for tall women are too long and regular dresses are too short. I needed a long dress FAST for my bridal shower since my first pick wasn't going to work. This dress surprised me! It's not too thin that you can see through it, but thin enough to keep you comfy in Texas heat (YES IT'S ALREADY HOT YALL!). The pockets are well placed and my phone doesn't weigh down the dress. The waist gathering falls just below my bust and is very flattering. I can see myself getting more uses out of this dress in the years to come. If you're on the fence about getting this dress, just do it! It's a great Spring/Summer dress and can be dressed up or down.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Oct-17",
   nickName: "JR",
   title: "Fantastic jeans. Yay!!!",
   body: "I am unexpectedly impressed. I got off ADD medication a few months ago and then broke a rib and couldn't work out, so I have gained like 15lbs and none of my fahhhncy jeans fit me right now. I finally faced the fact that had to buy new jeans if I wanted to breathe and be sans muffin top while I get back in shape. Well...these are amazing. They fit just like designer jeans, have the perfect amount of thickness and stretch to both lift my currently flabby backside and hide my cellulite. These will fit you well if you have a bigger booty with skinny-ish legs (my legs are shaped like carrots--no thigh gap, zero calves). I would compare the fit and feel to Paige Whitley, Rag & Bone Skinny, Mother The Looker, JBrand Skinny Leg. Also, if AG Angel or Joe's Honey fit you, these might be a good skinny option. True to designer jean size.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "19-Feb-19",
   nickName: "Rae",
   title: "IN LOVE",
   body: "Let’s talk about this maxi. I ordered the navy short sleeve in a size small and I am in LOVE. It fits true to size - I am normally a small in tops and dresses. I am 5’ 1” and the length is PERFECT! A negative for some, I’m sure, but I’m thrilled to death because it’s so hard for me to find dresses, especially maxis. Now let’s talk about the quality - it’s amazing!! The material is soft, thick, and very flattering...it hangs perfectly. It’s not see through at all, and it has POCKETS! The quality is so much nicer than the price suggests. I will say that I also ordered the sleeveless sunflower print maxi but returned it because the color wasn’t what I was expecting. It was still adorable, just not what I was looking for. Shipping was immediate and the return process was effortless. I am THRILLED, and will be purchasing more colors!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Mar-19",
   nickName: "Liam",
   title: "Yes to the slightly roomy sizes!",
   body: "Most want to know the size! I am 6 feet, 175 lbs., and always wear a large, 34-35 sleeve. I ordered a Large long sleeve and the sleeves fit perfect. The rest fits a bit big, in the shoulders and body. I then ordered this short sleeve in Medium. Fit is more typical of a large, as compared side by side along all my large shirts. I included pictures and measurements because they tell the truth, I wish more reviewers would also! If sleeve length is not an issue, the medium fits best if you normally wear a large, unless you want that extra room. Being slim and trim, the medium is still more roomier than my other large shirts. Medium body is 24.5', and large is 26' wide. Length from armpit to tail, med. 15.5', large is 16'. Shoulders from seam to seam is, med. 21.5' and large 22.5' The sleeve length of a long sleeve is 33.5. on a large.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "11-May-19",
   nickName: "M. C.",
   title: "Like Wearing Slippers...",
   body: "Seriously, these are comfortable right out of the box.  I've used them only twice so far, but didn't add any inserts or change anything and they felt like I was walking on a cloud -- especially as compared to my heavy Vasque boots.  I do think they run slightly short overall, but I hike in the Rocky Mountains, so how the boot works coming downhill is key.  People often buy boots that fit on the flat, then bang their toes on the front of the boot when coming down steep descents.  As it turns out, they didn't have a half size bigger than my normal size, so I had to order a full one and one half to two sizes larger than normal (I can wear two or three sizes depending on the shape of the shoe) and I think they're going to be perfect for those steep descents.  No more toe-bumping for me.  Overall, very comfy and I'd highly recommend them.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "1-May-19",
   nickName: "Ron",
   title: "Great pants, but a little longer than normal",
   body: "I normally order 32' length, but now I question everything about my life.  I was told in the Army that the length of my inseam was 32' and I believed 'them' so hard that I bought all of my pants as a 32' inseam all the way up until now.I got these wonderful Haggar pants in the mail, threw them on and felt like a kid wearing my dad's work pants playing pretend.  I was walking all over the hems no matter how well I pulled off a Steve Urkel look even though they fit right everywhere else.  I even found some other 32's I had lying around and they fit just fine with the hems right on my heels.Alas, I'm keeping them.  All 3 pairs I bought.  They're just too nice to return, so I'll get them hemmed for another $10 to $20 bucks each.  No big deal.  Specifically on these, though, you might think about buying an inch or so shorter than you normally would.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "2-May-19",
   nickName: "AshleyW",
   title: "This dress is the BOMB.com",
   body: "Ordered a Large - I'm 5'9 / 36DDD / 160lbs but have a small upper waist that I like to show off so I look somewhat thinner :) - and this dress does the trick! It's so slimming and flattering. The fabric is light & soft with a great flow to it. It's also somewhat strectchy (so it fits the large bust area nicely & the floral print hides bra back fat...ya'll know what i'm talking about!!). For you taller gals out there....this is the perfect maxi length, so it could be a bit long for the shorter ladies. OH and it has pockets which is a huge plus, and they don't bulge out! I got the navy floral print and it's so dang cute! I've received an abundance of compliments. Side note - the 'shipping' wrinkles fall out very quickly. I'm ordering more of these dresses, so glad they offer different prints and a variety of solid colors! And can't beat the price!!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "29-Apr-13",
   nickName: "McNicholas",
   title: "I wish I ordered a medium because the large is like wearing a tent! Awesome shirt but Use caution in sizing!",
   body: "The shirt it's self  is well constructed. The stitching is strong and the cuts and contours are in the ideal locations allowing for full,range of movement without feeling like its pulling or tight, like under the arms whe stretching or reaching.The venting is fantastic ad does help with overall cooling.The ONLY drawback to this shirt is that it is way WAY t big for me.I'm not a small guy, but not a manatee either. I'm 6' and weigh 190 lbs and I am swimming in the large, to the point that I gave it away to one of my fat friends and when he tried it on it even looked big on him and he is about 2 of me!I don't know what kind of people run Columbia sportswear but they must be giants in stature.My opinion of the shirt sands however. I liked it so much (despite the fact that it came as a tent, hahaha) that I ordered another on, only this time in a medium s I can keep it.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Oct-17",
   nickName: "April",
   title: "Your new favorite black jeans",
   body: "Soft. Comfortable. Fierce af. These are the words that came to mind as soon as I tried on my new pair of Levi's.If you're not familiar with Levi's 711 jeans, they are basically your new favorite jeans. They're skinny enough to compliment your silhouette, but not too skinny where your pants are like a second skin. I have just about every pair of 711 jeans that they offer, but this black pair is by far my favorite.Some tips to get the most out of your Levi's: for the love of God, follow the care instructions on the tag! Wash cold with like colors. Because of the dye of this particular pair, wash by itself or with other black clothes because the dye is likely to transfer. I personally recommend a laundry detergent that specializes in keeping dark clothes dark. Line dry; do not add heat at all to keep your jeans looking just like they did when they came out of the package.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Jun-14",
   nickName: "Scott Bauer",
   title: "Great shirt, great price!",
   body: "I run between a size Large and Medium, depending on the shirt.  Even within the Columbia brand some shirts fit me better in a Large and some in a Medium.  Based on the other reviews of the shirts being too big, I ordered a Medium.  The shirt fits perfect.  I've washed it a few times since purchase, sometimes I've air dried it and other times I put it through the dryer.  I must say it comes out of the dryer very nice.  I have caught it just as the end of the cycle and removed it before it sat there with a chance to become wrinkled.I ordered the Bright Peach color and every time I wear it, I get a lot of compliments.  Highly recommend the Bahama II Shirt.  I also ordered the Tamiami II shirt and I like this shirt better. They both fit the same however the Bahama shirt has a tigher weave and comes closer to looking like a regular shirt (cotton) than the Tamiami shirt does.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "10-Aug-18",
   nickName: "Ravywedding",
   title: "Stupid Comfortable",
   body: "So I wanted a work appropriate dress that could conceal but also be worn during the later months of a pregnancy and one that wouldn’t end up in storage afterwards. This dress fits that and more! The waist is high enough that it drapes over any 1st trimester bumps but wouldn’t restrict a growing belly either. It feels so comfy and flowy...I feel like I’m wearing pjs to work! The color (I got blue) is bright and vibrant but since it is a jersey material, it wrinkles easy...not that I mind since my office is business casual and the wrinkles are resolved after a quick toss in the dryer.I definitely see myself wearing this year round...with thick tights and a cardigan when it’s cold and as-is during the warmer months. I wouldn’t count this as a formal dress, even with the blingest of jewelers because it’s  lack of embellishments and clearly casual material makes it very relaxed.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Dec-18",
   nickName: "armywife",
   title: "Great dress!",
   body: "This is my 2nd dress. It arrived before the full expected arrival date. It was well package. The material is very soft. It has some stretchy to it. I am 5' 7' and 190lbs, I ordered an XL. It fits as expected, except that it is much smaller in the chest/breast area than the standard US XL sizing. I am a 38D and it is pretty tight. If you are more endowed, I would heavily reconsider, your sizing needs. The fabric is not too thin, or too thick. I have dressed it up, and down. The colors are very nice. I also have the long sleeved version. The only real con I can find is the dresses are VERY long. I just tied a loose knot just under one knee, and that helped to be able to walk, without tripping on the dress. I don't always want to go out, with such a casual looking knot tied, in my dress... but, like I said, the only thing I can negatively say, about this dress. I just ordered another one!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "4-Aug-14",
   nickName: "Enchanted1s",
   title: "Big, bigger or biggest!",
   body: "I really like Columbia shirts, but the men's run SOOOOO big!  I prefer men's shirts because they are almost always cut longer in length and have bigger pockets than women's and I am pretty flat chested, so it has always been my preference.  I first ordered a size Small and it was HUGE!  I have a large chested friend that wears a size XL in the Women's Columbia Tamiami II shirts - the Men's Small Bahama was. Little big on her!  So, I returned the Small and exchanged it for an Extra Small - The XS was NOT much smaller than the small :(  I didn't have my friend try the XS, I just returned it.The shirt is great, if you can find your size.  I ended up ordering a women's small Bahama.  For a women's shirt, the length is longer and pockets bigger than most. Still had to knock off one star for the sizing.  nordstrom's return policy takes the stress out of online clothes shopping - just be sure you are buying from nordstrom if your not sure about your size.",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "1-May-19",
   nickName: "P. Rogers",
   title: "Really stinky!",
   body: "I was really excited to buy this dress based on the reviews. I am 5'0' and 110 pounds and went with the extra small based on reviews. Most of my fellow shorties said it fit them, so I was hopeful. When I got the dress, it was around 5-6 inches too long. I was pretty disappointed because I'd wanted to wear it for family photos that weekend. But my bigger concern was the smell. It arrived with an overwhelming burnt smell. Strong enough to make me cough! It smells like burnt plastic. I washed it, and the good news is that it shrunk up considerably-- it now perfectly fits my short legs! The bad news is that it still reeks. I've soaked it in Febreze and washed it two more times, and the stink is still there. It worked out for photos, because people can't smell it in a picture, but unfortunately, I can't wear it because the smell is so overwhelming. I'm sure this is a fluke, but be warned! It fits me fine in the chest, but is slightly see-through, so wear a nude bra or a tank top underneath!",
   rating: 3,
   fit: 3
 },
 {
   createdAt: "7-May-19",
   nickName: "Kas",
   title: "Very soft and comfy dress! Great for pregnancy",
   body: "I ordered this dress because I've long been in search of a long dress that will fit me right. I am 5'7' and I currently weigh 131 lbs (I'm usually somewhere between 127-132). I'm 12 weeks pregnant and this dress fits me perfectly at my normal weight, but it also has all the give to accommodate my belly once I get large. I ordered the LARGE and it doesn't feel huge on me but I love that it's not tight! (I could definitely have ordered a medium or possibly even small and had it fit if I weren't pregnant, but I like loose clothing).In these photos I am wearing a very lightweight wireless bra that makes me look much smaller than I am. With the pregnancy I'm currently a 34DDD (or 36DD) and the top looks fine with a regular underwire bra as well.The dress pattern is great because I hate when I feel like every little detail under a dress is showing, but I think the solid materials would be fine in this fabric also- it's not too thin.Basically I love everything about this dress and will be purchasing more in the future!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "9-May-17",
   nickName: "Max S.",
   title: "The fit is great. The paint is slightly odd, but I got over it.",
   body: "I have been getting the random colors of the 711 skinny jean.Depending on the color and the cotton content the sizing and stretch is completely different.These are nice in the Painted Clouds color.They stretch out a little so you can get the lower of the sizes rather than the higher (if it is high in the cotton, I will always size up in these.)The paint is not really paint, it is odd, it looks like I got splattered by milk or something and only on the front. If you really want to make it look painted, then you need to add some color paint to it. Maybe I will.Anyways, the fit is good, they take about 3-4 wearings to get too stretched out to look good. The waist does stretch out a little if necessary. The pockets are small as on most women's jeans that I have tried.I had these skinny jeans, the bootleg, and the straight in the same size to try on. These fit perfect, the bootleg was too small and the straight were HUGE. So you might need to vary your sizing if you are coming from those styles in Levi's.I really like them.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "21-Sep-18",
   nickName: "QueenA",
   title: "Good product overall!",
   body: "I ordered the black and navy blue short-sleeved dress and received them today. I am waiting on the black long-sleeved dress I ordered. I am 5’10.5” and I wear an XL or 16-18. This dress fit great. The elastic waist isn’t too tight and sits between my waist and my chest. The dress’s length is also perfect in that it sits on top of my feet but isnt long enough that I trip - I don’t like my ankles showing so this is a good length for me. Ladies who are shorter - this dress is VERY long.I gave this product 4 stars because of the fact that the dress is a bit see-through at the chest and I think this will be the case for large-chested women. I wear a size 38C. The bra I tried it on with was a nude color and lightly padded. In the right light you could see-through the chest and see my bra. You will definitely will want to wear a bra that matches your skin color. The same goes for your underwear as when I bent over I had the same issue.The material is very light, soft, and cool. The dresses are extremely comfortable to wear. I look forward to wearing these dresses!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "15-Feb-19",
   nickName: "Bonnie",
   title: "Soft, comfortable, thin material",
   body: "Pros: this dress is super comfortable, the fabric is soft, and the pockets were deep enough to hold a cell phone without worrying that it would fall out.Cons: the material is thin, like that of a thinner tee shirt you'd layer with. I'm smaller chested and don't always wear a bra, and when I wore this with no bra, my nip-nips were visible under the fabric in certain light. While I'd expect that with lighter colors, I bought the black dress. The material also feels like the sort that will eventually pill (just speculating here, though)... so I will make sure to wash this on delicate cycle.Overall, I'm giving this five stars since it's great for what it is; an inexpensive casual dress that could be dressier in a pinch if needed. It has pockets! And while I'd prefer slightly thicker material, this will be GREAT in the summer time. The fabric is breezy and not clingy at all. I see this is listed as a bestseller in maternity dresses; I'm not pregnant, nor did this make me look like I was. I'm 5'6', and the hem just skimmed the floor in my bare feet. I will be buying more of these.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "26-Feb-13",
   nickName: "Michael Logusz",
   title: "Finally!",
   body: "My hunt for Cool 18s has ended!! Sometimes these show up in warehouse stores for around 1/4 the price--but I liked these so much I ordered another pair here. I've also never seen brown ones anywhere else.These pants are very smooth and slick feeling, like jogging or track pants for work! They're lightweight, and have a stretchy waistband so if you order a 34 waist you could probably wear them as a 32 with a belt, a 34 with or without a belt and maybe a 36 without a belt--the stretch is that good. So it seems like the brown ones are dead-on in size.From what I've experienced and read in other reviews, the brown ones seem to run a tad smaller than the other colors--but still order whatever your normal pant waist size is--I found I wear the other colors normally with a belt, but the brown ones don't quiet need a belt: the stretchy waist is just enough to hold them up (if you have an office job sitting in a chair). They're not too tight, in fact with the stretch I could probably fatten up to a 36' waist and still wear them just fine.These pants are perfect for wearing on business casual days with a sweater or sport coat.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Nov-18",
   nickName: "guiltypleasure",
   title: "Buy them!",
   body: "Love. Like LOVE. I just ordered several more in different washes. I also got the 710 super skinny and they are great too. The 711’s are a super comfortable fit. I am a size 8 dress size but in these jeans I got a size 6 or 28. I’m 5’6, 136lbs. Hourglass figure but I suffer in the lack of booty area. If you have the same issue these are great. They make me look like I actually have a little  a$$. No baggy bootie!  I also have small calves. If you have a more athletic frame I would stick to the 711 rather than the 710. For reference the 710 is super fitted like leggings. Waist is slightly lower. 711 is comfortable skinny stretchy jeans. Waist is not constricting so no muffin top. My only issue with both of these jeans is I wish they had slightly deeper front pockets. They would lay a bit neater and more flat. That being said; my new “go to” jeans. That’s a lot considering my last is 9 years old & you can’t beat the price. Highly recommend. BTW when you first put on the 710 they will feel too tight. You have to shimmy in. After your in them for a few minutes they settle to your shape. Give them a minute before sizing up. The stretch is great.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "25-Oct-18",
   nickName: "TxLauren",
   title: "Different Colors, Different Fits!!",
   body: "I purchased oriole, hella shady, and little secret. All in 30. I usually get a 29 but I’ve heard they run small. The pair in hella shady is a much heavier denim that stretches out quickly, at least half a size. I love the thick, heavy denim and the stretching out wouldn’t be a problem if I’d known and had ordered a size down. Really love the color and the fit otherwise! The back pockets do seem to be slightly farther apart than on the other two pair which I think causes a persons rear to look a little wider than normal. Both the oriole and little secret are a slightly thinner denim with much more Lycra. They fit great. The waist is the only thing that stretches out and it’s very slight and doesn’t really bother me too much, the next size down was just a bit too tight across my hips so these are just perfect. The back pockets are positioned in a very flattering way. The legs don’t stretch out and look slouchy. I’m really, really glad I ordered these and I would highly recommend them. Just be aware that not all colors have the same Lycra content so the same size may fit very differently in different colors. Thank goodness for free returns!!",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "3-Oct-18",
   nickName: "Michelle Allen",
   title: "Take the plunge!",
   body: "For someone who hasn’t bought herself jeans in over three years due to mainly the sheer stress/hatred of the process of shopping for them, ordering a pair online and taking a shot in the dark after measuring myself (without any real clue what to do since my measurements don’t fit nicely into any one size)...I gotta say, I hit the jackpot on these!!For reference, I’m a 25 waist-36 hips-32.5 inseam; 5’5” and roughly 120ish lbs (I actually do not keep a scale in my house, so I’m not 100% sure) and went with the 25Wx30L and they are damn near perfection. At first when I saw them I didn’t think there was any way they were getting on my body. My feet were actually almost too big to go through the holes. They’re a bit tight through my calves especially and up through my legs, but perfectly fit my waist: no muffin top, no nothing. Also they’re still a little long, but I have that problem often and thusly am used to/enjoy cuffing them.I am plenty happy with them the way they are; had I gone up a size they’d fit my legs better, but would give me a lot of gapping in the waist, and that’s not at all what I would want. So all in all, I am extremely happy with my purchase and would absolutely recommend!",
   rating: 4,
   fit: 3
 },
 {
   createdAt: "24-Nov-18",
   nickName: "Ovrjoyd",
   title: "PERFECT!!! These jeans are magical!",
   body: "I cannot believe how good these jeans look and feel. After losing 30 pounds, I have probably gone way overboard by buying these jeans in almost every color and they have not disappointed me. I am 5'3' with a narrow slender build and an almost non existent rear end, but they somehow make me look shapely. Most of the  jeans I have tried cater to more curvaceous body types and are too generous in the thigh and rear area, which creates unflattering bulges in the back. Not these! THESE JEANS ARE MAGICAL!Pros:1. Extremely flattering.2. The fabric is velvety soft. Almost like a brushed microfiber.3. Extremely Comfortable.4. They look fresh all day without losing shape.5. They do not creep or slide down as the day wears on.6. The colors are rich and beautiful.7. Not too low or high in the waist. They fall right under my belly button. Just right!8. Reasonably priced.9. They are nice and tight all the way up the thigh.10. They do not create jagged looking zig zag leg ridges along the inseam.Cons:I can't think of any other than I wish they would stop making so many beautiful colors because I am buying way more jeans than I need. Every pair is so perfect I do not have the heart to return them. What if I gain weight? I think these 26 jeans would still fit even with an added 7-10 lbs, albeit with muffin top. Let's hope I don't have to find out.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Oct-17",
   nickName: "Oh-Well-Darn",
   title: "Great for warm weather travel and outdoor activities, but still look nice for casual occasions.",
   body: "Love these nylon shirts. Great for warm weather travel. Can be washed out by hand. They dry quickly if the weather isn't too humid, but will usually drive overnight even if somewhat humid. If you don't ring them out, hang them wet, and smooth out the fabric with your hands, they are quite presentable to wear without any ironing. The back yoke is vented.  Front breast pockets have Velcro to secure the flaps and drain holes in case you go in the drink. Button-down collar. So many colors to choose from too and I've received many complements from friends and strangers when wearing a pleasant bright color. The shirt's color will fade slightly after repeated washing, but you could minimize this by not machine washing. The slight fading is not a big deal in my opinion for a pastel casual travel shirt. Obviously, you won't have that issue with white or some of the very dark colors. These shirts are very light to pack and can be rolled and placed in packing cubes.  I'm hoping Columbia keeps making these for some time to come. Last word - these shirts run a bit large.  I usually like to purchase all my shirts in size 'Large' since I prefer my shirts a bit loose fitting, but in the case of these Bahama II shirts, I've order them in size Medium and they fit perfectly.. Still loose fitting, but not overly big.  I suggest ordering one size smaller than you usually wear.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "24-Jan-14",
   nickName: "G. Vozzo",
   title: "Great fit this time around! (Previously very baggy and too long.)",
   body: "I've ordered these pants in a 33x32 size three times in the past three years. Not because they wore out, but because a launderer ironed them too much. (They should only be ironed cool and carefully or not at all.) For some reason, each set of pants had a completely different cut, despite bearing the same style number. The first order in 2012 had an orange stripe inside the waist and, while a little baggy, were a perfect 32' length. The next order, one year later, yielded pants that were extremely baggy and nearly an inch too long. I tolerated them, but should have returned them right away. Given the great return policy with these, I decided to try again - this time ordering two. Both have the blue waist lining, but have a nice tapered cut that is not baggy at all - nor is it slim. It's exactly what I like. And the length is just about right, too. (Better a hair too long than too short.) There might be a difference in material, however. To me, the fabric (100% polyester) feels a bit rougher than previous generations. But I find nothing to complain about in this. If they hold up well, I'll keep buying them.The care instructions say to not use fabric softener or dryer sheets. However, these pants are not immune to static cling. I have found that dryer sheets, when necessary, are OK with these. (My black shirts, on the other hand, don't look so good.) But the best care is simply low-heat drying for 20-40 minutes - less time being better.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "22-Nov-17",
   nickName: "LittleLisa",
   title: "LOVE- more please!",
   body: "Love these! Fabrication is amazing- wish more jeans had the same fabric content (low cotton, high spandex) I will say that certain washes fit and look better than others (more flattering) I had high hopes for the dark “ready or not” and black washes, but returned them as they didn’t fit or look as nice as the “still dreaming” did. Please Levi’s make more of these jeans in dark (medium/dark/indigo) washes with detailing/aging similar to the “still dreaming”. Love these! For sizing help: I ordered the 24 (00) in all of these, all fit fine, but found that the two washes I returned were not quite as comfortable or looked as flattering) .  My measurements for helping with sizing: 32D bust, 24” waist, 34” high hip/not much booty, around butt/saddle bag area of thighs: 37.5”, 5’6” tall. (The 30” inseam works for this skinny style, but if it were straight or bootcut I’d need a longer inseam 32-34”, so people taller than me, be aware of this. Shorter people, these can be cuffed/rolled up as the inside of these jeans looks normal, not black like some similar fabrication blends are.) LOVE these, and so much more affordable than other luxury brands that carry similar styles of stretch jeans. LEVIS, more washes, inseams, and also think about detailing like tonal threads. (“Still dreaming” has me still dreaming about these jeans- lol sorry for the corniness, but seriously awesome jeans!) *also glad they use viscose/polyester instead of the trend for rayon, as they hold up much better with repeated wearing/washing and don’t develop thin or fuzzy spots like rayon blended jeans do.",
   rating: 5,
   fit: 3
 },
 {
   createdAt: "17-Jan-14",
   nickName: "P.K. Frary",
   title: "Great for travel, looks smart and easy to care for",
   body: "I take photo trips for 2 or 3 weeks at a time and dealing with clothing on top of my gear is a PITA. The Columbia Bahama helps me keep it simple: super lightweight and folds tiny, can be washed in hotel room sinks and dries fast. Plus it's comfortable, cool, not prone to wrinkles and rocks the safari look. I love the sage color but be forewarned it's similar to park ranger and zoo keeper attire. I was asked for park information a couple times while enjoying the California Redwoods! Next time around, I'll spring for the blue Bahama...The workmanship of this made in Vietnam shirt is excellent but, as other reviewers noted, runs at least one size too large. I'm 5'8' 140LBs with slim athletic build (biker/runner) and normally wear small. However, I bought extra small and it fits okay but is still oversized, sort of a 1980s tent shirt fit. I've been wearing Columbia jackets and shirts for years and most run a size large, so par for the course.I live in the tropics and the sun burns me through my t-shirt within 30 minutes. UV protection is excellent and I'm good for hours of shooting without a hint of redness. As for coolness, it's okay but not much better than a normal light cotton shirt. The nylon fabric is more prone to abrasion than cotton shirts: Cordura bags and daypack straps tend to 'sand' it if you walk around all day.Finally, as a photographer I find the large pockets useful for holding filters, memory cards, lens caps, etc. The velcro makes for quick one-handed access and the pockets expand enough to hold a small lens. All in all a great shirt for photographers, travelers and outdoorsmen.",
   rating: 5,
   fit: 3
 }
];

//4-7 reviews per item ==> 40-70 million reviews
let numReviews = Math.round((Math.random()*4) + 3);
//declare ID for each instance
let itemID = 1;

const insertSampleReviews = function() {
  let randReviews = getReviews();
  //reset the random number of reviews for the next run
  numReviews = Math.round((Math.random()*4) + 3);
  //increment the itemID for the next run
  itemID++;
  db.review.create(randReviews)
    .then(() => {})
    .catch(err => console.log("error seeding: ",err));
};

const getReviews = function() {
  let array = [];
  let copy = reviews.slice()
  for (var i=0; i < numReviews; i++) {
    //get a random index for the giant reviews array
    let randSplice = Math.floor(Math.random()*copy.length)

    //get a random review object from the reviews array
    var copyIdx = copy.splice(randSplice, 1)[0]

    //manipulate copyIdx for createdAt and fit
    //changing the date format to the date format mongoDB likes
    copyIdx.createdAt = copyIdx.createdAt.slice(0,copyIdx.createdAt.length-2)+"20"+copyIdx.createdAt.slice(copyIdx.createdAt.length-2)
    copyIdx.createdAt = new Date(copyIdx.createdAt).toISOString()

    //fit conditional
    if (copyIdx.rating === 5) {
      copyIdx.fit = 3
    } else if (copyIdx.rating <= 2) {
      if (Math.random > 0.5) {
        copyIdx.fit = 1
      } else {
        copyIdx.fit = 5
      }
    } else if (copyIdx.rating <= 4) {
      copyIdx.fit = Math.floor(Math.random()*3) + 2
    }
    //add the itemID to the object
    copyIdx.itemID = itemID;

    array.push(copyIdx)
  }
  return array;
}

// insertSampleReviews();

module.exports = {
   insertSampleReviews
}