// src/app/products/[slug]/ProductDetailPage.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Product, ColorVariant } from "@/data/products";

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product.colorVariants[0]
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [showSizeImages, setShowSizeImages] = useState(false);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [selectedColor]);

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === selectedColor.images.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handleColorChange = (variant: ColorVariant) => {
    setSelectedColor(variant);
  };

  const handleSizeClick = () => {
    setShowSizeImages(true);
    setTimeout(() => {
      setShowSizeImages(false);
    }, 5000);
  };

  const currentImage =
    selectedColor.images.gallery[selectedImageIndex] || product.catalogImage;
  const galleryImages =
    selectedColor.images.gallery.length > 0
      ? selectedColor.images.gallery
      : [product.catalogImage, product.catalogImage, product.catalogImage];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Spacer para o Header */}
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

      {/* GRID DE 3 COLUNAS */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-start">
          {/* COLUNA 1 - BOTÃO BACK */}
          <div className="hidden lg:flex items-end justify-start w-full pl-6 min-h-[450px]">
            <button
              onClick={() => window.history.back()}
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/icons/products/STORM_ICON_BACK.png"
                alt="Voltar"
                width={150}
                height={150}
                className="object-contain"
              />
            </button>
          </div>

          {/* COLUNA 2 - IMAGEM + SETA */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-6">
              {/* Imagem Principal */}
              <div className="relative w-[300px] max-h-[500px]">
                <Image
                  key={`${selectedColor.name}-${selectedImageIndex}`}
                  src={currentImage}
                  alt={`${product.name} - ${selectedColor.name}`}
                  width={300}
                  height={500}
                  className="object-contain w-full h-auto transition-opacity duration-300"
                  priority
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 justify-center">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${selectedColor.name}-thumb-${index}`}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-16 h-20 transition-all duration-200 ${
                      selectedImageIndex === index
                        ? "opacity-100 border-2 border-storm-black scale-105"
                        : "opacity-60 border border-transparent"
                    } hover:opacity-100 hover:scale-105`}
                  >
                    <Image
                      src={image}
                      alt={`View ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Seta Navegação */}
            <button
              onClick={handleNextImage}
              className="w-8 h-28 flex items-center justify-center hover:scale-110 transition-transform mt-32"
              aria-label="Next image"
            >
              <span className="text-3xl">›</span>
            </button>
          </div>

          {/* COLUNA 3 - DESCRIÇÃO */}
          <div className="flex flex-col gap-4 mt-6 mr-16 relative min-h-[600px]">
            {/* Nome */}
            <h1 className="storm-heading text-2xl md:text-4xl">
              {product.name}
            </h1>

            {/* Descrição */}
            <p className="storm-body text-sm leading-relaxed text-storm-gray-dark">
              {product.description}
            </p>

            {/* Features */}
            <div className="pt-0 mb-10">
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="flex items-center gap-1 storm-nav text-xs hover:text-storm-red transition-colors"
              >
                <span>FEATURES</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    isFeaturesOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  ›
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isFeaturesOpen
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="storm-body text-sm text-storm-gray-dark flex items-start"
                    >
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Guia de Tamanhos */}
            <div className="pt-0">
              <button onClick={handleSizeClick} className="w-[250px]">
                <Image
                  src="/icons/products/sizes.png"
                  alt="Size Guide"
                  width={300}
                  height={150}
                  className="w-full h-auto hover:opacity-80 transition-opacity"
                />
              </button>
            </div>

            {/* Seleção de Cor */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {product.colorVariants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => handleColorChange(variant)}
                    className="relative group"
                    title={variant.name}
                  >
                    <div
                      className={`w-8 h-8 rounded-full transition-all duration-200 group-hover:scale-110 ${
                        selectedColor.name === variant.name
                          ? "ring-2 ring-storm-black"
                          : "border-2 border-gray-300"
                      }`}
                      style={{ backgroundColor: variant.hex }}
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {variant.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ícones animados */}
            {showSizeImages && (
              <>
                <div className="absolute top-[190px] right-12 animate-[slideInBounceRight_0.6s_ease-out]">
                  <Image
                    src="/icons/products/STORM_ICON_NO.png"
                    alt="Size Guide 1"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                <div className="absolute top-[330px] left-0 animate-[slideInBounceLeft_0.6s_ease-out_0.2s_backwards]">
                  <Image
                    src="/icons/products/STORM_ICON_YESS.png"
                    alt="Size Guide 2"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </>
            )}

            {/* Botão Instagram */}
            <div className="pt-6">
              <a
                href="https://www.instagram.com/_storm_pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform inline-block"
              >
                <Image
                  src="/icons/products/STORM_ICON_BUY.png"
                  alt="Falar connosco no Instagram"
                  width={250}
                  height={250}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing final */}
      <div className="h-16" />

      {/* ANIMAÇÕES */}
      <style jsx>{`
        @keyframes slideInBounceRight {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.5) rotate(20deg);
          }
          60% {
            opacity: 1;
            transform: translateX(-20px) scale(1.05) rotate(-5deg);
          }
          80% {
            transform: translateX(10px) scale(0.98) rotate(2deg);
          }
          100% {
            transform: translateX(0px) scale(1) rotate(0deg);
          }
        }

        @keyframes slideInBounceLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px) scale(0.5) rotate(-20deg);
          }
          60% {
            opacity: 1;
            transform: translateX(20px) scale(1.05) rotate(5deg);
          }
          80% {
            transform: translateX(-10px) scale(0.98) rotate(-2deg);
          }
          100% {
            transform: translateX(0px) scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetailPage;
