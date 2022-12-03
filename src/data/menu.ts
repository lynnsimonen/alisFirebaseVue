export interface Menu {
  itemName: string;
  description: string;
  price: string;
  id: number;
}

const menu: Menu[] = [
  {
    itemName: 'Steak Empanada',
    description: 'Steak and onions',
    price: '3.99',
    id: 0
  },
  {
    itemName: 'Sweet Chicken Empanada',
    description: 'Chicken, onions & tomatoes with sweet honey sauce',
    price: '3.99',
    id: 1
  },
  {
    itemName: 'Chicken Chili Empanada',
    description: 'Chicken, corn, tomatoes & blackbeans in our creamy chili sauce',
    price: '3.99',
    id: 2

  },
  {
    itemName: 'Chacarero',
    description: 'Grilled steak, mayonnaise, tomatoes & green beans on a fresh bun',
    price: '7.99',
    id: 3
  },
  {
    itemName: 'Churrasco',
    description: 'Grilled steak, tomatoes, mayonnaise & avocado on a fresh bun',
    price: '9.49',
    id: 4
  },
  {
    itemName: 'Classic Barros Luco',
    description: 'Steak & cheese on a fresh bun',
    price: '7.99',
    id: 5
  },
  {
    itemName: 'Chemilico',
    description: 'Steak, egg & carmalized onions on a fresh bun',
    price: '7.99',
    id: 6
  },
  {
    itemName: 'Chorrillana',
    description: 'Cooked eggs over steak, chorizo, onions & french fries',
    price: '12.99',
    id: 7
  },
  {
    itemName: 'Fries',
    description: 'Fresh cut potatoe french fries',
    price: '2.00',
    id: 8
  }
];

export const getMenu = () => menu;

export const getlItem = (id: number) => menu.find(m => m.id === id);