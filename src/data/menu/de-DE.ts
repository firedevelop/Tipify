import type { MenuItem } from "../../types"

const menuDataDe: Record<string, MenuItem[]> = {
  pizzas: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.50,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
      description: "San-Marzano-Tomaten, frischer Mozzarella, Basilikum und natives Olivenöl extra."
    },
    {
      id: 2,
      name: "Pizza Prosciutto e Funghi",
      price: 14.00,
      image: "https://images.unsplash.com/photo-1548365328-8b849e6c7e07?auto=format&fit=crop&w=400&q=80",
      description: "Tomaten, Mozzarella, gekochter Schinken und frische Champignons."
    },
    {
      id: 3,
      name: "Pizza Diavola",
      price: 13.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Tomaten, Mozzarella, scharfe Salami und Chili."
    },
    {
      id: 4,
      name: "Pizza Quattro Formaggi",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, Gorgonzola, Provolone und Parmesan."
    },
    {
      id: 5,
      name: "Pizza Vegetariana",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tomaten, Mozzarella und eine Auswahl an saisonalem Gemüse."
    },
    {
      id: 6,
      name: "Pizza Carbonara",
      price: 14.50,
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80",
      description: "Sahne, Mozzarella, Speck, Ei und schwarzer Pfeffer."
    },
    {
      id: 7,
      name: "Pizza Capricciosa",
      price: 14.80,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
      description: "Tomaten, Mozzarella, gekochter Schinken, Champignons, Artischocken und schwarze Oliven."
    },
    {
      id: 8,
      name: "Pizza Tonno e Cipolla",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Tomaten, Mozzarella, Thunfisch und rote Zwiebeln."
    },
    {
      id: 9,
      name: "Pizza Bianca mit Kartoffeln und Rosmarin",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, dünne Kartoffelscheiben und frischer Rosmarin."
    },
    {
      id: 10,
      name: "Calzone Classico",
      price: 13.80,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tomaten, Mozzarella, gekochter Schinken und Champignons, gefaltet und gebacken."
    }
  ],
  entrantes: [
    {
      id: 11,
      name: "Focaccia mit Rosmarin und Salz",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Fladenbrot gebacken mit Rosmarin und Meersalz, ideal zum Teilen."
    },
    {
      id: 12,
      name: "Carpaccio vom Rind",
      price: 11.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Dünne Rindfleischscheiben mit Rucola, Parmesan und Senfsauce."
    },
    {
      id: 13,
      name: "Burrata mit Kirschtomaten",
      price: 10.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Cremige frische Burrata, serviert mit Kirschtomaten und Basilikum."
    },
    {
      id: 14,
      name: "Italienische Aufschnittplatte",
      price: 16.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Auswahl der besten italienischen Wurstwaren, wie Prosciutto di Parma und Salame Milano."
    },
    {
      id: 15,
      name: "Reis-Arancini",
      price: 8.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Reisbällchen, gefüllt mit Ragù und Mozzarella, goldbraun frittiert."
    },
    {
      id: 16,
      name: "Caprese-Salat",
      price: 9.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Tomaten, Büffelmozzarella, frisches Basilikum und natives Olivenöl extra."
    },
    {
      id: 17,
      name: "Gebackener Provoleta",
      price: 9.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Geschmolzener Provolone-Käse, gebacken mit Oregano und einem Schuss Öl."
    },
    {
      id: 18,
      name: "Trüffel-Pommes",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Pommes frites mit Trüffelöl und geriebenem Parmesan."
    },
    {
      id: 19,
      name: "Gemischte Bruschetta",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Geröstetes Brot mit verschiedenen Belägen: Tomate und Basilikum, und Olivenpaste."
    },
    {
      id: 20,
      name: "Auberginen-Parmigiana",
      price: 10.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Gebackene Auberginen mit Tomaten, Mozzarella und Parmesan."
    }
  ],
  bebidas: [
    {
      id: 21,
      name: "Mineralwasser",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Mineralwasser, still oder mit Kohlensäure."
    },
    {
      id: 22,
      name: "Erfrischungsgetränk (Coca-Cola, Fanta, Sprite)",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      description: "Auswahl an beliebten Erfrischungsgetränken."
    },
    {
      id: 23,
      name: "Frischer Saft (Orange, Ananas, Apfel)",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Frisch gepresste Fruchtsäfte."
    },
    {
      id: 24,
      name: "Hausgemachte Limonade",
      price: 3.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Erfrischende, hausgemachte Naturlimonade."
    },
    {
      id: 25,
      name: "Eistee (Zitrone, Pfirsich)",
      price: 3.20,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Eistee zur Erfrischung, in verschiedenen Geschmacksrichtungen."
    },
    {
      id: 26,
      name: "Espresso",
      price: 2.00,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
      description: "Italienischer Espresso, intensiv und aromatisch."
    },
    {
      id: 27,
      name: "Cappuccino",
      price: 2.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Kaffee mit aufgeschäumter Milch, perfekt für jede Tageszeit."
    },
    {
      id: 28,
      name: "Latte Macchiato",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Heiße Milch mit einem Schuss Espresso."
    },
    {
      id: 29,
      name: "Heiße Schokolade",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Köstliche heiße Schokolade, cremig und wohltuend."
    },
    {
      id: 30,
      name: "Frucht-Smoothie (Erdbeere, Banane)",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Erfrischende Smoothies aus frischen Früchten."
    }
  ],
  postres: [
    {
      id: 31,
      name: "Klassisches Tiramisù",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Traditionelles italienisches Dessert mit Schichten aus Löffelbiskuits, Kaffee, Mascarpone und Kakao."
    },
    {
      id: 32,
      name: "Panna Cotta mit roten Früchten",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Cremiger Sahne-Pudding mit einer Sauce aus frischen roten Früchten."
    },
    {
      id: 33,
      name: "Sizilianische Cannoli",
      price: 7.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Knusprige frittierte Teigröllchen, gefüllt mit süßer Ricotta und kandierten Früchten."
    },
    {
      id: 34,
      name: "Handwerkliches Gelato",
      price: 5.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Handwerklich hergestelltes italienisches Eis in verschiedenen Sorten: Vanille, Schokolade, Pistazie."
    },
    {
      id: 35,
      name: "Käsekuchen mit Amarena-Kirschen",
      price: 6.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Cremiger Käsekuchen mit kandierten Amarena-Kirschen."
    },
    {
      id: 36,
      name: "Profiteroles mit Schokolade",
      price: 6.20,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Kleine Windbeutel aus Brandteig, gefüllt mit Sahne und überzogen mit Schokoladensauce."
    },
    {
      id: 37,
      name: "Mousse au Chocolat",
      price: 5.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Weiche und leichte Mousse aus dunkler Schokolade."
    },
    {
      id: 38,
      name: "Frisches Obst der Saison",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Eine Auswahl an frischem saisonalem Obst."
    },
    {
      id: 39,
      name: "Nougat-Semifreddo",
      price: 6.70,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Cremiges Halbgefrorenes mit Nougatstücken."
    },
    {
      id: 40,
      name: "Affogato al Caffè",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Eine Kugel Vanilleeis, ertränkt in einem heißen Espresso-Shot."
    }
  ]
}

export default menuDataDe