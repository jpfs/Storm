"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const AboutPage = () => {
  const t = useTranslations("about");
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.startsWith("/en") ? "en" : "pt";

  return (
    <div className="min-h-screen bg-white relative">
      {/* Espaço para compensar o Header fixo */}
      <div className="h-28" />

      {/* Container principal */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* BOTÃO VOLTAR */}
        <div className="absolute top-36 left-8 hidden lg:block">
          <button
            onClick={() => router.back()}
            className="hover:scale-110 transition-transform"
          >
            <Image
              src={`/icons/products/STORM_ICON_BACK_${
                currentLocale === "en" ? "EN" : "PT"
              }.png`}
              alt={t("backAlt")}
              width={120}
              height={120}
              className="object-contain"
            />
          </button>
        </div>

        {/* TÍTULO “ABOUT US” */}
        <div className="relative w-[55%] sm:w-[75%] md:max-w-xl h-16 mb-6 mt-4 flex justify-center">
          <Image
            key={`title-${currentLocale}`}
            src={`/images/about_us/STORM_ABOUT_US_TITLE_${
              currentLocale === "en" ? "EN" : "PT"
            }.png`}
            alt="About Us"
            fill
            unoptimized
            className="object-contain"
            priority
          />
        </div>

        {/* IMAGEM PRINCIPAL (DIAGRAMA) */}
        <div className="relative w-full max-w-4xl aspect-[16/9] mb-12">
          <Image
            key={`diagram-${currentLocale}`} // força reload ao trocar idioma
            src={`/images/about_us/STORM_ABOUT_US_DIAGRAM_${
              currentLocale === "en" ? "EN" : "PT"
            }.png`}
            alt="STORM Values - A way of living"
            fill
            unoptimized
            className="object-contain"
            priority
          />
        </div>

        {/* --- SECÇÃO COM VÍDEO E TEXTO --- */}
        <section className="w-full flex flex-col items-center justify-center text-center mt-10 mb-24 px-6">
          {/* VÍDEO */}
          <div className="relative w-full max-w-sm aspect-[3/4] mb-20 overflow-hidden rounded">
            <video
              src="/images/about_us/1REELS_STORM3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          </div>

          {/* TEXTO DESCRITIVO */}
          <div className="max-w-2xl text-storm-black leading-relaxed tracking-wide text-sm md:text-base">
            <p className="mb-6">{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>
          </div>
        </section>
      </div>

      {/* Espaço final */}
      <div className="h-16" />
    </div>
  );
};

export default AboutPage;
