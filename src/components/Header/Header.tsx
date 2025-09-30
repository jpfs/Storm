"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "PRODUCTS", path: "/products", active: true },
    { name: "ABOUT US", path: "/about", active: true },
    { name: "EVENTS", path: "/events", active: false },
    { name: "CONTACT", path: "/contact", active: true },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Menu Button - Fixed Top Left */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 left-8 z-50 p-2 hover:opacity-70 transition-opacity bg-storm-white"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          // X Icon quando menu está aberto
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // Menu hamburger quando está fechado
          <Image
            src="/icons/ui/menu 3 bar.png"
            alt="Menu"
            width={28}
            height={28}
          />
        )}
      </button>

      {/* Center Logo */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40">
        <Link href="/">
          <Image
            src="/icons/ui/front_logo.png"
            alt="STORM"
            width={50}
            height={50}
            className="hover:opacity-70 transition-opacity"
          />
        </Link>
      </div>

      {/* Top Right Icons */}
      <div className="fixed top-8 right-8 z-40 flex items-center gap-6">
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
        className={`fixed top-0 left-0 h-full w-72 bg-storm-white border-r border-storm-black transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-12 gap-8 mt-24">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-2xl font-poppins tracking-wide transition-colors duration-200 ${
                link.active
                  ? "text-storm-black hover:text-storm-yellow cursor-pointer"
                  : "text-gray-300 cursor-not-allowed pointer-events-none line-through"
              }`}
              onClick={() => link.active && setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
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
