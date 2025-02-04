/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "coin-spin": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        loadProgress: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-in-left": "slideInFromLeft 1s ease-out forwards",
        "slide-in-right": "slideInFromRight 1s ease-out forwards",
        "coin-spin": "coin-spin 0.7s ease-in-out",
        "coin-spin-image": "coin-spin 1.5s ease-in-out",
        shimmer: "shimmer 2s infinite",
        "load-progress": "loadProgress 1.5s ease-out",
        "fade-in": "fadeIn 1s ease-in forwards",
      },
      fontFamily: {
        // Option 1: Clean and Modern
        sans: ["Inter", "system-ui", "sans-serif"],

        // Option 2: Professional and Readable
        poppins: ["Poppins", "sans-serif"],

        // Option 3: Elegant and Professional
        outfit: ["Outfit", "sans-serif"],

        // Option 4: Modern and Minimal
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
