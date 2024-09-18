import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    {
      pattern: /animate-delay-.+/
    }
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        pending: "rgb(var(--color-pending) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        darkmode: {
          50: "rgb(var(--color-darkmode-50) / <alpha-value>)",
          100: "rgb(var(--color-darkmode-100) / <alpha-value>)",
          200: "rgb(var(--color-darkmode-200) / <alpha-value>)",
          300: "rgb(var(--color-darkmode-300) / <alpha-value>)",
          400: "rgb(var(--color-darkmode-400) / <alpha-value>)",
          500: "rgb(var(--color-darkmode-500) / <alpha-value>)",
          600: "rgb(var(--color-darkmode-600) / <alpha-value>)",
          700: "rgb(var(--color-darkmode-700) / <alpha-value>)",
          800: "rgb(var(--color-darkmode-800) / <alpha-value>)",
          900: "rgb(var(--color-darkmode-900) / <alpha-value>)"
        }
      },
      fontFamily: {
        roboto: ["Roboto"]
      },
      container: {
        center: true
      },
      strokeWidth: {
        "0.5": "0.5",
        "1.5": "1.5",
        "2.5": "2.5"
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      keyframes: {
        "intro-divider": {
          "100%": {
            opacity: "1"
          }
        },
        "intro-menu": {
          "100%": {
            opacity: "1",
            transform: "translateX(0px)"
          }
        },
        "intro-top-menu": {
          "100%": {
            opacity: "1",
            transform: "translateY(0px)"
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      boxShadow: ["dark"]
    }
  }
};
export default config;
