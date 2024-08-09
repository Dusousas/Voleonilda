import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "GreenP": "#008C7F",
        "GreenS": "#64DED2",
        "BrownP": "#DFD6CD",
      },
      fontFamily:{
        Bitter: ['Bitter', 'serif'],

      }
    },
  },
  plugins: [],
};
export default config;
