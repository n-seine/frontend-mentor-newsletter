/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        tomato: "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        grey: "hsl(231, 7%, 60%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "light-grey": "hsl(240, 5%, 91%)",
      },
    },
  },
  plugins: [],
};
