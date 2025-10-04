import Image from "next/image";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden p-8">
      {/* CONTAINER ÚNICO - Tudo escala junto proporcionalmente */}
      <div className="relative w-full max-w-[1200px] aspect-[16/10] flex items-center justify-center">
        {/* Corner Elements - Z-index mais alto para garantir hover */}
        <CornerElement
          position="top-left"
          text="100% COTTON"
          icon="/icons/home/left_up_arrow.png"
        />

        <CornerElement
          position="top-right"
          text="STORM"
          icon="/icons/home/right_up_arrow.png"
        />

        <CornerElement
          position="bottom-left"
          text="BRAIN STORM COLLECTION"
          icon="/icons/home/left_down_arrow.png"
        />

        <CornerElement
          position="bottom-right"
          text="ORIGINAL DESIGN"
          icon="/icons/home/right_down_arrow.png"
        />

        {/* CENTER - GIF do Produto com pointer-events-none */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[23%] aspect-[9/16] bg-black rounded-sm overflow-hidden z-20 pointer-events-none">
          <Image
            src="/images/products/home/video_website.gif"
            alt="STORM Product Animation"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>
    </main>
  );
};

// Componente com posicionamento PERCENTUAL
const CornerElement = ({
  position,
  text,
  icon,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  text: string;
  icon: string;
}) => {
  const positionClasses = {
    "top-left": "top-[14%] left-[24%]",
    "top-right": "top-[10%] right-[22%]",
    "bottom-left": "bottom-[8%] left-[24%]",
    "bottom-right": "bottom-[8%] right-[24%]",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} flex items-center gap-3 group z-50 cursor-pointer`}
    >
      {/* Seta com animação de hover */}
      <div className="relative w-[clamp(100px,15vw,180px)] aspect-square">
        <Image
          src={icon}
          alt={text}
          fill
          className="object-contain transition-transform duration-300 ease-out group-hover:scale-125"
          priority
        />
      </div>
    </div>
  );
};

export default HomePage;
