"use client";

import Image from "next/image";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden p-4 md:p-8">
      {/* MOBILE: container fluido | DESKTOP: proporção fixa */}
      <div className="relative w-full h-[60vh] md:h-auto md:max-w-[1200px] md:aspect-[16/10] flex items-start justify-center pt-20 md:pt-32">
        {/* WRAPPER central: GIF + setas escalam juntos */}
        <div className="relative w-[45%] md:w-[23%] aspect-[9/16]">
          {/* GIF central — sem eventos para não cortar hover das setas */}
          <div className="absolute inset-0 bg-black rounded-sm overflow-hidden z-20 pointer-events-none">
            <Image
              src="/images/products/home/video_website.gif"
              alt="STORM Product Animation"
              fill
              className="object-cover select-none"
              priority
              unoptimized
              draggable={false}
            />
          </div>

          {/* SETAS – hover individual */}
          <Arrow pos="tl" icon="/icons/home/left_up_arrow.png" />
          <Arrow pos="tr" icon="/icons/home/right_up_arrow.png" />
          <Arrow pos="bl" icon="/icons/home/left_down_arrow.png" />
          <Arrow pos="br" icon="/icons/home/right_down_arrow.png" />
        </div>
      </div>
    </main>
  );
};

function Arrow({
  pos,
  icon,
}: {
  pos: "tl" | "tr" | "bl" | "br";
  icon: string;
}) {
  // Posições afinadas; ajusta os % se quiseres mais perto/longe do GIF
  const map: Record<string, { anchor: string; offset: string; size: string }> =
    {
      tl: {
        anchor: "top-4 right-44",
        offset:
          "-translate-x-[15%] -translate-y-[34%] md:-translate-x-[55%] md:-translate-y-[46%]",
        size: "w-[54%] md:w-[60%]",
      },
      tr: {
        anchor: "top-0 left-44",
        offset:
          "translate-x-[10%] -translate-y-[65%] md:translate-x-[55%] md:-translate-y-[46%]",
        size: "w-[54%] md:w-[60%]",
      },
      bl: {
        anchor: "bottom-0 right-36",
        offset:
          "-translate-x-[25%] translate-y-[10%] md:-translate-x-[60%] md:translate-y-[48%]",
        size: "w-[54%] md:w-[60%]",
      },
      br: {
        anchor: "bottom-0 left-44",
        offset:
          "translate-x-[10%] translate-y-[36%] md:translate-x-[55%] md:translate-y-[48%]",
        size: "w-[54%] md:w-[60%]",
      },
    };

  const { anchor, offset, size } = map[pos];

  return (
    <div
      className={[
        "absolute",
        anchor,
        offset,
        size,
        "aspect-square z-30",
        "transition-transform duration-300 ease-out",
        "hover:scale-110",
        "cursor-pointer",
        "pointer-events-auto",
      ].join(" ")}
    >
      <Image
        src={icon}
        alt="Arrow"
        fill
        className="object-contain select-none"
        priority
        draggable={false}
      />
    </div>
  );
}

export default HomePage;
