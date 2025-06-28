import { Product } from './store';

// Mock product data with Unsplash images
export const generateProducts = (): Product[] => {
  const categories = ['electronics', 'clothing', 'books', 'home_garden', 'sports', 'beauty'];
  const products: Product[] = [];
  
  const productNames = {
    electronics: [
      'Wireless Bluetooth Headphones',
      'Smartphone Pro Max',
      'Laptop Gaming Edition',
      '4K Smart TV',
      'Wireless Charging Pad',
      'Smart Watch Series',
      'Bluetooth Speaker',
      'Tablet Pro',
    ],
    clothing: [
      'Premium Cotton T-Shirt',
      'Designer Jeans',
      'Casual Hoodie',
      'Business Suit',
      'Summer Dress',
      'Winter Jacket',
      'Running Shoes',
      'Leather Boots',
    ],
    books: [
      'The Art of Programming',
      'Business Strategy Guide',
      'Creative Writing Masterclass',
      'Science Fiction Novel',
      'History of Innovation',
      'Philosophy Essentials',
      'Cooking Masterbook',
      'Travel Photography',
    ],
    home_garden: [
      'Modern Coffee Table',
      'Garden Tool Set',
      'Smart Home Security System',
      'Decorative Plant Pot',
      'LED Floor Lamp',
      'Kitchen Appliance Set',
      'Outdoor Furniture',
      'Wall Art Collection',
    ],
    sports: [
      'Professional Tennis Racket',
      'Yoga Mat Premium',
      'Fitness Tracker',
      'Basketball Official',
      'Swimming Goggles',
      'Gym Equipment Set',
      'Running Gear',
      'Cycling Helmet',
    ],
    beauty: [
      'Skincare Routine Set',
      'Professional Makeup Kit',
      'Hair Care Collection',
      'Fragrance Premium',
      'Nail Art Kit',
      'Facial Cleansing Device',
      'Organic Body Lotion',
      'Anti-Aging Cream',
    ]
  };

  const unsplashCategories = {
    electronics: 'technology',
    clothing: 'fashion',
    books: 'books',
    home_garden: 'home',
    sports: 'sports',
    beauty: 'beauty'
  };

  let productId = 1;

  categories.forEach(category => {
    productNames[category as keyof typeof productNames].forEach((name, index) => {
      products.push({
        id: productId.toString(),
        name,
        price: Math.floor(Math.random() * 1000) + 50,
        image: `https://images.unsplash.com/photo-${1500000000000 + productId * 86400000}?w=400&h=400&fit=crop&crop=center&auto=format&q=80`,
        description: `High-quality ${name.toLowerCase()} with excellent features and modern design. Perfect for everyday use with premium materials and craftsmanship.`,
        category,
        rating: Math.floor(Math.random() * 20 + 30) / 10, // 3.0 to 5.0
        reviews: Math.floor(Math.random() * 1000) + 10,
        inStock: Math.random() > 0.1, // 90% in stock
      });
      productId++;
    });
  });

  return products;
};

export const mockProducts = generateProducts();

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};