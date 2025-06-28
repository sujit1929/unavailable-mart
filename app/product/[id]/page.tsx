// app/product/[id]/page.tsx
// This is a Server Component

import { notFound } from 'next/navigation';
// Import the new getAllProductIds and your existing getProductById
import { getProductById, getAllProductIds } from '@/lib/products';
import ProductDetailPage from './ProductDetailPage';

// This function tells Next.js which dynamic paths to generate at build time
export async function generateStaticParams() {
  const productIds = getAllProductIds(); // Use the newly created function

  // Return an array of objects, where each object has the 'id' parameter
  return productIds.map((id) => ({
    id: id, // The key 'id' MUST match your dynamic segment '[id]'
  }));
}

interface ProductPageProps {
  params: {
    id: string;
  };
}

// This is your main page component (Server Component)
export default async function Page({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    // If the product is not found, Next.js will render a 404 page.
    // This is important for static export, as only existing products will be built.
    notFound(); 
  }

  // Pass the fetched product data as props to your Client Component
  return <ProductDetailPage product={product} />;
}