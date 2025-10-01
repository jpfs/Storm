"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: "PRODUCTS", path: "/products", active: true },
    { name: "ABOUT US", path: "/about", active: true },
    { name: "EVENTS", path: "/events", active: true },
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
        className="fixed top-8 left-8 z-200 p-2 hover:opacity-70 transition-opacity"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          // X Icon quando menu está aberto
          <Image src="/icons/ui/xlogo.png" alt="Close" width={50} height={50} />
        ) : (
          // Menu hamburger quando está fechado
          <Image
            src="/icons/ui/menu_3_bar.png"
            alt="Menu"
            width={50}
            height={50}
          />
        )}
      </button>

      {/* Center Logo */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-200">
        <Link href="/">
          <Image
            src="/icons/ui/front_logo.png"
            alt="STORM"
            width={60}
            height={60}
            className="hover:opacity-70 transition-opacity"
          />
        </Link>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-storm-yellow transform transition-transform duration-300 ease-in-out z-45 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "400px" }}
      >
        <nav
          className="h-full flex flex-col"
          style={{
            paddingLeft: "50px",
            paddingRight: "60px",
            paddingTop: "100px",
          }}
        >
          <div className="flex flex-col gap-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`storm-nav tracking-wide transition-all duration-200 block ${
                  link.active
                    ? "text-storm-black hover:text-storm-red hover:translate-x-2 cursor-pointer"
                    : "text-storm-gray-medium cursor-not-allowed pointer-events-none opacity-50"
                }`}
                onClick={() => link.active && setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
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
