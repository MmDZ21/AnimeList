import type { Config } from "tailwindcss";
import { trending } from "./constants";

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
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1920px",
      },
      backgroundImage: {
        login: 'url("/images/loginpic.webp")',
        trending: 'url("/images/trending.webp")',
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
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "fade-out": {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-right": {
          from: {
            opacity: "0",
            transform: "translateX(2rem)"
          },
          to: {
            opacity: "1",
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in": "fade-in 0.3s ",
        "fade-out": "fade-out 0.3s ",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-right": "fade-right 0.5s ease"
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
} satisfies Config;

export default config;
