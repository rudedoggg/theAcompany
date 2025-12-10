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
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#1a2b4a',
          slate: '#3d4f6f',
          gold: '#c9a962',
          cream: '#f8f6f1',
          white: '#ffffff',
        }
      },
    },
  },
  plugins: [],
}
export default config
