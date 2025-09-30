import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "storm-black": "#000000",
        "storm-white": "#ffffff",
        "storm-yellow": "#ffd600",
        "storm-red": "#77040f",
        "storm-gray-light": "#f5f5f5",
        "storm-gray-medium": "#cccccc",
        "storm-gray-dark": "#333333",
      },
      fontFamily: {
        hagrid: ["var(--font-hagrid)", "sans-serif"],
        gosh: ["var(--font-gosh)", "sans-serif"],
        fixture: ["var(--font-fixture)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
