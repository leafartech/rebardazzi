import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "my": "#6C2523",
        "my2": "#eec0aa",
        "my3": "#ffedda",
        "my4": "#fbd5c2",
        "my5": "ffdecd",
        "my6": "#A56260EB",
        "my7": "#f9b999",
        "my8": "#750095"
      }
    },
  },
  plugins: [],
}
export default config
