"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const AboutPage = () => {
  const t = useTranslations("about");
  const pathname = usePathname();
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
            onClick={() => window.history.back()}
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
        <div className="relative w-full max-w-xl h-16 mb-10 mt-4 flex justify-center">
          <Image
            src="/images/about us/STORM_ABOUT_US_TITLE.png"
            alt="About Us"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* IMAGEM PRINCIPAL */}
        <div className="relative w-full max-w-4xl aspect-[16/9] mb-16">
          <Image
            src="/images/about us/STORM_ABOUT_US_DIAGRAM.png"
            alt="STORM Values - A way of living"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* --- SECÇÃO COM GIF E TEXTO --- */}
        <section className="w-full flex flex-col items-center justify-center text-center mt-10 mb-24 px-6">
          {/* GIF */}
          <div className="relative w-full max-w-sm aspect-[3/4] mb-10">
            <Image
              src="/images/about us/1REELS_STORM3.gif"
              alt="Storm Rider"
              fill
              unoptimized
              className="object-cover rounded"
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
