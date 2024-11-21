import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-bottom',
    'bg-center',
    'bg-left',
    'bg-left-bottom',
    'bg-left-top',
    'bg-right',
    'bg-right-bottom',
    'bg-right-top',
    'bg-top',
  ],
  theme: {
    extend: {
      minHeight: {
        screen: '100dvh',
      },
      height: {
        card: '360px',
      },
      screens: {
        md: '1024px',
        lg: '1820px',
        xl: '2420px',
        xxl: '3200px',
      },
      fontSize: {
        '2xl': '32px',
        xl: '20px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(function ({ addBase, addUtilities, theme }) {
      addUtilities({
        '.bg-main': {
          backgroundImage: 'url("/bg.webp"),url("/bg.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-mobile': {
          backgroundImage: 'url("/bg-mobile.webp"),url("/bg-mobile.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-main-dark': {
          backgroundImage: 'url("/bg-dark.webp"),url("/bg-dark.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-mobile-dark': {
          backgroundImage: 'url("/bg-mobile-dark.webp"),url("/bg-mobile-dark.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-card-token': {
          backgroundImage: 'url("/cards/token-card-bg.webp"),url("/cards/token-card-bg.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: 'cover',
        },
        '.bg-card-bigger-than-a-bull': {
          backgroundImage:
            'url("/cards/bigger-than-a-bull.webp"),url("/cards/bigger-than-a-bull.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
        },

        '.bg-card-fight': {
          backgroundImage: 'url("/banner.webp"),url("/banner.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-card-download': {
          backgroundImage: 'url("/cards/download.webp")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.bg-card-queen': {
          backgroundImage: 'url("/cards/queens-tima.webp"),url("/cards/queens-tima.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        },
        '.gradient-telegram': {
          background: 'linear-gradient(102deg, rgba(56,176,227,1) 0%, rgba(29,147,210,1) 100%)',
        },
      })
    }),
  ],
} satisfies Config
