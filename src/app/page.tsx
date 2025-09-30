import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-storm-white flex items-center justify-center relative overflow-hidden">
      {/* Container principal */}
      <div className="relative w-full max-w-5xl flex items-center justify-center px-4">
        {/* Corner Elements - usando componentes reutilizáveis */}
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

        {/* CENTER - Main Product video */}
        <div className="relative w-[380px] h-[520px] bg-storm-black rounded-sm overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/shorts/2cEeirmTuB4"
            title="STORM Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
            style={{
              border: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Bottom Right Logo */}
      <div className="fixed bottom-10 right-10 z-30">
        <Link href="/" className="block">
          <Image
            src="/icons/home/STORM_LOGO1-02.png"
            alt="STORM Logo"
            width={320}
            height={320}
            className="w-24 opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>
    </main>
  );
};

// Componente reutilizável para os elementos dos cantos
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
    "top-left": "top-12 left-12",
    "top-right": "top-12 right-12",
    "bottom-left": "bottom-16 left-12",
    "bottom-right": "bottom-16 right-12",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} flex items-center gap-2 group`}
    >
      <div className="relative w-[120px] h-[120px]">
        <Image
          src={icon}
          alt={text}
          fill
          className="object-contain transition-transform group-hover:scale-110 duration-300"
        />
      </div>
      <span className="storm-nav text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {text}
      </span>
    </div>
  );
};

export default HomePage;
