import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--color-main)",
        secondary: "var(--color-secondary)",
      },
      backgroundColor: {
        main: "var(--background-main)",
        secondary: "var(--background-secondary)",
      },
      fontSize: {
        xs: "var(--font-xs)",
        s: "var(--font-s)",
        m: "var(--font-m)",
        l: "var(--font-l)",
        xl: "var(--font-xl)",
        title: "var(--font-title)",
      },
      lineHeight: {
        xs: "var(--line-height-xs)",
        s: "var(--line-height-s)",
        m: "var(--line-height-m)",
        l: "var(--line-height-l)",
        xl: "var(--line-height-xl)",
        title: "var(--line-height-title)",
      },
      padding: {
        xs: "8px",
        s: "16px",
        m: "24px",
      },
      margin: {
        xs: "8px",
        s: "16px",
        m: "24px",
      },

    },
  },
  plugins: [],
};
export default config;
