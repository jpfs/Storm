// src/app/about/AboutPage.tsx
"use client";

import Image from "next/image";

const AboutPage = () => {
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
              src="/icons/products/STORM_ICON_BACK.png"
              alt="Voltar"
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

        {/* --- NOVA SECÇÃO COM GIF E TEXTO --- */}
        <section className="w-full flex flex-col items-center justify-center text-center mt-10 mb-24 px-6">
          {/* GIF — agora mais pequeno */}
          <div className="relative w-full max-w-sm aspect-[3/4] mb-10">
            <Image
              src="/images/about us/STORM_ABOUT_US_RIDER.gif"
              alt="Storm Rider"
              fill
              unoptimized
              className="object-cover rounded"
            />
          </div>

          {/* TEXTO DESCRITIVO */}
          <div className="max-w-2xl text-storm-black leading-relaxed tracking-wide text-sm md:text-base">
            <p className="mb-6">
              STORM exists to celebrate the life of riding, on any board, on any
              ground, in any storm. Our mission is to unite surfers, skaters,
              and riders of every style under one shared passion: the freedom of
              movement and the love of boards.
            </p>
            <p>
              We don’t believe in comparing or competing to see which sport is
              the “toughest.” Instead, we stand for connection, respect, and the
              joy of the ride. STORM is not just a clothing brand, it’s a way of
              living, inspired by the energy of the ocean, the streets, and the
              mountains. At its core, STORM is about one community, one spirit,
              and one ride.
            </p>
          </div>
        </section>
      </div>

      {/* Espaço final */}
      <div className="h-16" />
    </div>
  );
};

export default AboutPage;
