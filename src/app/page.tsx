import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-storm-white flex items-center justify-center relative overflow-hidden">
      {/* Container principal */}
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        {/* 100% COTTON - Top Left */}
        <div className="absolute top-12 left-12">
          <p className="text-base font-poppins tracking-wider mb-2">
            100% COTTON
          </p>
          <svg
            className="w-24"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10 10 Q 50 35, 90 10"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        {/* STORM - Top Right */}
        <div className="absolute top-12 right-12 flex items-start gap-2">
          <svg
            className="w-16 mt-1"
            viewBox="0 0 80 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 70 10 L 10 50"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <p className="text-base font-poppins tracking-wider">STORM</p>
        </div>

        {/* BRAIN STORM COLLECTION - Bottom Left */}
        <div className="absolute bottom-16 left-12">
          <svg
            className="w-20 mb-2"
            viewBox="0 0 80 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 10 10 L 70 50"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <p className="text-base font-poppins tracking-wider leading-tight">
            BRAIN STORM
          </p>
          <p className="text-base font-poppins tracking-wider leading-tight">
            COLLECTION
          </p>
        </div>

        {/* ORIGINAL DESIGN - Bottom Right */}
        <div className="absolute bottom-16 right-12 flex items-end gap-2">
          <svg
            className="w-20 mb-2"
            viewBox="0 0 80 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 70 10 L 10 50"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <div className="text-right">
            <p className="text-base font-poppins tracking-wider leading-tight">
              ORIGINAL
            </p>
            <p className="text-base font-poppins tracking-wider leading-tight">
              DESIGN
            </p>
          </div>
        </div>

        {/* CENTER - Main Product Image */}
        <div className="relative w-[380px] h-[520px] bg-stone-200 rounded-sm overflow-hidden shadow-2xl">
          <Image
            src="/images/products/home/main-product.jpg"
            alt="STORM Product"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Bottom Right Logo */}
      <div className="fixed bottom-10 right-10 z-30">
        <Link href="/">
          <Image
            src="/icons/social/STORMLOGO1-02.png"
            alt="STORM Logo"
            width={120}
            height={120}
            className="w-24 opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>
    </main>
  );
}
