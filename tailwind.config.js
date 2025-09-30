/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "storm-black": "#000000",
        "storm-white": "#FFFFFF",
        "storm-yellow": "#FFD600",
        "storm-red": "#77040F",
      },
      fontFamily: {
        hagrid: ["Hagrid", "sans-serif"],
        gosh: ["Gosh", "sans-serif"],
        fixture: ["Fixture", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "storm-fade": "fadeIn 0.3s ease-in-out",
        "storm-slide": "slideIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
