/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F0F4F8",
        primary: "#007BFF",
        secondary: "#6C757D",
        tertiary: "#28A745",
        accent: "#FFC107",
      },
    },
  },
  plugins: [],
};
