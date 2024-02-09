/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // serif: "'Lora', serif"
      sans: "'Open Sans', sans-serif",
    },
    extend: {
      colors: {
        primary: {
          light: "#102C3B",
          DEFAULT: "#032131",
        },
        secondary: {
          lightest: "#FFDEDC",
          light: "#E9D2CB",
          DEFAULT: "#FF918A",
        },
      },
    },
  },
  plugins: [],
};
