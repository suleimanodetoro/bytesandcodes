// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

// Define the ThemeFunction type
type ThemeFunction = (path: string, defaultValue?: any) => any;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Main green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: {
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['GeistVF', 'sans-serif'],
        mono: ['GeistMonoVF', 'monospace'],
        // Add the serif font configuration here
        serif: ['Playfair Display', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      height: {
        'screen-90': '90vh',
        'screen-80': '80vh',
      },
      typography: (theme: ThemeFunction) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            fontSize: theme('fontSize.base'),
            lineHeight: theme('lineHeight.relaxed'),
            a: {
              color: theme('colors.red.500'),
              '&:hover': {
                color: theme('colors.red.700'),
              },
              textDecoration: 'underline',
              fontWeight: theme('fontWeight.medium'),
            },
            p: {
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.4'),
              '@screen sm': {
                marginTop: theme('spacing.6'),
                marginBottom: theme('spacing.6'),
              },
            },
            'h1, h2, h3': {
              color: theme('colors.gray.900'),
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.6'),
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
              fontSize: theme('fontSize.sm'),
              color: theme('colors.gray.600'),
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.lg'),
              overflowX: 'auto',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.red.500'),
              padding: '0.2em 0.4em',
              borderRadius: theme('borderRadius.sm'),
              fontWeight: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [
    typography,
  ],
};

export default config;