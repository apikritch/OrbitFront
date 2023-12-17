/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-primary-bg": "#ffffff",
        "light-secondary-bg": "#f5f7fa",
        "light-tertiary-bg": "#eff2f6",
        "light-quaternary-bg": "#e3e6ed",
        "light-primary-border": "#cbd0dd",
        "light-secondary-border": "#e3e6ed",
        "light-primary-text": "#31374a",
        "light-secondary-text": "#6e7891",

        "dark-primary-bg": "#141824",
        "dark-secondary-bg": "#0f111a",
        "dark-tertiary-bg": "#222834",
        "dark-quaternary-bg": "#31374a",
        "dark-primary-border": "#373e53",
        "dark-secondary-border": "#31374a",
        "dark-primary-text": "#e3e6ed",
        "dark-secondary-text": "#9fa6bc",
        "dark-tertiary-text": "#525b75",

        "dark-blue-primary": "#f5f8ff",
        "dark-blue-secondary": "#85a9ff",
        "dark-blue-tertiary": "#3874ffb3",
        "dark-blue-quaternary": "#3874ff3d",

        focus: "#3874ff",
        button: "#3874ff",
        "hover-button": "#004dff",
        link: "#58a9ff",
        "hover-link": "#3874ff",
      },
    },
    screens: {
      "2xs": "320px",
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
  },
  plugins: [],
};
