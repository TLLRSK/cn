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
        sm: "var(--font-sm)",
        md: "var(--font-m)",
        lg: "var(--font-l)",
        xl: "var(--font-xl)",
        "title-xs": "var(--font-title-xs)",
        "title-sm": "var(--font-title-sm)",
        "title-md": "var(--font-title-md)",
        "title-lg": "var(--font-title-lg)",
      },
      lineHeight: {
        xs: "var(--line-height-xs)",
        sm: "var(--line-height-sm)",
        md: "var(--line-height-md)",
        lg: "var(--line-height-lg)",
        xl: "var(--line-height-xl)",
        "title-xs": "var(--line-height-title-xs)",
      },
      padding: {
        xs: "8px",
        sm: "16px",
        md: "24px",
      },
      margin: {
        xs: "8px",
        sm: "16px",
        md: "24px",
      },
      gap: {
        xs: "6px",
        sm: "12px",
        md: "16px",
        lg: "24px",
      },
      screens: {
        'sm': '560px',
        'md': '720px',
        'lg': '1024px',
        'xl': '1280px',
      },

    },
  },
  plugins: [],
};
export default config;
