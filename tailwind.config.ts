import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "red": "var(--red)",
        "bright-red": "var(--bright-red)",
        "dark-red": "var(--dark-red)",

        "dark": "var(--dark)",
        "light": "var(--light)",
        "platinum": "var(--platinum)",
        "blue": "var(--blue)",
        "bright-blue": "var(--bright-blue)",
      },
    },
  },
  plugins: [],
};
export default config;
