"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "home", path: "/", active: true },
    { name: "social", path: "/social", active: false },
    { name: "ui", path: "/ui", active: false },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Menu Button - Fixed Top Left */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 left-6 z-50 p-2 hover:opacity-70 transition-opacity"
        aria-label="Toggle menu"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Top Right Icons */}
      <div className="fixed top-6 right-6 z-40 flex items-center gap-4">
        <Link href="/account" className="hover:opacity-70 transition-opacity">
          <Image
            src="/icons/ui/person.png"
            alt="Account"
            width={24}
            height={24}
          />
        </Link>
        <Link href="/cart" className="hover:opacity-70 transition-opacity">
          <Image src="/icons/ui/cart.png" alt="Cart" width={24} height={24} />
        </Link>
        <Link href="/wishlist" className="hover:opacity-70 transition-opacity">
          <Image
            src="/icons/ui/hearthn.png"
            alt="Wishlist"
            width={24}
            height={24}
          />
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-storm-white border-r border-storm-black transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-8 gap-6 mt-20">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`storm-nav text-lg transition-colors duration-200 ${
                link.active
                  ? "text-storm-black hover:text-storm-yellow cursor-pointer"
                  : "text-gray-400 cursor-not-allowed pointer-events-none"
              }`}
              onClick={() => link.active && setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 right-8">
          <Image
            src="/icons/xlogo.png"
            alt="STORM"
            width={48}
            height={48}
            className="opacity-10"
          />
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-storm-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;
