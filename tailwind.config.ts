import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Raleway', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#FC0303',
          tan: '#A08060',
          tanHover: '#8A6E52',
          charcoal: '#333333',
          gray: '#666666',
          lightGray: '#f5f5f5',
          white: '#ffffff',
        }
      },
    },
  },
  plugins: [],
}
export default config
