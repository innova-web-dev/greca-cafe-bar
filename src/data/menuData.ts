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
  { label: 'Desayuno', value: 'desayunos' },
  { label: 'Tardear', value: 'tardear' },
  { label: 'Sándwich', value: 'sandwich' },
  { label: 'Cafés', value: 'cafes' },
  { label: 'Bebidas', value: 'bebidas' },
] as const;

export type FilterValue = (typeof filterTabs)[number]['value'];

export const menuCategories: MenuCategory[] = [
  {
    id: 'desayunos',
    title: 'DESAYUNOS',
    image: '/plato1.avif',
    items: [
      { name: 'Huevos Revueltos', price: '$8.000' },
      { name: 'Huevos en Cacerola', price: '$7.000' },
      { name: 'Huevos Pericos', price: '$9.000' },
      { name: 'Huevos Napolitanos', price: '$12.000' },
      { name: 'Huevos Rancheros', price: '$15.000' },
      { name: 'Huevos Greca', price: '$15.000' },
      { name: 'Huevos Pochados', price: '$17.000' },
      { name: 'Tostadas Francesas', price: '$16.000' },
      { name: 'Tostadas de Pan', price: '$14.000' },
      { name: 'Creps Rancheros', price: '$15.000' },
      { name: 'Acalorado de Frijoles', price: '$18.000' },
      { name: 'Omelette Ranchero', price: '$16.000' },
      { name: 'Omelette Vegetariano', price: '$17.000' },
      { name: 'Omelette Greca', price: '$16.000' },
      { name: 'Migao Greca', price: '$14.000' },
      { name: 'Bowl de Avena', price: '$13.000' },
      { name: 'Bowl Griego', price: '$16.000' },
      { name: 'Arepa con Queso Rallado', price: '$6.000' },
    ],
  },
  {
    id: 'tardear',
    title: 'TARDEAR',
    image: '/plato2.avif',
    items: [
      { name: 'Waffles de Yuca', price: '$18.000' },
      { name: 'Pandebonitos', price: '$15.000', description: '10 unidades' },
      { name: 'Cuatro Costillas', price: '$24.000' },
      { name: 'Arepitas con Hogao', price: '$8.000' },
      { name: 'Waffles Tradicionales', price: '$14.000' },
      { name: 'Cascaritas de Cerdo', price: '$18.000' },
      { name: 'Hamburguesa Greca', price: '$25.000' },
      { name: 'Hamburguesa Ripe Burger', price: '$25.000' },
      { name: 'Hamburguesa Philadelphia', price: '$25.000' },
      { name: 'Hamburguesa Champiñones Cremosos', price: '$25.000' },
      { name: 'Hamburguesa Hawaiana', price: '$25.000' },
      { name: 'Ensalada César', price: '$23.000' },
      { name: 'Chocolitas', price: '$17.000', description: '3 unidades' },
      { name: 'Nuggets de Pollo con Papas', price: '$18.000' },
      { name: 'Nachos Greca', price: '$30.000' },
    ],
  },
  {
    id: 'sandwich',
    title: 'SÁNDWICH',
    image: '/plato3.avif',
    items: [
      { name: 'Guarro', price: '$25.000' },
      { name: 'Ámsterdam', price: '$25.000' },
      { name: 'Ciruelazo', price: '$25.000' },
      { name: 'Beacon', price: '$25.000' },
      { name: 'Philadelphia Steak', price: '$25.000' },
      { name: 'Vegetariano', price: '$25.000' },
      { name: 'Zeta', price: '$25.000' },
      { name: 'Chill', price: '$25.000' },
      { name: 'Honey Pollo', price: '$26.000' },
      { name: 'Mexicano', price: '$26.000' },
      { name: 'Montañero', price: '$26.000' },
    ],
  },
  {
    id: 'cafes',
    title: 'CAFÉS',
    image: '/frappe.jpg',
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
          { name: 'Latte', price: '$10.000' },
          { name: 'Te Chai', price: '$14.000' },
        ],
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'BEBIDAS',
    image: '/tenders.jpg',
    subcategories: [
      {
        title: 'TÉS / AROMÁTICAS',
        items: [
          { name: 'Te Chai', price: '$12.000' },
          { name: 'Te de Frutos Rojos', price: '$8.000' },
          { name: 'Te de Hierbabuena y Limón', price: '$8.000' },
          { name: 'Te Tropical', price: '$7.000' },
        ],
      },
      {
        title: 'LIMONADAS',
        items: [
          { name: 'Cerezada', price: '$12.000' },
          { name: 'De Coco', price: '$12.000' },
          { name: 'Hierbabuena', price: '$10.000' },
          { name: 'Natural', price: '$9.000' },
          { name: 'De Vino', price: '$13.000' },
          { name: 'De Café', price: '$11.000' },
          { name: 'Tamarindo', price: '$12.000' },
          { name: 'Mango Biche', price: '$12.000' },
          { name: 'Fresa Salvaje', price: '$12.000' },
          { name: 'Lichy', price: '$12.000' },
        ],
      },
      {
        title: 'SODAS SABORIZADAS',
        items: [
          { name: 'Frutos del Bosque', price: '$14.000' },
          { name: 'Frutos Amarillos', price: '$14.000' },
          { name: 'Sandía y Menta', price: '$14.000' },
          { name: 'Lichi', price: '$14.000' },
        ],
      },
      {
        title: 'JUGOS',
        items: [
          { name: 'En Agua', price: '$7.000' },
          { name: 'En Leche', price: '$9.000' },
          { name: 'Combinados', price: '$10.000' },
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
    ],
  },
];
