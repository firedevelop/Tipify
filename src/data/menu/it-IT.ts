import type { MenuItem } from "../../types"

const menuDataIt: Record<string, MenuItem[]> = {
  pizzas: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.50,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
      description: "Pomodoro San Marzano, mozzarella fresca, basilico e olio extra vergine d'oliva."
    },
    {
      id: 2,
      name: "Pizza Prosciutto e Funghi",
      price: 14.00,
      image: "https://images.unsplash.com/photo-1548365328-8b849e6c7e07?auto=format&fit=crop&w=400&q=80",
      description: "Pomodoro, mozzarella, prosciutto cotto e funghi freschi."
    },
    {
      id: 3,
      name: "Pizza Diavola",
      price: 13.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Pomodoro, mozzarella, salame piccante e peperoncino."
    },
    {
      id: 4,
      name: "Pizza Quattro Formaggi",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, gorgonzola, provolone e parmigiano."
    },
    {
      id: 5,
      name: "Pizza Vegetariana",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Pomodoro, mozzarella e una selezione di verdure di stagione."
    },
    {
      id: 6,
      name: "Pizza Carbonara",
      price: 14.50,
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80",
      description: "Panna, mozzarella, pancetta, uovo e pepe nero."
    },
    {
      id: 7,
      name: "Pizza Capricciosa",
      price: 14.80,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
      description: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi e olive nere."
    },
    {
      id: 8,
      name: "Pizza Tonno e Cipolla",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Pomodoro, mozzarella, tonno e cipolla rossa."
    },
    {
      id: 9,
      name: "Pizza Bianca con Patate e Rosmarino",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, patate a fette sottili e rosmarino fresco."
    },
    {
      id: 10,
      name: "Calzone Classico",
      price: 13.80,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Pomodoro, mozzarella, prosciutto cotto e funghi, ripiegato e cotto al forno."
    }
  ],
  entrantes: [
    {
      id: 11,
      name: "Focaccia con Rosmarino e Sale",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Pane piatto cotto al forno con rosmarino e sale marino, ideale da condividere."
    },
    {
      id: 12,
      name: "Carpaccio di Vitello",
      price: 11.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Fettine sottili di vitello con rucola, parmigiano e salsa alla senape."
    },
    {
      id: 13,
      name: "Burrata con Pomodorini",
      price: 10.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Cremosa burrata fresca accompagnata da pomodorini e basilico."
    },
    {
      id: 14,
      name: "Tagliere di Salumi Italiani",
      price: 16.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Selezione dei migliori salumi italiani, come Prosciutto di Parma e Salame Milano."
    },
    {
      id: 15,
      name: "Arancini di Riso",
      price: 8.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Palle di riso ripiene di ragù e mozzarella, fritte fino a doratura."
    },
    {
      id: 16,
      name: "Insalata Caprese",
      price: 9.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Pomodoro, mozzarella di bufala, basilico fresco e olio extra vergine d'oliva."
    },
    {
      id: 17,
      name: "Provoleta al Forno",
      price: 9.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Formaggio provolone fuso al forno con origano e un filo d'olio."
    },
    {
      id: 18,
      name: "Patate Tartufate",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Patatine fritte con olio al tartufo e parmigiano grattugiato."
    },
    {
      id: 19,
      name: "Bruschetta Mista",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Pane tostato con diverse coperture: pomodoro e basilico, e patè di olive."
    },
    {
      id: 20,
      name: "Melanzane alla Parmigiana",
      price: 10.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Melanzane al forno con pomodoro, mozzarella e parmigiano."
    }
  ],
  bebidas: [
    {
      id: 21,
      name: "Acqua Minerale",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Acqua minerale naturale o frizzante."
    },
    {
      id: 22,
      name: "Bibita (Coca-Cola, Fanta, Sprite)",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      description: "Varietà di bibite popolari."
    },
    {
      id: 23,
      name: "Succo di Frutta Fresco (Arancia, Ananas, Mela)",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Succhi di frutta fresca appena spremuti."
    },
    {
      id: 24,
      name: "Limonata Fatta in Casa",
      price: 3.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Rinfrescante limonata naturale, fatta in casa."
    },
    {
      id: 25,
      name: "Tè Freddo (Limone, Pesca)",
      price: 3.20,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Tè freddo pronto da gustare, in diversi sapori."
    },
    {
      id: 26,
      name: "Caffè Espresso",
      price: 2.00,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
      description: "Caffè espresso italiano, intenso e aromatico."
    },
    {
      id: 27,
      name: "Cappuccino",
      price: 2.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Caffè con latte schiumato, perfetto per ogni momento."
    },
    {
      id: 28,
      name: "Latte Macchiato",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Latte caldo macchiato con un tocco di espresso."
    },
    {
      id: 29,
      name: "Cioccolata Calda",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Deliziosa cioccolata calda, cremosa e confortante."
    },
    {
      id: 30,
      name: "Frullato di Frutta (Fragola, Banana)",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Frullati rinfrescanti di frutta naturale."
    }
  ],
  postres: [
    {
      id: 31,
      name: "Tiramisù Classico",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Dessert tradizionale italiano con strati di savoiardi, caffè, mascarpone e cacao."
    },
    {
      id: 32,
      name: "Panna Cotta con Frutti di Bosco",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Dessert cremoso di panna con una salsa di frutti di bosco freschi."
    },
    {
      id: 33,
      name: "Cannoli Siciliani",
      price: 7.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Croccanti cialde di pasta fritta ripiene di ricotta dolce e frutta candita."
    },
    {
      id: 34,
      name: "Gelato Artigianale",
      price: 5.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Gelato artigianale italiano in vari gusti: vaniglia, cioccolato, pistacchio."
    },
    {
      id: 35,
      name: "Cheesecake all'Amarena",
      price: 6.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Cheesecake cremosa con amarene candite."
    },
    {
      id: 36,
      name: "Profiteroles al Cioccolato",
      price: 6.20,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Piccoli bignè di pasta choux ripieni di panna e coperti con salsa al cioccolato."
    },
    {
      id: 37,
      name: "Mousse al Cioccolato",
      price: 5.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Morbida e leggera mousse di cioccolato fondente."
    },
    {
      id: 38,
      name: "Frutta Fresca di Stagione",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Selezione di frutta fresca di stagione."
    },
    {
      id: 39,
      name: "Semifreddo al Torrone",
      price: 6.70,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Dessert gelato cremoso con pezzi di torrone."
    },
    {
      id: 40,
      name: "Affogato al Caffè",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Pallina di gelato alla vaniglia affogata in uno shot di espresso caldo."
    }
  ]
}

export default menuDataIt