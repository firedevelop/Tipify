import type { MenuItem } from "../../types"

const menuDataEs: Record<string, MenuItem[]> = {
  pizzas: [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 12.50,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
      description: "Tomate San Marzano, mozzarella fresca, albahaca y aceite de oliva virgen extra."
    },
    {
      id: 2,
      name: "Pizza Prosciutto e Funghi",
      price: 14.00,
      image: "https://images.unsplash.com/photo-1548365328-8b849e6c7e07?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, jamón cocido y champiñones frescos."
    },
    {
      id: 3,
      name: "Pizza Diavola",
      price: 13.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, salami picante y guindilla."
    },
    {
      id: 4,
      name: "Pizza Quattro Formaggi",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, gorgonzola, provolone y parmesano."
    },
    {
      id: 5,
      name: "Pizza Vegetariana",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella y una selección de verduras de temporada."
    },
    {
      id: 6,
      name: "Pizza Carbonara",
      price: 14.50,
      image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=400&q=80",
      description: "Nata, mozzarella, bacon, huevo y pimienta negra."
    },
    {
      id: 7,
      name: "Pizza Capricciosa",
      price: 14.80,
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, jamón cocido, champiñones, alcachofas y aceitunas negras."
    },
    {
      id: 8,
      name: "Pizza Tonno e Cipolla",
      price: 13.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, atún y cebolla roja."
    },
    {
      id: 9,
      name: "Pizza Bianca con Patate e Rosmarino",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Mozzarella, patatas finas en rodajas y romero fresco."
    },
    {
      id: 10,
      name: "Calzone Classico",
      price: 13.80,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella, jamón cocido y champiñones, doblado y horneado."
    }
  ],
  entrantes: [
    {
      id: 11,
      name: "Focaccia con Romero y Sal",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Pan plano horneado con romero y sal marina, ideal para compartir."
    },
    {
      id: 12,
      name: "Carpaccio de Ternera",
      price: 11.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Finas láminas de ternera con rúcula, parmesano y salsa de mostaza."
    },
    {
      id: 13,
      name: "Burrata con Tomates Cherry",
      price: 10.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Cremosa burrata fresca acompañada de tomates cherry y albahaca."
    },
    {
      id: 14,
      name: "Tabla de Embutidos Italianos",
      price: 16.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Selección de los mejores embutidos italianos, como Prosciutto di Parma y Salame Milano."
    },
    {
      id: 15,
      name: "Arancini de Arroz",
      price: 8.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Bolas de arroz rellenas de ragú y mozzarella, fritas hasta dorar."
    },
    {
      id: 16,
      name: "Ensalada Caprese",
      price: 9.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Tomate, mozzarella de búfala, albahaca fresca y aceite de oliva virgen extra."
    },
    {
      id: 17,
      name: "Provoleta al Horno",
      price: 9.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Queso provolone fundido al horno con orégano y un toque de aceite."
    },
    {
      id: 18,
      name: "Patatas Trufadas",
      price: 7.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Patatas fritas con aceite de trufa y parmesano rallado."
    },
    {
      id: 19,
      name: "Bruschetta Mista",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Pan tostado con diferentes coberturas: tomate y albahaca, y paté de aceitunas."
    },
    {
      id: 20,
      name: "Melanzane alla Parmigiana",
      price: 10.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Berenjenas al horno con tomate, mozzarella y parmesano."
    }
  ],
  bebidas: [
    {
      id: 21,
      name: "Agua Mineral",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Agua mineral natural o con gas."
    },
    {
      id: 22,
      name: "Refresco (Coca-Cola, Fanta, Sprite)",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      description: "Variedad de refrescos populares."
    },
    {
      id: 23,
      name: "Zumo Natural (Naranja, Piña, Manzana)",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Zumos de frutas naturales recién exprimidos."
    },
    {
      id: 24,
      name: "Limonada Casera",
      price: 3.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Refrescante limonada natural, hecha en casa."
    },
    {
      id: 25,
      name: "Té Frío (Limón, Melocotón)",
      price: 3.20,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      description: "Té helado listo para refrescar, en diferentes sabores."
    },
    {
      id: 26,
      name: "Café Espresso",
      price: 2.00,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80",
      description: "Café espresso italiano, intenso y aromático."
    },
    {
      id: 27,
      name: "Cappuccino",
      price: 2.80,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Café con leche espumosa, perfecto para cualquier momento."
    },
    {
      id: 28,
      name: "Latte Macchiato",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      description: "Leche caliente manchada con un toque de espresso."
    },
    {
      id: 29,
      name: "Chocolate Caliente",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Delicioso chocolate caliente, cremoso y reconfortante."
    },
    {
      id: 30,
      name: "Batido de Frutas (Fresa, Plátano)",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Batidos refrescantes de frutas naturales."
    }
  ],
  postres: [
    {
      id: 31,
      name: "Tiramisú Clásico",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Postre tradicional italiano con capas de bizcochos de soletilla, café, mascarpone y cacao."
    },
    {
      id: 32,
      name: "Panna Cotta con Frutos Rojos",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Postre cremoso de nata con una salsa de frutos rojos frescos."
    },
    {
      id: 33,
      name: "Cannoli Siciliani",
      price: 7.00,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Crujientes tubos de masa frita rellenos de ricota dulce y fruta confitada."
    },
    {
      id: 34,
      name: "Gelato Artesanal",
      price: 5.00,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Helado artesanal italiano en varios sabores: vainilla, chocolate, pistacho."
    },
    {
      id: 35,
      name: "Tarta de Queso con Amarena",
      price: 6.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Cheesecake cremoso con cerezas Amarena confitadas."
    },
    {
      id: 36,
      name: "Profiteroles con Chocolate",
      price: 6.20,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
      description: "Pequeños bollos de pasta choux rellenos de nata y cubiertos con salsa de chocolate."
    },
    {
      id: 37,
      name: "Mousse de Chocolate",
      price: 5.80,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Suave y ligera mousse de chocolate negro."
    },
    {
      id: 38,
      name: "Fruta Fresca de Temporada",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
      description: "Selección de frutas frescas de temporada."
    },
    {
      id: 39,
      name: "Semifreddo de Turrón",
      price: 6.70,
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      description: "Postre helado cremoso con trozos de turrón."
    },
    {
      id: 40,
      name: "Affogato al Caffè",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
      description: "Bola de helado de vainilla ahogada en un shot de espresso caliente."
    }
  ]
}

export default menuDataEs