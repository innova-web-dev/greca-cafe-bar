export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface SubCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  title: string;
  image: string;
  items?: MenuItem[];
  subcategories?: SubCategory[];
}

export const filterTabs = [
  { label: 'Ver Todo', value: 'all' },
  { label: 'Desayunos', value: 'desayunos' },
  { label: 'Tardear', value: 'tardear' },
  { label: 'Hamburguesas', value: 'hamburguesas' },
  { label: 'Sándwiches', value: 'sandwich' },
  { label: 'Cafés', value: 'cafes' },
  { label: 'Bebidas', value: 'bebidas' },
  { label: 'Cócteles & Cervezas', value: 'bar' },
] as const;

export type FilterValue = (typeof filterTabs)[number]['value'];

export const menuCategories: MenuCategory[] = [
  {
    id: 'desayunos',
    title: 'DESAYUNOS',
    image: '/plato1.avif',
    items: [
      {
        name: 'Huevos Revueltos',
        price: '$8.000',
        description: 'Acompañados de arepa y queso crema',
      },
      {
        name: 'Huevos en Cacerola',
        price: '$7.000',
        description: 'Acompañados de arepa y queso crema',
      },
      {
        name: 'Huevos Pericos',
        price: '$9.000',
        description: 'Revueltos con cebolla y tomate, acompañados de arepa y queso crema',
      },
      {
        name: 'Huevos Napolitanos',
        price: '$12.000',
        description: 'Bañados en salsa napolitana',
      },
      {
        name: 'Huevos Rancheros',
        price: '$15.000',
        description: 'Salchicha, tocineta, queso parmesano y queso mozzarella, acompañados de arepa y queso crema',
      },
      {
        name: 'Huevos Greca',
        price: '$15.000',
        description: 'Plátano maduro, tocineta y queso parmesano, acompañados de arepa y queso crema',
      },
      {
        name: 'Huevos Pochados',
        price: '$17.000',
        description: 'Cama de pan tajado artesanal con rúgula, queso cheddar, tocineta y queso parmesano',
      },
      {
        name: 'Tostadas Francesas',
        price: '$16.000',
        description: 'Acompañadas de fresa, banano, miel y Nutella',
      },
      {
        name: 'Tostadas de Pan',
        price: '$14.000',
        description: 'Con aguacate y huevos en cacerola',
      },
      {
        name: 'Creps Rancheros',
        price: '$15.000',
        description: 'Salchicha, tocineta, queso mozzarella y queso parmesano',
      },
      {
        name: 'Acalorado de Frijoles',
        price: '$18.000',
        description: 'Acompañado de aguacate, platanitos maduros, arepa y huevos al gusto (cacerola, revueltos o pericos)',
      },
      {
        name: 'Omelette Ranchero',
        price: '$16.000',
        description: 'Tocineta, salchicha y queso mozzarella, acompañados de arepa y queso crema',
      },
      {
        name: 'Omelette Vegetariano',
        price: '$17.000',
        description: 'Champiñones, tomate cherry, espinaca y queso mozzarella, acompañados de arepa y queso crema',
      },
      {
        name: 'Omelette Greca',
        price: '$16.000',
        description: 'Plátano maduro, tocineta y queso mozzarella',
      },
      {
        name: 'Migao Greca',
        price: '$14.000',
        description: 'Buñuelo, pandebono, achiras, galletas, queso especial y queso siete cueros. Bebida caliente a elección: chocolate, aguapanela, Milo o café',
      },
      {
        name: 'Bowl de Avena',
        price: '$13.000',
        description: 'Leche de almendras con fresa y banano',
      },
      {
        name: 'Bowl Griego',
        price: '$16.000',
        description: 'Yogur griego cremoso acompañado de fruta fresca y granola',
      },
      {
        name: 'Arepa con Queso Rallado',
        price: '$6.000',
      },
    ],
  },
  {
    id: 'tardear',
    title: 'TARDEAR',
    image: '/plato2.avif',
    items: [
      {
        name: 'Waffles de Yuca',
        price: '$18.000',
        description: 'Acompañados de salsa de fresa y miel de sirope',
      },
      {
        name: 'Pandebonitos',
        price: '$15.000',
        description: '10 unidades, acompañados de arequipe',
      },
      {
        name: 'Cuatro Costillas',
        price: '$24.000',
        description: '4 unidades de arepa crocante con costilla deshuesada en salsa agridulce',
      },
      {
        name: 'Arepitas con Hogao',
        price: '$8.000',
      },
      {
        name: 'Waffles Tradicionales',
        price: '$14.000',
        description: 'Acompañados de fresa, Nutella y porción de helado',
      },
      {
        name: 'Waffles de Chócolo',
        price: '$17.000',
      },
      {
        name: 'Cascaritas de Cerdo (200g)',
        price: '$20.000',
        description: 'Acompañadas de papas a la francesa, guacamole y pico de gallo',
      },
      {
        name: 'Cascaritas de Cerdo (300g)',
        price: '$25.000',
        description: 'Acompañadas de papas a la francesa, guacamole y pico de gallo',
      },
      {
        name: 'Ensalada César',
        price: '$23.000',
        description: 'Lechuga, trozos de pollo, tocineta, crutones, queso parmesano y salsa de la casa',
      },
      {
        name: 'Nuggets de Pollo con Papas',
        price: '$20.000',
        description: 'Acompañados de salsa napolitana',
      },
      {
        name: 'Nachos Greca',
        price: '$35.000',
        description: 'Carne desmechada greca, queso cheddar, queso especial, crema agria, frijol refrito y pico de gallo',
      },
      {
        name: 'Lomo Salteado',
        price: '$25.000',
        description: 'Acompañado de papas a la francesa, arroz, vegetales salteados y salsa de la casa',
      },
    ],
  },
  {
    id: 'hamburguesas',
    title: 'HAMBURGUESAS',
    image: '/tenders.webp',
    items: [
      {
        name: 'Hamburguesa Greca',
        price: '$30.000',
        description: 'Pan artesanal, 150g carne 100% Angus, tomate, pepinillos, cebolla caramelizada, tocineta, queso cheddar y salsa de la casa, acompañada de papas a la francesa',
      },
      {
        name: 'Hamburguesa Ripe Burger',
        price: '$30.000',
        description: 'Pan artesanal, 150g carne 100% Angus, plátano maduro, queso mozzarella y salsa de la casa, acompañada de papas a la francesa',
      },
      {
        name: 'Hamburguesa Philadelphia',
        price: '$30.000',
        description: 'Pan artesanal, carne 100% Angus, tocineta, aros de cebolla, queso Philadelphia y salsa de la casa, acompañada de papas a la francesa',
      },
      {
        name: 'Hamburguesa Champiñones Cremosos',
        price: '$30.000',
        description: 'Pan artesanal, carne 100% Angus, tocineta, champiñones bañados en salsa de la casa y lechuga, acompañada de papas a la francesa',
      },
      {
        name: 'Hamburguesa Hawaiana',
        price: '$30.000',
        description: 'Pan brioche, carne 100% Angus, piña grillé, tocineta, queso mozzarella, lechuga y salsa de la casa',
      },
    ],
  },
  {
    id: 'sandwich',
    title: 'SÁNDWICH',
    image: '/plato3.avif',
    items: [
      {
        name: 'Guarro',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, trozos de carne de cerdo bañado en salsa BBQ, queso mozzarella, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Ámsterdam',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, pollo mechado, tomate, queso holandés, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Ciruelazo',
        price: '$28.000',
        description: 'Pan servilleta, tocineta, trozos de ciruela bañados en salsa de la casa, queso mozzarella, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Beacon',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, pollo mechado, tocineta, queso mozzarella, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Philadelphia Steak',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, trozos de carne de res, cebollas, queso cheddar, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Vegetariano',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, champiñones, tomate cherry, espinaca, cebollas, mezcla de tres quesos, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Zeta',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, pollo mechado, champiñones, tocineta, maicitos, queso mozzarella, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Chill',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, pollo mechado, cebollas caramelizadas, queso mozzarella, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Honey Pollo',
        price: '$28.000',
        description: 'Horneado en miel mostaza, trozos de tocineta, queso mozzarella, lechuga, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Mexicano',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, carne molida, frijoles, queso cheddar, con papas a la francesa y salsas de la casa',
      },
      {
        name: 'Montañero',
        price: '$28.000',
        description: 'Pan servilleta, lechuga, carne desmechada, chicharrón triturado, trocitos de maduro y queso mozzarella',
      },
      {
        name: 'Rústico de la Huerta',
        price: '$28.000',
        description: 'Pan rústico artesanal, lechuga, pollo desmechado, queso mozzarella, espinaca, cebolla, arándanos y salsa de la casa, con papas a la francesa',
      },
    ],
  },
  {
    id: 'cafes',
    title: 'CAFÉS',
    image: '/frappe.webp',
    subcategories: [
      {
        title: 'CALIENTES',
        items: [
          { name: 'Espresso', price: '$6.000' },
          { name: 'Americano', price: '$6.000' },
          { name: 'Macchiato', price: '$6.000' },
          { name: 'Latte', price: '$8.000' },
          { name: 'Cappuccino', price: '$8.000' },
          { name: 'Cappuccino Amaretto', price: '$12.000' },
          { name: 'Cappuccino Baileys', price: '$12.000' },
          { name: 'Cappuccino Caramelo', price: '$12.000' },
          { name: 'Mocaccino', price: '$10.000' },
          { name: 'Affogato', price: '$12.000' },
          { name: 'Café Irlandés', price: '$15.000' },
          { name: 'Carajillo', price: '$11.000' },
          { name: 'Café Bombón', price: '$10.000' },
        ],
      },
      {
        title: 'BEBIDAS CALIENTES',
        items: [
          { name: 'Milo', price: '$9.000' },
          { name: 'Chocolate en Leche', price: '$9.000' },
          { name: 'Chocolate en Agua', price: '$7.000' },
          { name: 'Chocolate en Leche con Masmelos', price: '$10.000' },
        ],
      },
      {
        title: 'FRÍOS',
        items: [
          { name: 'Frappuccino', price: '$12.000' },
          { name: 'Frappuccino Mocca', price: '$13.000' },
          { name: 'Frappuccino Caramelo', price: '$16.000' },
          { name: 'Café Dalgona', price: '$11.000' },
          { name: 'Ice Coffee Latte Vainilla', price: '$13.000' },
          { name: 'Latte Frío', price: '$10.000' },
          { name: 'Té Chai Frío', price: '$14.000' },
          { name: 'Chai Frappé', price: '$14.000' },
          { name: 'Milo Frío', price: '$10.000' },
        ],
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'BEBIDAS',
    image: '/arepa.webp',
    subcategories: [
      {
        title: 'TÉS / AROMÁTICAS',
        items: [
          { name: 'Té Chai', price: '$12.000' },
          { name: 'Té de Frutos Rojos', price: '$8.000' },
          { name: 'Té de Hierbabuena y Limón', price: '$8.000' },
          { name: 'Té Tropical', price: '$7.000' },
        ],
      },
      {
        title: 'LIMONADAS',
        items: [
          { name: 'Limonada Cerezada', price: '$12.000' },
          { name: 'Limonada de Coco', price: '$12.000' },
          { name: 'Limonada de Hierbabuena', price: '$10.000' },
          { name: 'Limonada Natural', price: '$9.000' },
          { name: 'Limonada de Vino', price: '$13.000' },
          { name: 'Limonada de Café', price: '$11.000' },
          { name: 'Limonada de Tamarindo', price: '$12.000' },
          { name: 'Limonada de Mango Biche', price: '$12.000' },
          { name: 'Limonada Fresa Salvaje', price: '$12.000' },
          { name: 'Limonada de Lichi', price: '$12.000' },
        ],
      },
      {
        title: 'SODAS SABORIZADAS',
        items: [
          { name: 'Frutos del Bosque', price: '$14.000', description: 'Fresa, mora y cereza' },
          { name: 'Frutos Amarillos', price: '$14.000', description: 'Piña, maracuyá y mango' },
          { name: 'Sandía y Menta', price: '$14.000' },
          { name: 'Lichi', price: '$14.000' },
          { name: 'Tamarindo Jengibre', price: '$14.000' },
        ],
      },
      {
        title: 'JUGOS',
        items: [
          { name: 'Jugo en Agua', price: '$7.000', description: 'Maracuyá, Mora, Fresa, Lulo o Guanábana' },
          { name: 'Jugo en Leche', price: '$9.000', description: 'Maracuyá, Mora, Fresa, Lulo o Guanábana' },
          { name: 'Combinado Floresta', price: '$10.000', description: 'Mora, fresa y cereza' },
          { name: 'Combinado Campiña', price: '$10.000', description: 'Maracuyá y mango' },
          { name: 'Combinado Jungla', price: '$10.000', description: 'Fresa, mango biche y limón' },
          { name: 'Combinado Otoñal', price: '$10.000', description: 'Papaya y mango' },
        ],
      },
      {
        title: 'MALTEADAS',
        items: [
          { name: 'Frutos del Bosque', price: '$15.000' },
          { name: 'Fresa Mora', price: '$15.000' },
          { name: 'Frutos Amarillos', price: '$15.000' },
          { name: 'Oreo', price: '$15.000' },
          { name: 'Café', price: '$15.000' },
          { name: 'Choco-Banano', price: '$15.000' },
          { name: 'Baileys', price: '$16.000' },
        ],
      },
      {
        title: 'OTRAS BEBIDAS',
        items: [
          { name: 'Agua sin Gas', price: '$5.000' },
          { name: 'Agua Manantial', price: '$5.000' },
          { name: 'Agua Manantial en Vidrio', price: '$7.000' },
          { name: 'Coca-Cola 350ml', price: '$7.000' },
          { name: 'Soda', price: '$5.000' },
          { name: 'Soda Michelada', price: '$6.000' },
          { name: 'Ginger', price: '$6.000' },
          { name: 'Ginger Michelada', price: '$7.000' },
          { name: 'Tamarindo', price: '$5.000' },
          { name: 'Tamarindo Michelada', price: '$6.000' },
        ],
      },
    ],
  },
  {
    id: 'bar',
    title: 'CÓCTELES & CERVEZAS',
    image: '/og-image.jpg',
    subcategories: [
      {
        title: 'CÓCTELES',
        items: [
          { name: 'Mojito', price: '$21.000' },
          { name: 'Mojito Fresa', price: '$21.000' },
          { name: 'Orgasmo', price: '$21.000' },
          { name: 'Tequila Tropical', price: '$21.000' },
          { name: 'Margarita', price: '$21.000' },
        ],
      },
      {
        title: 'CERVEZAS',
        items: [
          { name: 'Águila Light', price: '$7.000' },
          { name: 'Poker', price: '$7.000' },
          { name: 'Club Colombia', price: '$7.000' },
          { name: 'Stella Artois', price: '$10.000' },
          { name: 'Corona', price: '$10.000' },
          { name: 'Heineken', price: '$10.000' },
          { name: 'Peroni', price: '$10.000' },
        ],
      },
    ],
  },
];
