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
      colors: {
        // === NEW THEME: Dark Navy / Neon Cyan ===
        // Primary = Neon Cyan (buttons, highlights, links, icons)
        primary: {
          50:  '#E0FFFE',
          100: '#B3FFFE',
          200: '#66FCF1', // Soft Aqua Glow
          300: '#33F0E8',
          400: '#00E5FF', // Neon Cyan (Main Glow) — PRIMARY ACCENT
          500: '#00C8E0',
          600: '#1DA1F2', // Electric Blue — secondary accent
          700: '#0E7FC2',
          800: '#075D93',
          900: '#003A60',
          950: '#001E33',
        },
        // Secondary = Electric Blue family
        secondary: {
          50:  '#E8F4FE',
          100: '#C8E6FD',
          200: '#93CBF9',
          300: '#5AB0F5',
          400: '#2E97EF',
          500: '#1DA1F2', // Electric Blue
          600: '#0E7FC2',
          700: '#085E94',
          800: '#044067',
          900: '#012340',
          950: '#001020',
        },
        // Neutral = Navy Blue Grays (for dark-theme text/surfaces)
        neutral: {
          50:  '#C5D1E0', // Soft White / Secondary Text
          100: '#8FA3BF', // Muted Text
          200: '#5A7490',
          300: '#3A5470',
          400: '#243A52',
          500: '#14243A', // Mid Night Blue (section bg)
          600: '#0D1B2A', // Dark Blue Gradient
          700: '#0A1525',
          800: '#070F1A',
          900: '#0A0F1F', // Deep Navy (Base Background)
        },
        // Background aliases for convenience
        navy: {
          base:    '#0A0F1F',
          gradient:'#0D1B2A',
          section: '#14243A',
          card:    '#1A2E47',
        }
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
        xs:   ["0.75rem",  { lineHeight: "1rem" }],
        sm:   ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1.125rem", { lineHeight: "1.75rem" }],
        lg:   ["1.25rem",  { lineHeight: "1.875rem" }],
        xl:   ["1.5rem",   { lineHeight: "2rem" }],
        "2xl":["1.875rem", { lineHeight: "2.25rem" }],
        "3xl":["2.25rem",  { lineHeight: "2.5rem" }],
        "4xl":["2.75rem",  { lineHeight: "3rem" }],
        "5xl":["3.5rem",   { lineHeight: "1.1" }],
        "6xl":["4.25rem",  { lineHeight: "1.1" }],
        "7xl":["5rem",     { lineHeight: "1.1" }],
        "8xl":["6.5rem",   { lineHeight: "1" }],
        "9xl":["8.5rem",   { lineHeight: "1" }],
      },
      spacing: {
        "18":  "4.5rem",
        "88":  "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft:   "0 2px 15px -3px rgba(0,0,0,0.3), 0 10px 20px -2px rgba(0,0,0,0.2)",
        medium: "0 4px 25px -5px rgba(0,0,0,0.4), 0 10px 10px -5px rgba(0,0,0,0.2)",
        large:  "0 10px 40px -10px rgba(0,0,0,0.5)",
        // Glow shadows
        "glow-cyan":  "0 0 20px rgba(0,229,255,0.4), 0 0 60px rgba(0,229,255,0.15)",
        "glow-blue":  "0 0 20px rgba(29,161,242,0.4), 0 0 60px rgba(29,161,242,0.15)",
        "glow-sm":    "0 0 10px rgba(0,229,255,0.3)",
      },
      screens: {
        xs: "475px",
      },
      animation: {
        scroll:    "scroll 60s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-up":   "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float":      "float 6s ease-in-out infinite",
      },
      keyframes: {
        scroll: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%":   { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%":   { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,229,255,0.3)" },
          "50%":       { boxShadow: "0 0 40px rgba(0,229,255,0.6), 0 0 80px rgba(0,229,255,0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
