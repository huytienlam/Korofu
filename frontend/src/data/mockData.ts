export const colors = [
  "bg-korofu-yellow",
  "bg-korofu-aqua",
  "bg-korofu-pink",
  "bg-korofu-dark-red",
  "bg-korofu-indigo",
  "bg-korofu-gold",
  "bg-korofu-orange",
  "bg-korofu-purple",
  "bg-korofu-beige",
  "bg-korofu-blue",
  "bg-korofu-green",
  "bg-korofu-light-red",
  "bg-korofu-light-yellow",
];

export interface Recipe {
  id: string;
  title: string;
  contributor: string;
  rating: number;
  imageUrl?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  rating: number;
  imageUrl?: string;
}

export interface Dish {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

// const dishes = [
//     {
//       title: "Thai Red Curry",
//       subtitle: "Curry paste, coconut milk, meat, Thai basil.",
//       imageUrl:
//         "https://takestwoeggs.com/wp-content/uploads/2025/03/Thai-Red-Curry-2.jpg",
//     },
//     {
//       title: "Ramen",
//       subtitle: "Broth, noodles, tare, egg, scallions.",
//       imageUrl:
//         "https://soomfoods.com/cdn/shop/articles/45_d115125d-8365-4865-af0e-5a8f42b577af_1600x.png?v=1750100505",
//     },
//     {
//       title: "Tacos",
//       subtitle: "Tortillas, meat, onion, cilantro, salsa.",
//       imageUrl:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDlBVCkK2SizG-nsiurP2phVkoYWRLxpsxw&s",
//     },
// ];

export const allDishes = [
  {
    id: "1",
    title: "Pizza",
    subtitle: "Crust, mozzarella cheese, tomato sauce.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
  },
  {
    id: "2",
    title: "Pasta",
    subtitle: "Pasta, sauce, meat, veggies, cheese.",
    imageUrl:
      "https://www.allrecipes.com/thmb/IrY572TXic4UXXVn8EetsarI3S0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-269500-creamy-garlic-pasta-Beauties-4x3-f404628aad2a435a9985b2cf764209b5.jpg",
  },
  {
    id: "3",
    title: "Fried Chicken",
    subtitle: "Chicken, batter.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI7uXAnhdOWJpu4Maf6a9yjc1RikPvL0nq_Q&s",
  },
  {
    id: "4",
    title: "Thai Red Curry",
    subtitle: "Curry paste, coconut milk, meat, Thai basil.",
    imageUrl:
      "https://takestwoeggs.com/wp-content/uploads/2025/03/Thai-Red-Curry-2.jpg",
  },
  {
    id: "5",
    title: "Ramen",
    subtitle: "Broth, noodles, tare, egg, scallions.",
    imageUrl:
      "https://soomfoods.com/cdn/shop/articles/45_d115125d-8365-4865-af0e-5a8f42b577af_1600x.png?v=1750100505",
  },
  {
    id: "6",
    title: "Tacos",
    subtitle: "Tortillas, meat, onion, cilantro, salsa.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDlBVCkK2SizG-nsiurP2phVkoYWRLxpsxw&s",
  },
];

export const mockPizzaRecipes: Recipe[] = [
  {
    id: "1",
    title: "Margherita Pizza",
    contributor: "Jeanine and Jack",
    rating: 5,
    imageUrl:
      "https://kristineskitchenblog.com/wp-content/uploads/2024/07/margherita-pizza-22-2.jpg",
  },
  {
    id: "2",
    title: "Hawaiian Pizza",
    contributor: "Tania",
    rating: 5,
    imageUrl:
      "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-03/hawaiian-pizza.jpg?itok=a1-_QjRA",
  },
  {
    id: "3",
    title: "Pepperoni Pizza",
    contributor: "Nick Evans",
    rating: 5,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugXpVRngY9P616NZ57jyx2kl-Xoq_DbC58A&s",
  },
  {
    id: "4",
    title: "Vegetarian Pizza",
    contributor: "Jeanine and Jack",
    rating: 5,
    imageUrl:
      "https://www.superhealthykids.com/wp-content/uploads/2021/10/best-veggie-pizza-featured-image-square-2.jpg",
  },
  {
    id: "5",
    title: "BBQ Chicken Pizza",
    contributor: "Sally McKenney",
    rating: 5,
    imageUrl:
      "https://kristineskitchenblog.com/wp-content/uploads/2025/05/bbq-chicken-pizza-09-2.jpg",
  },
  {
    id: "6",
    title: "Four Cheese Pizza",
    contributor: "Nicole Gaffney",
    rating: 5,
    imageUrl:
      "https://uk.ooni.com/cdn/shop/articles/FourCheese_Resized.jpg?crop=center&height=800&v=1598453116&width=800",
  },
];

export const mockPizzaRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Hut",
    location: "123 Main Street, Downtown",
    rating: 5,
    imageUrl:
      "https://gigamall.com.vn/data/2019/09/20/13434233_LOGO-PIZZA-HUT-500x500.jpg",
  },
  {
    id: "2",
    name: "Domino's Pizza",
    location: "456 Oak Avenue, Midtown",
    rating: 5,
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/16/de/b7/6a/logo-domino-s-pizza.jpg",
  },
  {
    id: "3",
    name: "The Pizza Company",
    location: "789 Pine Road, Uptown",
    rating: 5,
    imageUrl:
      "https://aeonmall-review-rikkei.cdn.vccloud.vn/public/wp/16/tenants/5pOGjpOy3GhcTQgcDoFIXDXjjKlP1Ne5OXK6e4bn.jpg",
  },
  {
    id: "4",
    name: "Pizza 4P's",
    location: "321 Elm Street, Westside",
    rating: 5,
    imageUrl:
      "https://meetup.vn/wp-content/uploads/2025/08/6348ededebfe4a1260653ab0_Before_Cafe-4Ps.jpg",
  },
  {
    id: "5",
    name: "Amano Pizza",
    location: "654 Maple Drive, Eastside",
    rating: 5,
    imageUrl:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/448877333_387107244357736_8047643299502919428_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=U0bhicY_YQ0Q7kNvwFsu_lm&_nc_oc=AdnhV1KJinsBLzKYUZ9Ne96uspx4BmDfXl7qo_a1NFKfEl8bpkDUO19b-0Y_H38uepk&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=lwcEeBsWHQfVcEPCnGcRhw&oh=00_AfWbfoB9hfTwmv5cqI1jrYnv6oZVytAi0Rek68mAPU_rBg&oe=68B545A0",
  },
  {
    id: "6",
    name: "Al Fresco's",
    location: "987 Cedar Lane, Northside",
    rating: 5,
    imageUrl:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/273491852_4141151982653895_7988575118117188339_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=05jmVTLjLg8Q7kNvwHB0q2g&_nc_oc=AdmHdL_OoDRksSFpfJukwbuzpSVYaVSKUyv33jbEPYtrj3vZflYyQncyv1rh4PBePLA&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=mGN63VgZ36CZA8tfFOu3pA&oh=00_AfX2FcETpch6wQ46cd9CJulAlntjnEBeZ8Ds6diTYGR1rA&oe=68B52DFE",
  },
];

