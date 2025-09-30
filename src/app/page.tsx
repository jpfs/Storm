import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-storm-white flex items-center justify-center px-4 md:px-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Section - 100% Cotton Label */}
        <div className="flex flex-col items-center md:items-start">
          <div className="relative">
            <p className="text-sm md:text-base font-poppins tracking-wider mb-2">
              100% COTTON
            </p>
            <svg
              className="w-16 md:w-20"
              viewBox="0 0 80 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 20 Q 30 10, 50 20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* Arrow pointing to image */}
          <div className="mt-8 md:mt-12">
            <Image
              src="/icons/home/left_down_arrow.png"
              alt="Arrow"
              width={40}
              height={40}
              className="w-8 md:w-10"
            />
          </div>
        </div>

        {/* Center Section - Main Product Image */}
        <div className="relative flex-shrink-0">
          <div className="relative w-[280px] h-[400px] md:w-[360px] md:h-[520px] bg-storm-gray-light rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/products/home/main-product.jpg"
              alt="STORM Product"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* STORM Label - Top Right */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
            <div className="relative">
              <p className="storm-heading text-lg md:text-xl tracking-wider">
                STORM
              </p>
              <Image
                src="/icons/home/right_up_arrow.png"
                alt="Arrow"
                width={40}
                height={40}
                className="absolute -right-10 top-0 w-8 md:w-10"
              />
            </div>
          </div>

          {/* Original Design Label - Bottom Right */}
          <div className="absolute -bottom-4 -right-8 md:-bottom-6 md:-right-12">
            <div className="relative flex items-center gap-2">
              <Image
                src="/icons/home/left_up_arrow.png"
                alt="Arrow"
                width={40}
                height={40}
                className="w-8 md:w-10"
              />
              <div className="text-right">
                <p className="text-sm md:text-base font-poppins tracking-wide">
                  ORIGINAL
                </p>
                <p className="text-sm md:text-base font-poppins tracking-wide">
                  DESIGN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Brain Storm Collection */}
        <div className="flex flex-col items-center md:items-end">
          <div className="relative">
            <div className="text-center md:text-right">
              <p className="text-sm md:text-base font-poppins tracking-wider">
                BRAIN STORM
              </p>
              <p className="text-sm md:text-base font-poppins tracking-wider">
                COLLECTION
              </p>
            </div>
            <Image
              src="/icons/home/left_down_arrow.png"
              alt="Arrow"
              width={40}
              height={40}
              className="absolute -left-12 bottom-0 w-8 md:w-10"
            />
          </div>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="fixed bottom-8 right-8">
        <Link href="/">
          <Image
            src="/icons/xlogo.png"
            alt="STORM Logo"
            width={80}
            height={80}
            className="w-16 md:w-20 opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>
      </div>
    </main>
  );
}
