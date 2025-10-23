"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Product, ColorVariant } from "@/data/products";
import { useTranslations } from "next-intl";

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const pathname = usePathname();
  const locale: "pt" | "en" = pathname.startsWith("/en") ? "en" : "pt";
  const t = useTranslations("productDetail");
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState<ColorVariant>(
    product.colorVariants[0]
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [showSizeImages, setShowSizeImages] = useState(false);

  // 🔧 Refs para posicionar os ícones
  const sizeGuideRef = useRef<HTMLDivElement>(null);
  const colorSectionRef = useRef<HTMLDivElement>(null);
  const [sizeGuidePos, setSizeGuidePos] = useState({ top: 0, left: 0 });
  const [colorSectionPos, setColorSectionPos] = useState({ top: 0, left: 0 });

  // 👉 Swipe (mobile)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    // detectar swipe horizontal significativo
    const THRESHOLD = 40;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
      if (dx < 0) {
        handleNextImage(); // swipe left → próxima
      } else {
        handlePrevImage(); // swipe right → anterior
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  // 📐 Atualiza posição dos ícones (corrigido com delay pós-animação)
  useEffect(() => {
    const updatePositions = () => {
      if (sizeGuideRef.current) {
        const rect = sizeGuideRef.current.getBoundingClientRect();
        setSizeGuidePos({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
      if (colorSectionRef.current) {
        const rect = colorSectionRef.current.getBoundingClientRect();
        setColorSectionPos({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    };

    updatePositions();

    window.addEventListener("resize", updatePositions);
    window.addEventListener("scroll", updatePositions);

    // 🪄 Espera a animação das características terminar antes de recalcular
    const timeout = setTimeout(updatePositions, 400);

    return () => {
      window.removeEventListener("resize", updatePositions);
      window.removeEventListener("scroll", updatePositions);
      clearTimeout(timeout);
    };
  }, [showSizeImages, isFeaturesOpen, locale]);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [selectedColor]);

  const handleNextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === selectedColor.images.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? selectedColor.images.gallery.length - 1 : prev - 1
    );
  };

  const handleColorChange = (variant: ColorVariant) => {
    setSelectedColor(variant);
  };

  const handleSizeClick = () => {
    setShowSizeImages(true);
    setTimeout(() => {
      setShowSizeImages(false);
    }, 10000);
  };

  // ✅ fallback para main image caso gallery esteja vazia
  const galleryImages =
    selectedColor.images.gallery.length > 0
      ? selectedColor.images.gallery
      : [selectedColor.images.main];

  const currentImage = galleryImages[selectedImageIndex];
  const L = locale === "en" ? "EN" : "PT";

  return (
    <div className="min-h-screen bg-white relative">
      {/* Spacer para o Header */}
      <div className="h-32 md:h-44" />

      {/* Header Section */}
      <div className="w-full flex justify-center px-12 sm:px-10 md:px-16 pt-4 sm:pt-0">
        <div className="relative w-full max-w-3xl h-12 pb-10 mb-8">
          <Image
            src={`/images/products/catalog/STORM_COLLECTION_${L}.png`}
            alt={`BRAIN STORM COLLECTION ${L}`}
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
          <div className="hidden lg:flex items-start justify-start w-full pl-6 min-h-[450px]">
            <button
              onClick={() => router.back()}
              className="hover:scale-110 transition-transform"
            >
              <Image
                src={`/icons/products/STORM_ICON_BACK_${L}.png`}
                alt={t("backAlt")}
                width={120}
                height={120}
                className="object-contain"
              />
            </button>
          </div>

          {/* COLUNA 2 - IMAGEM + SETA */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-6">
              {/* Imagem Principal (com swipe no mobile) */}
              <div
                className="relative w-[300px] max-h-[500px]"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                aria-live="polite"
              >
                <Image
                  key={`${selectedColor.hex}-${selectedImageIndex}`}
                  src={currentImage}
                  alt={`${product.name} - ${selectedColor.name[locale]}`}
                  width={300}
                  height={500}
                  className="object-contain w-full h-auto transition-opacity duration-300"
                  priority
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 justify-center mb-10">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${selectedColor.hex}-thumb-${index}`}
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

            {/* Seta Navegação (escondida no mobile) */}
            <button
              onClick={handleNextImage}
              className="hidden md:flex w-8 h-28 items-center justify-center hover:scale-110 transition-transform mt-32"
              aria-label={t("nextImage")}
            >
              <span className="text-3xl">›</span>
            </button>
          </div>

          {/* COLUNA 3 - DESCRIÇÃO */}
          <div className="flex flex-col gap-1 relative min-h-[600px] mx-6 sm:mx-10 md:mx-0 md:mr-16">
            {/* Nome */}
            <h1 className="storm-title text-2xl md:text-3xl">{product.name}</h1>

            {/* Descrição */}
            <div
              className="storm-body text-sm leading-relaxed text-storm-gray-dark pt-4"
              dangerouslySetInnerHTML={{ __html: product.description[locale] }}
            />

            {/* Features */}
            <div className="pt-0 mb-8">
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="flex items-center gap-1 text-[1.2rem] hover:text-storm-red transition-colors storm-body"
              >
                <span>{t("features")}</span>
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
                  {product.features[locale].map((feature, index) => (
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
            <div className="pt-0" ref={sizeGuideRef}>
              <button onClick={handleSizeClick} className="w-[250px]">
                <Image
                  src="/icons/products/sizes.png"
                  alt={t("sizeGuide")}
                  width={300}
                  height={150}
                  className="w-full h-auto hover:opacity-80 transition-opacity"
                />
              </button>
            </div>

            {/* Seleção de Cor */}
            <div className="space-y-2" ref={colorSectionRef}>
              <div className="flex items-center gap-3">
                {product.colorVariants.map((variant) => (
                  <button
                    key={variant.hex}
                    onClick={() => handleColorChange(variant)}
                    className="relative group"
                    title={variant.name[locale]}
                  >
                    <div
                      className={`w-8 h-8 rounded-full transition-all duration-200 group-hover:scale-110 ${
                        selectedColor.hex === variant.hex
                          ? "ring-2 ring-storm-black"
                          : "border-2 border-gray-300"
                      }`}
                      style={{ backgroundColor: variant.hex }}
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {variant.name[locale]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ícones animados */}
            {showSizeImages && (
              <>
                {/* Ícone NO → fixo acima do Guia de Tamanhos */}
                {sizeGuideRef.current && (
                  <div
                    className="absolute animate-[slideInBounceRight_0.6s_ease-out] pointer-events-none"
                    style={{
                      top: `${sizeGuideRef.current.offsetTop - 50}px`,
                      left: `${sizeGuideRef.current.offsetLeft + 180}px`,
                    }}
                  >
                    <Image
                      src={`/icons/products/STORM_ICON_NO_${L}.png`}
                      alt="Size Guide NO"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Ícone YESS → fixo abaixo e à esquerda da Seleção de Cor */}
                {colorSectionRef.current && (
                  <div
                    className="absolute animate-[slideInBounceLeft_0.6s_ease-out_0.2s_backwards] pointer-events-none"
                    style={{
                      top: `${colorSectionRef.current.offsetTop + 20}px`,
                      left: `${colorSectionRef.current.offsetLeft - 10}px`,
                    }}
                  >
                    <Image
                      src={`/icons/products/STORM_ICON_YESS_${L}.png`}
                      alt="Color Section YESS"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                )}
              </>
            )}

            {/* Botão Instagram */}
            <div className="pt-10">
              <a
                href="https://www.instagram.com/_storm_pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform inline-block"
              >
                <Image
                  src={`/icons/products/STORM_ICON_BUY_${L}.png`}
                  alt={t("buyOnInsta")}
                  width={200}
                  height={200}
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
