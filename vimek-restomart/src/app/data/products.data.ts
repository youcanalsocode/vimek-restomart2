// Prices are intentionally NOT included. Add `image: 'https://...'` to any item to show a photo instead of the emoji.
export interface Item { name: string; pack: string; image?: string; }
export interface Category { slug: string; name: string; icon: string; tagline: string; color: string; items: Item[]; }

export const CATEGORIES: Category[] = [
  { slug: 'paneer-mawa', name: 'Paneer & Mawa', icon: '🧈', tagline: 'Fresh malai paneer and mawa', color: '#f6b73c', items: [
    { name: 'Malai Paneer (Low Fat)', pack: '1 KG' }, { name: 'Malai Paneer (High Fat)', pack: '1 KG' }, { name: 'Mawa', pack: '1 KG' }] },
  { slug: 'dairy', name: 'Dairy', icon: '🥛', tagline: 'Dahi, butter, cream and cheese slices', color: '#5aa9e6', items: [
    { name: 'Gowardhan Dahi', pack: '1 KG' }, { name: 'Amul Dahi', pack: '1 KG' },
    { name: 'Nutralite Butter', pack: '1 KG' }, { name: 'Delicious Butter', pack: '1 KG' }, { name: 'Amul Butter', pack: '1 KG' },
    { name: 'Goodrich Cream', pack: '1 Ltr' }, { name: 'Amul Fresh Cream', pack: '1 Ltr' }, { name: 'Mother Dairy Cream', pack: '1 Ltr' },
    { name: 'Derista Cheese Slice (52 pc)', pack: '780 GM' }] },
  { slug: 'cheese', name: 'Cheese & Mozzarella', icon: '🧀', tagline: 'Block, soft, cube and pizza cheese', color: '#f2a516', items: [
    { name: 'Qualita Special Cheese', pack: '1 KG' }, { name: 'Derista Block Cheese', pack: '1 KG' }, { name: 'Gowardhan Cheese', pack: '1 KG' },
    { name: 'Amul Soft Cheese', pack: '1 KG' }, { name: 'Amul Cheese Cube', pack: '1 KG' },
    { name: 'Derista Pizza Topping Diced', pack: '1 KG' }, { name: 'Derista Mozzarella Blend', pack: '1 KG' }, { name: 'Amul Mozzarella Diced', pack: '1 KG' }] },
  { slug: 'vegetables', name: 'Vegetables & Batters', icon: '🥦', tagline: 'Peas, corn, garlic, fries and batters', color: '#3fae5a', items: [
    { name: 'Green Peas', pack: '1 KG' }, { name: 'Frozen Green Peas Dry', pack: '1 KG' }, { name: 'Loose Green Peas', pack: '1 KG' },
    { name: 'Quality Garlic Peel', pack: '1 KG' }, { name: 'Sweet Corn', pack: '1 KG' }, { name: 'Hungitos French Fries', pack: '2.5 KG' },
    { name: 'Idli Batter', pack: '1 KG' }, { name: 'Dosa Batter', pack: '1 KG' }, { name: 'Meduvada Batter', pack: '1 KG' }] },
  { slug: 'sauces', name: 'Sauces & Condiments', icon: '🍅', tagline: 'Sauces, ketchup, mayonnaise and more', color: '#e5483d', items: [
    { name: 'Foodrite Schezwan Sauce', pack: '1 KG' }, { name: 'Spicy Momo Sauce', pack: '1 KG' },
    { name: 'Meal Time Salad Mayonnaise', pack: '1 KG' }, { name: 'Foodrite Pizza & Pasta Sauce', pack: '1 KG' },
    { name: 'Foodrite Tomato Ketchup', pack: '8 x 100' }, { name: 'Winn Tomato Ketchup', pack: '8 x 100' },
    { name: 'Vinegar', pack: '750 ML' }, { name: 'Red Chilli Sauce', pack: '680 ML' }, { name: 'Green Chilli Sauce', pack: '680 ML' }, { name: 'Dark Soya Sauce', pack: '750 ML' },
    { name: 'Red Chilli Sauce (Can)', pack: '5 KG' }, { name: 'Green Chilli Sauce (Can)', pack: '5 KG' }, { name: 'Dark Soya Sauce (Can)', pack: '5 KG' }, { name: 'Tomato Sauce (Can)', pack: '5 KG' }] },
  { slug: 'spices', name: 'Spices & Sachets', icon: '🌶️', tagline: 'Seasonings for pizza, fries and more', color: '#d4552a', items: [
    { name: 'Oregano Spice Sachets', pack: '300 g' }, { name: 'Hot Chilli Sachets', pack: '300 g' },
    { name: 'Oregano Spice', pack: '500 g' }, { name: 'Peri Peri Masala', pack: '250 g' }, { name: 'Chilli Flakes', pack: '500 g' }] },
  { slug: 'frozen', name: 'Frozen Food', icon: '🍔', tagline: 'Patties, chaap, spring rolls and cheese corn balls', color: '#7a5af8', items: [
    { name: 'Burger Patties', pack: '21 pc' }, { name: 'Soya Chaap', pack: '1 KG' }, { name: 'Mix Vegetables', pack: '1 KG' },
    { name: 'Cheese Corn Ball', pack: '1 PC' }, { name: 'Vegetable Spring Roll', pack: '1 PC' }, { name: 'Chicken Spring Roll', pack: '1 PC' }] },
  { slug: 'momos', name: 'Frozen Momos', icon: '🥟', tagline: 'Veg and chicken momos in many flavours', color: '#14a39a', items: [
    { name: 'Veg Sikkim Momos', pack: '1 PC' }, { name: 'Veg Cheese Momo', pack: '1 PC' }, { name: 'Paneer Momos', pack: '1 PC' },
    { name: 'Corn Cheese Momos', pack: '1 PC' }, { name: 'Chicken Classic Momos', pack: '1 PC' }, { name: 'Chicken Peri Peri Momos', pack: '1 PC' }] }
];
