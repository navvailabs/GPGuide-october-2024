import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#F9F5EF',
        'brand-surface': '#FFFFFF',
        'brand-text': '#1E1B18',
        'brand-text-muted': '#57534E',
        'brand-accent': '#D97706',
        'brand-border': '#E7E5E4',
        'success-green': '#16A34A',
        'pain-red': '#DC2626',
        
        // ShadCN UI Colors
        border: "hsl(30, 8%, 90%)", // brand-border
        input: "hsl(30, 8%, 90%)", // brand-border
        ring: "hsl(32, 96%, 44%)", // brand-accent
        background: "hsl(38, 42%, 96%)", // brand-bg
        foreground: "hsl(28, 10%, 10%)", // brand-text
        primary: {
          DEFAULT: "hsl(28, 10%, 10%)", // brand-text
          foreground: "hsl(38, 42%, 96%)", // brand-bg
        },
        secondary: {
          DEFAULT: "hsl(30, 8%, 90%)", // brand-border
          foreground: "hsl(28, 10%, 10%)", // brand-text
        },
        destructive: {
          DEFAULT: "hsl(0, 72%, 51%)", // pain-red
          foreground: "hsl(0, 0%, 100%)",
        },
        muted: {
          DEFAULT: "hsl(30, 8%, 90%)", // brand-border
          foreground: "hsl(31, 5%, 32%)", // brand-text-muted
        },
        accent: {
          DEFAULT: "hsl(30, 8%, 90%)", // brand-border
          foreground: "hsl(28, 10%, 10%)", // brand-text
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)", // brand-surface
          foreground: "hsl(28, 10%, 10%)", // brand-text
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)", // brand-surface
          foreground: "hsl(28, 10%, 10%)", // brand-text
        },
        purple: {
          600: '#7F56D9',
        },
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        satoshi: ['"Satoshi"', 'sans-serif'],
        "display": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      fontSize: {
        'desktop-h1': '72px',
        'mobile-h1': '48px',
        'desktop-h2': '56px',
        'mobile-h2': '36px',
        'desktop-body': '18px',
        'mobile-body': '16px',
      },
      borderRadius: {
        "DEFAULT": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "1rem",
        "full": "9999px"
      },
      maxWidth: {
        container: "80rem",
      },
      boxShadow: {
        'layered': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'layered-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'layered-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        'inner-light': 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
        'inner-dark': 'inset 0 2px 4px 0 rgba(0,0,0,0.2)',
        glow: "0 -16px 128px 0 hsla(var(--brand-foreground) / 0.5) inset, 0 -16px 32px 0 hsla(var(--brand) / 0.5) inset",
        'inspired-light': '0px 4px 12px rgba(0,0,0,0.04)',
        'clay-light': 'rgba(0, 0, 0, 0.08) 0px 0.7px 0.7px -0.67px, rgba(0, 0, 0, 0.08) 0px 1.8px 1.8px -1.33px, rgba(0, 0, 0, 0.07) 0px 3.6px 3.6px -2px, rgba(0, 0, 0, 0.07) 0px 6.9px 6.9px -2.67px, rgba(0, 0, 0, 0.05) 0px 13.6px 13.6px -3.33px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset',
        'clay-dark': '0px 15px 30px -10px rgba(0, 0, 0, 0.5), inset 0px 1px 1px rgba(255, 255, 255, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #1E1B18, #57534E)',
        'gold-gradient': 'linear-gradient(to right, #D97706, #B45309)',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(217, 119, 6, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(217, 119, 6, 0)' },
        },
        float: {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
            '100%': { transform: 'translateY(0px)' },
        },
        'float-delay-1': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-15px)' },
            '100%': { transform: 'translateY(0px)' },
        },
        'float-delay-2': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-8px)' },
            '100%': { transform: 'translateY(0px)' },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { 
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)"
          }
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      animation: {
        'pulse-orange': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-1': 'float-delay-1 7s ease-in-out infinite',
        'float-2': 'float-delay-2 5s ease-in-out infinite',
        tilt: 'tilt 10s infinite linear',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        aurora: "aurora 60s linear infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    addVariablesForColors,
  ],
}
