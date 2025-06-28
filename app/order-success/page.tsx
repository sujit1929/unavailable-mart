'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const OrderSuccessPage = () => {
  const { t } = useTranslation();

  const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mb-6"
          >
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Order Placed Successfully!
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Thank you for your purchase. We've received your order and will process it shortly.
          </p>

          <Card className="max-w-md mx-auto mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Order Number:</span>
                  <span className="font-semibold">{orderNumber}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Estimated Delivery:</span>
                  <span className="font-semibold">{estimatedDelivery}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Order Placed
                </span>
              </div>
              
              <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 mx-4"></div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                  <Package className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Processing
                </span>
              </div>
              
              <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 mx-4"></div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                  <Truck className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Shipping
                </span>
              </div>
              
              <div className="flex-1 h-0.5 bg-gray-200 dark:bg-gray-700 mx-4"></div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                  <Home className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Delivered
                </span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg">
                Continue Shopping
              </Button>
            </Link>
            
            <Button variant="outline" size="lg">
              Track Order
            </Button>
            
            <Button variant="outline" size="lg">
              View Order Details
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              What happens next?
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• You'll receive an email confirmation shortly</li>
              <li>• We'll send you tracking information once your order ships</li>
              <li>• Your order will be delivered within 5-7 business days</li>
              <li>• Contact us if you have any questions about your order</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;