export const mockPizzaDishes: Dish[] = [
  {
    id: "1",
    title: "Margherita Pizza",
    description: "Crust, mozzarella cheese, tomato sauce",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg",
  },
  {
    id: "2",
    title: "Calzone",
    description: "Dough, mozzarella cheese, tomato sauce, fillings",
    imageUrl:
      "https://product.hstatic.net/200000233543/product/calzone-pizza-recipe_1a27f44d75254f0c8d7456d7ad7a28c8.jpg",
  },
  {
    id: "3",
    title: "Focaccia",
    description: "Italian flatbread with olive oil and herbs",
    imageUrl:
      "https://urbanfarmandkitchen.com/wp-content/uploads/2024/08/focaccia-pizza-9.jpg",
  },
  {
    id: "4",
    title: "Deep Dish Pizza",
    description: "Thick crust, cheese, sauce, toppings",
    imageUrl:
      "https://dudethatcookz.com/wp-content/uploads/2018/01/DSC_1222-01.jpeg",
  },
  {
    id: "5",
    title: "Pide",
    description: "Turkish flatbread with various toppings",
    imageUrl:
      "https://cdn.sanity.io/images/p6oh2x2n/production/aff5c547cc3e8b69615008d63a856f4ae5ac39b8-1920x1080.jpg",
  },
  {
    id: "6",
    title: "Stromboli",
    description: "Rolled pizza dough with fillings",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJJFvPvAHFyiWgu4Z639oxleJKpOpw8R-iw&s",
  },
];
