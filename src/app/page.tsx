import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden p-8">
      {/* CONTAINER ÚNICO - Tudo escala junto proporcionalmente */}
      <div className="relative w-full max-w-[1200px] aspect-[16/10] flex items-center justify-center">
        {/* Corner Elements - Posicionados em relação ao container pai */}
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

        {/* CENTER - Main Product Video - SEM BLACK BARS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[23%] aspect-[9/16] bg-black rounded-sm overflow-hidden shadow-2xl z-20">
          {/* Container com overflow hidden para cortar as barras */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/2cEeirmTuB4?autoplay=1&mute=1&loop=1&playlist=2cEeirmTuB4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
              title="STORM Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[112.5%] border-0 pointer-events-none"
            />
          </div>

          {/* Overlay para bloquear interações */}
          <div className="absolute inset-0 z-10 pointer-events-auto cursor-default" />
        </div>
      </div>

      {/* Bottom Right Logo */}
      <div className="fixed bottom-10 right-10 z-30">
        <Link href="/" className="block">
          <Image
            src="/icons/home/STORM_LOGO1-02.png"
            alt="STORM Logo"
            width={160}
            height={160}
            className="w-32 md:w-40 opacity-100 hover:opacity-60 transition-opacity"
          />
        </Link>
      </div>
    </main>
  );
};

// Componente com posicionamento PERCENTUAL (escala com o container)
const CornerElement = ({
  position,
  text,
  icon,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  text: string;
  icon: string;
}) => {
  // Posições em PERCENTAGEM para escalar proporcionalmente
  const positionClasses = {
    "top-left": "top-[14%] left-[24%]",
    "top-right": "top-[10%] right-[22%]",
    "bottom-left": "bottom-[8%] left-[24%]",
    "bottom-right": "bottom-[8%] right-[24%]",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} flex items-center gap-3 group z-40`}
    >
      {/* Tamanho da arrow em % da largura do container */}
      <div className="relative w-[clamp(100px,15vw,180px)] aspect-square">
        <Image
          src={icon}
          alt={text}
          fill
          className="object-contain transition-transform group-hover:scale-130 duration-300"
        />
      </div>
    </div>
  );
};

export default HomePage;
