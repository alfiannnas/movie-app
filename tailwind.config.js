/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxHeight: {
      290: "290px",
    },
    extend: {},
  },
  daisyui: {
    themes: ["night"],
  },
  plugins: [require("daisyui")],
};
