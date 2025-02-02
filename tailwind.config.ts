import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "#999",
        main: "#7BB9FF",
        sub: "#FF7BA5",
      },
    },
  },
  plugins: [],
} satisfies Config;
