/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      cursor: {
        fancy: 'url("./src/assets/cursor.png"), auto',
      },
      colors: {
        green: {
          800: "#003f3f",
          900: "#002929",
        },
        yellow: {
          400: "#FACC15",
        },
      },
    },
    plugins: [tailwindScrollbar],
  },
};
