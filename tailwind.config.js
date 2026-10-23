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
        // === Design tokens (dark navy / cyan) ===
        // Surfaces, darkest → lightest
        ink: {
          950: "#060A15",
          900: "#0A0F1F", // page background
          850: "#0C1424", // raised section
          800: "#0F1A2D", // panel
          700: "#15233A", // panel hover / inputs
        },
        // Text
        fg: "#F3F6FA", // headings
        body: "#B4C2D3", // paragraphs
        muted: "#7D90A8", // captions, meta
        // Hairlines (8-digit hex keeps alpha)
        line: {
          DEFAULT: "#94B2D61F",
          strong: "#94B2D633",
          accent: "#00E5FF4D",
        },
        accent: {
          DEFAULT: "#00E5FF", // neon cyan — primary accent
          soft: "#66FCF1",
          blue: "#1DA1F2", // electric blue — secondary accent
        },

        // === Legacy palette (kept for existing classes) ===
        primary: {
          50:  '#E0FFFE',
          100: '#B3FFFE',
          200: '#66FCF1',
          300: '#33F0E8',
          400: '#00E5FF',
          500: '#00C8E0',
          600: '#1DA1F2',
          700: '#0E7FC2',
          800: '#075D93',
          900: '#003A60',
          950: '#001E33',
        },
        secondary: {
          50:  '#E8F4FE',
          100: '#C8E6FD',
          200: '#93CBF9',
          300: '#5AB0F5',
          400: '#2E97EF',
          500: '#1DA1F2',
          600: '#0E7FC2',
          700: '#085E94',
          800: '#044067',
          900: '#012340',
          950: '#001020',
        },
        neutral: {
          50:  '#C5D1E0',
          100: '#8FA3BF',
          200: '#5A7490',
          300: '#3A5470',
          400: '#243A52',
          500: '#14243A',
          600: '#0D1B2A',
          700: '#0A1525',
          800: '#070F1A',
          900: '#0A0F1F',
        },
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
          "var(--font-sora)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      maxWidth: {
        site: "80rem",
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
        panel:  "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)",
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
