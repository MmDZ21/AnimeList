import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        login: "url('/images/loginpic.webp')",
      },
      colors: {
        primary: {
          "50": "#FDE2F1",
          "100": "#F9B8DB",
          "200": "#F588C3",
          "300": "#F158AB",
          "400": "#EE3599",
          "500": "#EB1187",
          "600": "#E90F7F",
          "700": "#E50C74",
          "800": "#E20A6A",
          "900": "#DD0557",
        },
        background: "#0E1621",
        input: "#242F3D",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
} satisfies Config;

export default config;
