"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useTranslations, useLocale } from "next-intl";

const ProductsPage = () => {
  const t = useTranslations("products");
  const locale = useLocale(); // ✅ idioma atual ("pt" ou "en")

  return (
    <div className="min-h-screen bg-white">
      {/* Espaço para o header fixo */}
      <div className="h-32" />

      {/* Header Section */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-3xl h-12 pb-10 mb-8">
          <Image
            src="/images/products/catalog/STORM_COLLECTION.png"
            alt="BRAIN STORM COLLECTION"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex justify-center px-4">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {products.map((product) => (
              <Link
                key={product.id}
                // ✅ agora o link inclui o idioma atual
                href={`/${locale}/products/${product.slug}`}
                className="group block"
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={product.catalogImage}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h2 className="storm-nav text-center text-sm md:text-base tracking-[0.3em] uppercase group-hover:text-storm-red group-hover:scale-105 transition-colors duration-500">
                  {product.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="h-32" />
    </div>
  );
};

export default ProductsPage;
