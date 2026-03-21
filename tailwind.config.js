/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors - Deep Teal (derived from logo)
        primary: {
          50: "#e8f0f2",
          100: "#d1e2e6",
          200: "#a4c6ce",
          300: "#76a9b5",
          400: "#498d9d",
          500: "#1c7185", // Main brand color
          600: "#165a6a",
          700: "#10434f",
          800: "#0b2d35",
          900: "#05161a",
          950: "#020b0d",
        },
        // Secondary accent colors - Vibrant Green (derived from logo accents)
        secondary: {
          50: "#f0f7ed",
          100: "#e2f0dc",
          200: "#c6e2b9",
          300: "#a9d396",
          400: "#8dc573",
          500: "#71b751", // Main accent
          600: "#5a9240",
          700: "#436d30",
          800: "#2d4920",
          900: "#162410",
          950: "#0b1208",
        },
        // Neutral grays for text and backgrounds
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        // Semantic colors
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1.125rem", { lineHeight: "1.75rem" }],  // increased from 1rem
        lg: ["1.25rem", { lineHeight: "1.875rem" }],    // increased from 1.125rem
        xl: ["1.5rem", { lineHeight: "2rem" }],         // increased from 1.25rem
        "2xl": ["1.875rem", { lineHeight: "2.25rem" }], // increased from 1.5rem
        "3xl": ["2.25rem", { lineHeight: "2.5rem" }],   // increased from 1.875rem
        "4xl": ["2.75rem", { lineHeight: "3rem" }],     // increased from 2.25rem
        "5xl": ["3.5rem", { lineHeight: "1.1" }],       // increased from 3rem
        "6xl": ["4.25rem", { lineHeight: "1.1" }],      // increased from 3.75rem
        "7xl": ["5rem", { lineHeight: "1.1" }],         // increased from 4.5rem
        "8xl": ["6.5rem", { lineHeight: "1" }],         // increased from 6rem
        "9xl": ["8.5rem", { lineHeight: "1" }],         // increased from 8rem
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium: "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        large: "0 10px 40px -10px rgba(0, 0, 0, 0.15)",
      },
      screens: {
        xs: "475px",
      },
      animation: {
        scroll: "scroll 60s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

