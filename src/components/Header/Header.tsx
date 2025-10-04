"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [language, setLanguage] = useState("pt");

  const navigationLinks = [
    { name: "PRODUCTS", path: "/products", active: true, hasSubmenu: true },
    { name: "ABOUT US", path: "/about", active: true },
  ];

  const productSubLinks = [
    { name: "Loja", path: "/products" },
    { name: "T-Shirts", path: "/products" },
    { name: "Chapéus", path: "/products" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 left-8 z-[200] p-2 hover:opacity-70 transition-opacity"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <Image src="/icons/ui/xlogo.png" alt="Close" width={50} height={50} />
        ) : (
          <Image
            src="/icons/ui/menu_3_bar.png"
            alt="Menu"
            width={50}
            height={50}
          />
        )}
      </button>

      {/* Center Logo */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[200]">
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

      {/* Right Side Buttons */}
      <div className="fixed top-8 right-8 z-[200] flex items-center gap-4">
        {/* Instagram & Email Group */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/_storm_pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Instagram"
          >
            <Image
              src="/icons/ui/STORM_LOGO_INSTA.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>
          <a
            href="mailto:geral.storm.pt@gmail.com"
            className="hover:opacity-70 transition-opacity"
            aria-label="Email"
          >
            <Image
              src="/icons/ui/STORM_LOGO_EMAIL.png"
              alt="Email"
              width={40}
              height={40}
            />
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-6 bg-storm-black opacity-30" />

        {/* Language Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage("pt")}
            className="hover:opacity-70 transition-opacity"
            aria-label="Portuguese"
          >
            <Image
              src={`/icons/ui/STORM_LANG_PT_${
                language === "pt" ? "BLACK" : "WHITE"
              }.png`}
              alt="PT"
              width={40}
              height={40}
            />
          </button>
          <button
            onClick={() => setLanguage("en")}
            className="hover:opacity-70 transition-opacity"
            aria-label="English"
          >
            <Image
              src={`/icons/ui/STORM_LANG_EN_${
                language === "en" ? "BLACK" : "WHITE"
              }.png`}
              alt="EN"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-storm-yellow transform transition-transform duration-300 ease-in-out z-[45] ${
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
            {navigationLinks.map((link) =>
              link.hasSubmenu ? (
                <div key={link.name} className="flex flex-col gap-2">
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="storm-nav text-storm-black tracking-wide transition-all duration-200 text-left hover:text-storm-red cursor-pointer"
                  >
                    {link.name}
                  </button>
                  {isProductsOpen && (
                    <div className="ml-4 flex flex-col gap-2">
                      {productSubLinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.path}
                          className="storm-sub-nav text-storm-black tracking-wide transition-all duration-200 hover:text-storm-red hover:translate-x-2 cursor-pointer"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-storm-black bg-opacity-50 z-[30]"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;
