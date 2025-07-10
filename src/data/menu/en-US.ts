import type { MenuItem } from "../../types"

const menuDataEn: Record<string, MenuItem[]> = {
  pizzas: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.50,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
      description: "San Marzano tomato, fresh mozzarella, basil, and extra virgin olive oil."
    },
    {
      id: 2,
      name: "Pizza Prosciutto e Funghi",
      price: 14.00,
      image: "https://images.unsplash.com/photo-1548365328-8b849e6c7e07?auto=format&fit=crop&w=400&q=80",
      description: "Tomato, mozzarella, cooked ham, and fresh mushrooms."
    },
    {
      id: 3,
      name: "Diavola Pizza",
      price: 13.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Tomato, mozzarella, spicy salami, and chili pepper."
    },
    {
      id: 4,
      name: "Four Cheese Pizza",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, gorgonzola, provolone, and parmesan."
    },
    {
      id: 5,
      name: "Vegetarian Pizza",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tomato, mozzarella, and a selection of seasonal vegetables."
    },
    {
      id: 6,
      name: "Carbonara Pizza",
      price: 14.50,
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80",
      description: "Cream, mozzarella, bacon, egg, and black pepper."
    },
    {
      id: 7,
      name: "Capricciosa Pizza",
      price: 14.80,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
      description: "Tomato, mozzarella, cooked ham, mushrooms, artichokes, and black olives."
    },
    {
      id: 8,
      name: "Tuna and Onion Pizza",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Tomato, mozzarella, tuna, and red onion."
    },
    {
      id: 9,
      name: "White Pizza with Potato and Rosemary",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, thinly sliced potatoes, and fresh rosemary."
    },
    {
      id: 10,
      name: "Classic Calzone",
      price: 13.80,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tomato, mozzarella, cooked ham, and mushrooms, folded and baked."
    }
  ],
  entrantes: [
    {
      id: 11,
      name: "Focaccia with Rosemary and Salt",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Flatbread baked with rosemary and sea salt, ideal for sharing."
    },
    {
      id: 12,
      name: "Beef Carpaccio",
      price: 11.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Thin slices of beef with arugula, parmesan, and mustard sauce."
    },
    {
      id: 13,
      name: "Burrata with Cherry Tomatoes",
      price: 10.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Creamy fresh burrata served with cherry tomatoes and basil."
    },
    {
      id: 14,
      name: "Italian Cured Meats Platter",
      price: 16.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Selection of the best Italian cured meats, such as Prosciutto di Parma and Salame Milano."
    },
    {
      id: 15,
      name: "Rice Arancini",
      price: 8.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Rice balls stuffed with ragù and mozzarella, fried until golden."
    },
    {
      id: 16,
      name: "Caprese Salad",
      price: 9.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Tomato, buffalo mozzarella, fresh basil, and extra virgin olive oil."
    },
    {
      id: 17,
      name: "Baked Provoleta",
      price: 9.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Melted provolone cheese baked with oregano and a drizzle of oil."
    },
    {
      id: 18,
      name: "Truffle Fries",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "French fries with truffle oil and grated parmesan."
    },
    {
      id: 19,
      name: "Mixed Bruschetta",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Toasted bread with different toppings: tomato and basil, and olive pâté."
    },
    {
      id: 20,
      name: "Eggplant Parmesan",
      price: 10.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Baked eggplant with tomato, mozzarella, and parmesan."
    }
  ],
  bebidas: [
    {
      id: 21,
      name: "Mineral Water",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Still or sparkling mineral water."
    },
    {
      id: 22,
      name: "Soft Drink (Coca-Cola, Fanta, Sprite)",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      description: "Variety of popular soft drinks."
    },
    {
      id: 23,
      name: "Fresh Juice (Orange, Pineapple, Apple)",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Freshly squeezed fruit juices."
    },
    {
      id: 24,
      name: "Homemade Lemonade",
      price: 3.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Refreshing natural lemonade, made in-house."
    },
    {
      id: 25,
      name: "Iced Tea (Lemon, Peach)",
      price: 3.20,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Iced tea ready to refresh, in different flavors."
    },
    {
      id: 26,
      name: "Espresso Coffee",
      price: 2.00,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
      description: "Italian espresso coffee, intense and aromatic."
    },
    {
      id: 27,
      name: "Cappuccino",
      price: 2.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Coffee with frothed milk, perfect for any time."
    },
    {
      id: 28,
      name: "Latte Macchiato",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Hot milk stained with a shot of espresso."
    },
    {
      id: 29,
      name: "Hot Chocolate",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Delicious hot chocolate, creamy and comforting."
    },
    {
      id: 30,
      name: "Fruit Smoothie (Strawberry, Banana)",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Refreshing natural fruit smoothies."
    }
  ],
  postres: [
    {
      id: 31,
      name: "Classic Tiramisu",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Traditional Italian dessert with layers of ladyfingers, coffee, mascarpone, and cocoa."
    },
    {
      id: 32,
      name: "Panna Cotta with Red Berries",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Creamy pudding with a fresh red berry sauce."
    },
    {
      id: 33,
      name: "Sicilian Cannoli",
      price: 7.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Crispy fried dough tubes filled with sweet ricotta and candied fruit."
    },
    {
      id: 34,
      name: "Artisanal Gelato",
      price: 5.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Artisanal Italian ice cream in various flavors: vanilla, chocolate, pistachio."
    },
    {
      id: 35,
      name: "Cheesecake with Amarena Cherries",
      price: 6.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Creamy cheesecake with candied Amarena cherries."
    },
    {
      id: 36,
      name: "Chocolate Profiteroles",
      price: 6.20,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Small choux pastry buns filled with cream and covered with chocolate sauce."
    },
    {
      id: 37,
      name: "Chocolate Mousse",
      price: 5.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Soft and light dark chocolate mousse."
    },
    {
      id: 38,
      name: "Fresh Seasonal Fruit",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "A selection of fresh seasonal fruits."
    },
    {
      id: 39,
      name: "Nougat Semifreddo",
      price: 6.70,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Creamy frozen dessert with pieces of nougat."
    },
    {
      id: 40,
      name: "Affogato al Caffè",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "A scoop of vanilla ice cream drowned in a shot of hot espresso."
    }
  ]
}

export default menuDataEn