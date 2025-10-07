"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { products } from "@/data/products";
import { useEffect } from "react";

const ProductsPage = () => {
  const t = useTranslations("products");
  const locale = useLocale();

  const tshirtProducts = products.filter((p) =>
    p.categories.includes("tshirts")
  );
  const hatProducts = products.filter((p) => p.categories.includes("hats"));

  // ✅ Scroll automático para hash ( #tshirts, #hats)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // ✅ imagem de cabeçalho dinâmica conforme idioma
  const collectionImage =
    locale === "en"
      ? "/images/products/catalog/STORM_COLLECTION_EN.png"
      : "/images/products/catalog/STORM_COLLECTION_PT.png";

  // ✅ Componente auxiliar para renderizar secções
  const ProductSection = ({
    title,
    items,
    id,
  }: {
    title: string;
    items: typeof products;
    id: string;
  }) => (
    <section id={id} className="mb-20 scroll-mt-32">
      <h2 className="storm-nav text-center text-lg md:text-xl uppercase tracking-[0.3em]">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {items.map((product) => (
          <Link
            key={product.id}
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

            <h3 className="storm-nav text-center text-sm md:text-base tracking-[0.3em] uppercase group-hover:text-storm-red transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Espaço para o header fixo */}
      <div className="h-32" />

      {/* Header Section */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-3xl h-12 pb-10 mb-8">
          <Image
            src={collectionImage}
            alt="BRAIN STORM COLLECTION"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* STORE */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <ProductSection
          id="tshirts"
          title={t("tshirts")}
          items={tshirtProducts}
        />
        <ProductSection id="hats" title={t("hats")} items={hatProducts} />
      </div>

      <div className="h-32" />
    </div>
  );
};

export default ProductsPage;
