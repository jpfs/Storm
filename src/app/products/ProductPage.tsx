"use client";

import Image from "next/image";
import Link from "next/link";

const ProductsPage = () => {
  const products = [
    {
      id: "struggle",
      name: "STRUGGLE",
      image: "/images/products/catalog/STORM-left.jpg",
      slug: "struggle",
    },
    {
      id: "simple",
      name: "SIMPLE",
      image: "/images/products/catalog/STORM-center.jpg",
      slug: "simple",
    },
    {
      id: "how-to",
      name: "HOW TO",
      image: "/images/products/catalog/STORM-right.jpg",
      slug: "how-to",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Spacer para compensar o Header fixo */}
      <div className="h-40" />

      {/* Header Section - IMAGEM */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-3xl h-12 pb-12 mb-12">
          <Image
            src="/images/products/catalog/STORM_COLLECTION.png"
            alt="BRAIN STORM COLLECTION"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Products Grid - CENTRALIZADO */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group block"
              >
                {/* Product Image Container */}
                <div className="relative w-full aspect-[3/4] bg-transparent overflow-hidden mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Name */}
                <h2 className="storm-nav text-center text-sm md:text-base tracking-[0.3em] uppercase group-hover:text-storm-red transition-colors duration-300">
                  {product.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-32" />
    </div>
  );
};

export default ProductsPage;
