/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#9b87f5",
        secondary: "#7E69AB",
        "light-purple": "#D6BCFA",
        "neutral-gray": "#8E9196",
        "soft-gray": "#F1F0FB",
      },
      boxShadow: {
        soft: "0 2px 15px rgba(0, 0, 0, 0.05)",
        message: "0 2px 8px rgba(0, 0, 0, 0.05)",
      },

      fontFamily: {
        geist: ["Geist", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "slide-in": "slide-in 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
