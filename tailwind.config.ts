import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        variant:"#F4F4F4",
      },
      fontFamily: {
        'prosto-one': ['"Prosto One"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'serif'],
      },
      screens: {
        xs: '360px',
      },
      spacing: {
        '551': '551px',
        '360': '360px',
        '380': '380px',
        '263': '263px',
        '273': '273px',
        '172': '172px',
        '308': '308px',
        '354': '354px',
        '264': '264px',
        '394': '394px',
      },
    },
  },
  plugins: [],
} satisfies Config;
