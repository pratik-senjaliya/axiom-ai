/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        // Lovable exact colors
        primary: {
          50: '#FFF4E5',
          100: '#FFE6CC',
          200: '#FFCD99',
          300: '#FFB366',
          400: '#FF9933',
          500: '#FF821C', 
          600: '#E66A00',
          700: '#B35300',
          800: '#803B00',
          900: '#4D2400',
          950: '#2B1300'
        },
        secondary: {
          50: '#F9F1FD',
          100: '#F1E0FA',
          200: '#E4BFFF',
          300: '#D69EF5',
          400: '#C785EB',
          500: '#AD58D9',
          600: '#8F3DB8',
          700: '#6F2A93',
          800: '#4D1A6A',
          900: '#2E0D41',
          950: '#1A0625'
        },
        neutral: {
          50: '#F9FAF3',
          100: '#F3F2EE',
          200: '#E6E4DD',
          300: '#D5D2C8',
          400: '#BDB9AA',
          500: '#9E9988',
          600: '#7B7766',
          700: '#524F44',
          800: '#3D3B33',
          900: '#26201D', // Matches brand dark heading color
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

