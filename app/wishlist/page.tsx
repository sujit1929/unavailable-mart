'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useStore } from '@/lib/store';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WishlistPage = () => {
  const { t } = useTranslation();
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Heart className="mx-auto h-24 w-24 text-gray-300 dark:text-gray-600 mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Your Wishlist is Empty
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Save items you love to your wishlist and shop them later.
            </p>
            <Link href="/products">
              <Button size="lg">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            My Wishlist ({wishlist.length} items)
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Items you've saved for later
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;