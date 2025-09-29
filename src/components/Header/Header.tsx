import React from "react";

const Header = () => {
  const navigationLinks = [
    { name: "home", path: "/", active: false },
    { name: "social", path: "/social", active: false },
    { name: "ui", path: "/ui", active: true },
  ];

  const handleLinkClick = (e, linkActive) => {
    if (!linkActive) {
      e.preventDefault();
      // Add navigation logic here
    }
  };

  const toggleMenu = () => {
    // Add menu toggle logic here
    console.log("Menu toggled");
  };

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-storm-white border-r border-storm-black transform transition-transform duration-300 ease-in-out">
      <nav className="flex flex-col p-8 gap-6">
        {navigationLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className={`storm-nav text-lg transition-colors duration-200 ${
              link.active
                ? "text-storm-black hover:text-storm-yellow cursor-pointer"
                : "text-gray-400 cursor-not-allowed"
            }`}
            onClick={(e) => handleLinkClick(e, link.active)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-8 right-8">
        <img
          src="/icons/xlogo.png"
          alt="STORM"
          className="h-12 w-auto opacity-10"
        />
      </div>

      <div
        className="fixed inset-0 bg-storm-black bg-opacity-50 z-[-1]"
        style={{ marginTop: "4rem" }}
        onClick={toggleMenu}
      />
    </div>
  );
};

export default Header;
