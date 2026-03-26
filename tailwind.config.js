/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nt-bg": "#171622",
        "nt-cream": "#F8FFE0",
        "nt-blue-primary": "#3F56E3",
        "nt-blue-accent": "#2040F3",
        "nt-blue-muted": "#3B5A82",
        "nt-blue-check": "#293370",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease both",
        "fade-in-right": "fade-in-right 0.8s ease both",
        "scale-in": "scale-in 1s ease both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};