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
  const hoodieProducts = products.filter((p) =>
    p.categories.includes("hoodies")
  );

  // ✅ Scroll automático para hash (#tshirts, #hats, etc.) COM OFFSET
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -200;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
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
  }) => {
    const getTitleImage = (id: string) => {
      switch (id) {
        case "tshirts":
          return "/icons/catalog/STORM_TSHIRT.png";
        case "hats":
          return "/icons/catalog/STORM_CAP.png";
        case "hoodies":
          return "/icons/catalog/STORM_HOODIE.png";
        default:
          return null;
      }
    };

    return (
      <section id={id} className="mb-20 scroll-mt-32">
        {getTitleImage(id) ? (
          <div className="relative w-full max-w-[180px] h-16 mx-auto mb-8">
            <Image
              src={getTitleImage(id)!}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <h2 className="storm-nav text-center text-lg md:text-xl uppercase tracking-[0.3em]">
            {title}
          </h2>
        )}

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
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Espaço para o header fixo */}
      <div className="h-32 md:h-44" />

      {/* Header Section */}
      <div className="w-full flex justify-center px-12 sm:px-10 md:px-16 pt-4 sm:pt-0">
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
      <div className="max-w-6xl mx-auto px-12 sm:px-10 md:px-16">
        <ProductSection
          id="tshirts"
          title={t("tshirts")}
          items={tshirtProducts}
        />
        <ProductSection id="hats" title={t("hats")} items={hatProducts} />
        {/* Mostra hoodies quando existirem */}
        {hoodieProducts.length > 0 && (
          <ProductSection
            id="hoodies"
            title={t("hoodies")}
            items={hoodieProducts}
          />
        )}
      </div>

      <div className="h-32" />
    </div>
  );
};

export default ProductsPage;
