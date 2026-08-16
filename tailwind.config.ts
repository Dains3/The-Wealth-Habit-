import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#1B4332",
          dark: "#122E22",
          light: "#2D6A4F",
        },
        gold: {
          DEFAULT: "#C9A66B",
          light: "#E4D3AC",
          dark: "#AD8A50",
        },
        cream: {
          DEFAULT: "#FAF6EE",
          dark: "#F1EADA",
        },
        charcoal: {
          DEFAULT: "#2B2B27",
          light: "#55534C",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(43, 43, 39, 0.06), 0 8px 24px rgba(43, 43, 39, 0.06)",
        cardHover: "0 4px 10px rgba(43, 43, 39, 0.08), 0 16px 32px rgba(43, 43, 39, 0.10)",
      },
      borderRadius: {
        card: "6px",
      },
    },
  },
  plugins: [],
};

export default config;
