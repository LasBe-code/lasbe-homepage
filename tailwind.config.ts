import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: ["var(--noto)"],
        archivo: ["var(--archivo)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "my-orange": "#ff6f00",
        "my-green": "#00e81f",
        "my-blue": "#009bef",
      },
    },
  },
  plugins: [],
};
export default config;
