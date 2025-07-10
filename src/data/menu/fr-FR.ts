import type { MenuItem } from "../../types"

const menuDataFr: Record<string, MenuItem[]> = {
  pizzas: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.50,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
      description: "Tomate San Marzano, mozzarella fraîche, basilic et huile d'olive extra vierge."
    },
    {
      id: 2,
      name: "Pizza Prosciutto e Funghi",
      price: 14.00,
      image: "https://images.unsplash.com/photo-1548365328-8b849e6c7e07?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, jambon cuit et champignons frais."
    },
    {
      id: 3,
      name: "Pizza Diavola",
      price: 13.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, salami piquant et piment."
    },
    {
      id: 4,
      name: "Pizza Quatre Fromages",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, gorgonzola, provolone et parmesan."
    },
    {
      id: 5,
      name: "Pizza Végétarienne",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella et une sélection de légumes de saison."
    },
    {
      id: 6,
      name: "Pizza Carbonara",
      price: 14.50,
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80",
      description: "Crème, mozzarella, bacon, œuf et poivre noir."
    },
    {
      id: 7,
      name: "Pizza Capricciosa",
      price: 14.80,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, jambon cuit, champignons, artichauts et olives noires."
    },
    {
      id: 8,
      name: "Pizza au Thon et Oignon",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, thon et oignon rouge."
    },
    {
      id: 9,
      name: "Pizza Blanche aux Pommes de Terre et Romarin",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, fines tranches de pommes de terre et romarin frais."
    },
    {
      id: 10,
      name: "Calzone Classique",
      price: 13.80,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, jambon cuit et champignons, plié et cuit au four."
    }
  ],
  entrantes: [
    {
      id: 11,
      name: "Focaccia au Romarin et au Sel",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Pain plat cuit au four avec du romarin et du sel de mer, idéal à partager."
    },
    {
      id: 12,
      name: "Carpaccio de Bœuf",
      price: 11.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Fines tranches de bœuf avec roquette, parmesan et sauce moutarde."
    },
    {
      id: 13,
      name: "Burrata avec Tomates Cerises",
      price: 10.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Burrata fraîche et crémeuse accompagnée de tomates cerises et de basilic."
    },
    {
      id: 14,
      name: "Planche de Charcuteries Italiennes",
      price: 16.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Sélection des meilleures charcuteries italiennes, comme le Prosciutto di Parma et le Salame Milano."
    },
    {
      id: 15,
      name: "Arancini de Riz",
      price: 8.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Boules de riz farcies de ragoût et de mozzarella, frites jusqu'à ce qu'elles soient dorées."
    },
    {
      id: 16,
      name: "Salade Caprese",
      price: 9.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella de bufflonne, basilic frais et huile d'olive extra vierge."
    },
    {
      id: 17,
      name: "Provoleta au Four",
      price: 9.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Fromage provolone fondu au four avec de l'origan et un filet d'huile."
    },
    {
      id: 18,
      name: "Frites à la Truffe",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Frites avec huile de truffe et parmesan râpé."
    },
    {
      id: 19,
      name: "Bruschetta Mixte",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Pain grillé avec différentes garnitures : tomate et basilic, et tapenade d'olives."
    },
    {
      id: 20,
      name: "Aubergines à la Parmigiana",
      price: 10.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Aubergines au four avec tomate, mozzarella et parmesan."
    }
  ],
  bebidas: [
    {
      id: 21,
      name: "Eau Minérale",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Eau minérale plate ou gazeuse."
    },
    {
      id: 22,
      name: "Boisson Gazeuse (Coca-Cola, Fanta, Sprite)",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      description: "Assortiment de boissons gazeuses populaires."
    },
    {
      id: 23,
      name: "Jus de Fruits Frais (Orange, Ananas, Pomme)",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Jus de fruits frais pressés."
    },
    {
      id: 24,
      name: "Limonade Maison",
      price: 3.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Limonade naturelle rafraîchissante, faite maison."
    },
    {
      id: 25,
      name: "Thé Glacé (Citron, Pêche)",
      price: 3.20,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Thé glacé prêt à rafraîchir, en différentes saveurs."
    },
    {
      id: 26,
      name: "Café Espresso",
      price: 2.00,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
      description: "Café espresso italien, intense et aromatique."
    },
    {
      id: 27,
      name: "Cappuccino",
      price: 2.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Café avec lait mousseux, parfait à tout moment."
    },
    {
      id: 28,
      name: "Latte Macchiato",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Lait chaud taché d'une touche d'espresso."
    },
    {
      id: 29,
      name: "Chocolat Chaud",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Délicieux chocolat chaud, crémeux et réconfortant."
    },
    {
      id: 30,
      name: "Smoothie aux Fruits (Fraise, Banane)",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Smoothies rafraîchissants aux fruits naturels."
    }
  ],
  postres: [
    {
      id: 31,
      name: "Tiramisù Classique",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Dessert italien traditionnel avec des couches de biscuits à la cuillère, café, mascarpone et cacao."
    },
    {
      id: 32,
      name: "Panna Cotta aux Fruits Rouges",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Dessert crémeux à la crème avec un coulis de fruits rouges frais."
    },
    {
      id: 33,
      name: "Cannoli Siciliens",
      price: 7.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tubes de pâte frite croustillants farcis de ricotta sucrée et de fruits confits."
    },
    {
      id: 34,
      name: "Glace Artisanale",
      price: 5.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Glace artisanale italienne en plusieurs parfums : vanille, chocolat, pistache."
    },
    {
      id: 35,
      name: "Cheesecake aux Cerises Amarena",
      price: 6.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Cheesecake crémeux avec des cerises Amarena confites."
    },
    {
      id: 36,
      name: "Profiteroles au Chocolat",
      price: 6.20,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Petits choux à la crème garnis de crème et recouverts de sauce au chocolat."
    },
    {
      id: 37,
      name: "Mousse au Chocolat",
      price: 5.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mousse au chocolat noir, douce et légère."
    },
    {
      id: 38,
      name: "Fruits Frais de Saison",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Sélection de fruits frais de saison."
    },
    {
      id: 39,
      name: "Semifreddo au Nougat",
      price: 6.70,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Dessert glacé crémeux avec des morceaux de nougat."
    },
    {
      id: 40,
      name: "Affogato al Caffè",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Boule de glace à la vanille noyée dans un shot d'espresso chaud."
    }
  ]
}

export default menuDataFr