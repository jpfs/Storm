"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 z-30 p-10 pointer-events-none">
      {/* Logo Container */}
      <div className="fixed bottom-10 right-10 pointer-events-auto">
        <Link href="/" className="block group">
          <Image
            src="/icons/home/STORM_LOGO1-02.png"
            alt="STORM Logo"
            width={160}
            height={160}
            className="w-24 md:w-40 opacity-100 group-hover:opacity-60 transition-opacity duration-300"
          />
        </Link>
      </div>

      {/* Future Elements Container - Hidden for now */}
      {/* Descomentar quando quiseres adicionar mais elementos
      <div className="mt-4 space-y-2 pointer-events-auto">
        <div className="flex gap-4 text-storm-black">
          <Link href="/terms" className="text-sm hover:text-storm-yellow transition">
            Terms
          </Link>
          <Link href="/privacy" className="text-sm hover:text-storm-yellow transition">
            Privacy
          </Link>
        </div>
        <p className="text-xs text-storm-gray-dark">
          © 2025 STORM. All rights reserved.
        </p>
      </div>
      */}
    </footer>
  );
};

export default Footer;
