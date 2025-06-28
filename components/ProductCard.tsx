'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useStore, Product } from '@/lib/store';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart, addToWishlist, removeFromWishlist, wishlist, language } = useStore();

  const isInWishlist = wishlist.some(item => item.id === product.id);

  const getCurrency = () => {
    switch (language) {
      case 'hi': return '₹';
      case 'fr': return '€';
      default: return '$';
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/product/${product.id}`}>
        <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Wishlist Button */}
            <Button
              variant="ghost"
              size="sm"
              className={`absolute top-2 right-2 p-2 rounded-full ${
                isInWishlist
                  ? 'bg-red-100 text-red-600 hover:bg-red-200'
                  : 'bg-white/80 hover:bg-white'
              }`}
              onClick={handleToggleWishlist}
            >
              <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
            </Button>

            {/* Stock Badge */}
            {!product.inStock && (
              <Badge variant="destructive" className="absolute top-2 left-2">
                Out of Stock
              </Badge>
            )}
          </div>

          <CardContent className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {product.name}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {getCurrency()}{product.price}
              </span>
              <Badge variant="secondary" className="capitalize">
                {t(product.category)}
              </Badge>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {t('add_to_cart')}
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductCard;