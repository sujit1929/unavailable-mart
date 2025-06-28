import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      search: "Search products...",
      cart: "Cart",
      wishlist: "Wishlist",
      account: "Account",
      
      // Navigation
      home: "Home",
      products: "Products",
      categories: "Categories",
      deals: "Deals",
      
      // Categories
      electronics: "Electronics",
      clothing: "Clothing",
      books: "Books",
      home_garden: "Home & Garden",
      sports: "Sports",
      beauty: "Beauty",
      
      // Product
      add_to_cart: "Add to Cart",
      add_to_wishlist: "Add to Wishlist",
      buy_now: "Buy Now",
      product_details: "Product Details",
      reviews: "Reviews",
      specifications: "Specifications",
      price: "Price",
      rating: "Rating",
      availability: "In Stock",
      
      // Cart
      shopping_cart: "Shopping Cart",
      subtotal: "Subtotal",
      total: "Total",
      checkout: "Proceed to Checkout",
      remove: "Remove",
      quantity: "Quantity",
      empty_cart: "Your cart is empty",
      continue_shopping: "Continue Shopping",
      
      // Checkout
      billing_address: "Billing Address",
      shipping_address: "Shipping Address",
      payment_method: "Payment Method",
      place_order: "Place Order",
      order_summary: "Order Summary",
      
      // Footer
      about_us: "About Us",
      contact_us: "Contact Us",
      privacy_policy: "Privacy Policy",
      terms_service: "Terms of Service",
      help_center: "Help Center",
      
      // Common
      loading: "Loading...",
      error: "Error occurred",
      success: "Success",
      cancel: "Cancel",
      confirm: "Confirm",
      currency: "$",
      
      // Hero
      hero_title: "Discover Amazing Products",
      hero_subtitle: "Shop from millions of products with fast delivery",
      shop_now: "Shop Now",
    }
  },
  hi: {
    translation: {
      // Header
      search: "उत्पाद खोजें...",
      cart: "कार्ट",
      wishlist: "विशलिस्ट",
      account: "खाता",
      
      // Navigation
      home: "होम",
      products: "उत्पाद",
      categories: "श्रेणियां",
      deals: "डील्स",
      
      // Categories
      electronics: "इलेक्ट्रॉनिक्स",
      clothing: "कपड़े",
      books: "किताबें",
      home_garden: "घर और बगीचा",
      sports: "खेल",
      beauty: "सुंदरता",
      
      // Product
      add_to_cart: "कार्ट में जोड़ें",
      add_to_wishlist: "विशलिस्ट में जोड़ें",
      buy_now: "अभी खरीदें",
      product_details: "उत्पाद विवरण",
      reviews: "समीक्षाएं",
      specifications: "विशेषताएं",
      price: "कीमत",
      rating: "रेटिंग",
      availability: "स्टॉक में",
      
      // Cart
      shopping_cart: "शॉपिंग कार्ट",
      subtotal: "उप-योग",
      total: "कुल",
      checkout: "चेकआउट करें",
      remove: "हटाएं",
      quantity: "मात्रा",
      empty_cart: "आपका कार्ट खाली है",
      continue_shopping: "खरीदारी जारी रखें",
      
      // Checkout
      billing_address: "बिलिंग पता",
      shipping_address: "शिपिंग पता",
      payment_method: "भुगतान विधि",
      place_order: "ऑर्डर दें",
      order_summary: "ऑर्डर सारांश",
      
      // Footer
      about_us: "हमारे बारे में",
      contact_us: "संपर्क करें",
      privacy_policy: "गोपनीयता नीति",
      terms_service: "सेवा की शर्तें",
      help_center: "सहायता केंद्र",
      
      // Common
      loading: "लोड हो रहा है...",
      error: "त्रुटि हुई",
      success: "सफलता",
      cancel: "रद्द करें",
      confirm: "पुष्टि करें",
      currency: "₹",
      
      // Hero
      hero_title: "अद्भुत उत्पादों की खोज करें",
      hero_subtitle: "तेज़ डिलीवरी के साथ लाखों उत्पादों से खरीदारी करें",
      shop_now: "अभी खरीदारी करें",
    }
  },
  fr: {
    translation: {
      // Header
      search: "Rechercher des produits...",
      cart: "Panier",
      wishlist: "Liste de souhaits",
      account: "Compte",
      
      // Navigation
      home: "Accueil",
      products: "Produits",
      categories: "Catégories",
      deals: "Offres",
      
      // Categories
      electronics: "Électroniques",
      clothing: "Vêtements",
      books: "Livres",
      home_garden: "Maison et Jardin",
      sports: "Sports",
      beauty: "Beauté",
      
      // Product
      add_to_cart: "Ajouter au panier",
      add_to_wishlist: "Ajouter aux favoris",
      buy_now: "Acheter maintenant",
      product_details: "Détails du produit",
      reviews: "Avis",
      specifications: "Spécifications",
      price: "Prix",
      rating: "Note",
      availability: "En stock",
      
      // Cart
      shopping_cart: "Panier d'achat",
      subtotal: "Sous-total",
      total: "Total",
      checkout: "Passer la commande",
      remove: "Supprimer",
      quantity: "Quantité",
      empty_cart: "Votre panier est vide",
      continue_shopping: "Continuer les achats",
      
      // Checkout
      billing_address: "Adresse de facturation",
      shipping_address: "Adresse de livraison",
      payment_method: "Mode de paiement",
      place_order: "Passer la commande",
      order_summary: "Résumé de la commande",
      
      // Footer
      about_us: "À propos de nous",
      contact_us: "Nous contacter",
      privacy_policy: "Politique de confidentialité",
      terms_service: "Conditions de service",
      help_center: "Centre d'aide",
      
      // Common
      loading: "Chargement...",
      error: "Erreur survenue",
      success: "Succès",
      cancel: "Annuler",
      confirm: "Confirmer",
      currency: "€",
      
      // Hero
      hero_title: "Découvrez des produits incroyables",
      hero_subtitle: "Achetez parmi des millions de produits avec livraison rapide",
      shop_now: "Acheter maintenant",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;