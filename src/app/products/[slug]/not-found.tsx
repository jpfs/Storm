// src/app/products/[slug]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="storm-heading text-6xl">404</h1>
        <h2 className="storm-nav text-2xl">PRODUCT NOT FOUND</h2>
        <p className="storm-body text-storm-gray-dark">
          The product you're looking for doesn't exist.
        </p>
        <Link
          href="/products"
          className="inline-block px-8 py-4 bg-storm-black text-storm-white storm-nav text-sm hover:bg-storm-red transition-colors"
        >
          BACK TO PRODUCTS
        </Link>
      </div>
    </div>
  );
}
