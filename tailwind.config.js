/** @type {import('tailwindcss').Config} */
import { theme } from "./src/config.js";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FBF8EB', // Very light gold
          100: '#F4EFCB', // Light gold
          500: theme.colors.secondary, // Mapping GOLD (#CBA135) as Primary for Buttons/Highlights
          600: theme.colors.secondary,
          700: '#B69324', // Darker gold
          DEFAULT: theme.colors.secondary,
        },
        secondary: { // Mapping NAVY (#0F172A) as Secondary for text/secondary elements
          50: '#F8FAFC',
          100: '#F1F5F9',
          500: theme.colors.primary,
          DEFAULT: theme.colors.primary,
        },
        accent: {
          500: theme.colors.accent,
          600: theme.colors.accent,
        },
        dark: {
          800: theme.colors.primary, // Navy
          900: theme.colors.background, // Dark Elegant Background (#020617)
          DEFAULT: theme.colors.background,
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

