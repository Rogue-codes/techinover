/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "19px",
        xl: "21px",
        "2xl": "1.75rem",
        "3xl": "2rem",
        "4xl": "2.375rem",
        "5xl": "3rem",
        "6xl": "3.375rem",
        "7xl": "64px",
      },
      colors:{
        primary: "#E1F16B",
        black:"#1A1D1F"
      }
    },
  },
  plugins: [],
}