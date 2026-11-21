// ALL business content lives in src/app/data. Edit here; UI updates automatically.
export const SITE = {
  name: 'Vimek Restomart',
  tagline: 'Your Food Partner',
  type: 'Wholesaler',
  phone: '9324026263',
  whatsapp: '919324026263',
  email: '',            // TODO: add email (hidden while empty)
  address: '',          // TODO: add address (hidden while empty)
  hours: '',            // TODO: e.g. 'Mon-Sat, 7am - 9pm'
  serviceArea: '',      // TODO: e.g. 'Mumbai & nearby areas'
  logo: 'assets/logo.jpeg'
};

export const HERO_SLIDES = [
  { title: 'Everything your kitchen needs, one supplier', text: 'Paneer, dairy, cheese, sauces, frozen foods and more, sourced from trusted manufacturers.', emoji: '🧀', cta: 'Browse products', link: '/products', bg: 'linear-gradient(135deg,#0b3a8f,#1a73c8)' },
  { title: 'Cold chain, from storage to your door', text: 'Temperature-controlled storage and careful handling keep every item fresh on arrival.', emoji: '❄️', cta: 'Contact us', link: '/contact', bg: 'linear-gradient(135deg,#0f6b7a,#14a39a)' },
  { title: 'On-time delivery, every time', text: 'Reliable delivery so your service never runs short of stock.', emoji: '🚚', cta: 'Browse products', link: '/products', bg: 'linear-gradient(135deg,#1c2f6e,#0b3a8f)' }
];

export const FEATURES = [
  { icon: '❄️', title: 'Quality Products', text: 'Sourced directly from manufacturers and stored in cold storage.' },
  { icon: '🚚', title: 'On-Time Delivery', text: 'Dependable delivery schedules built around restaurant operations.' },
  { icon: '🛡️', title: 'Trusted Supplier', text: 'A single reliable partner for your daily and bulk needs.' },
  { icon: '🤝', title: 'Your Food Partner', text: 'We grow with your kitchen, from cafes to full-scale restaurants.' }
];

export const DELIVERY_STEPS = [
  { icon: '🏭', title: 'Sourced', text: 'Products picked up from manufacturers.' },
  { icon: '🧊', title: 'Stored', text: 'Held in cold storage till dispatch.' },
  { icon: '📦', title: 'Packed', text: 'Packed carefully to retain freshness.' },
  { icon: '🚚', title: 'Delivered', text: 'Delivered to your restaurant on time.' }
];

export const SERVED_SEGMENTS = ['Restaurants', 'Cafes', 'Cloud Kitchens', 'Fast Food Outlets', 'Caterers', 'Hotels', 'Sweet Shops', 'Bakeries'];
