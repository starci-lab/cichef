import { heroui } from "@heroui/react"
import type { Config } from "tailwindcss"
import { figmaNoisePlugin, gradientBorderPlugin, rotate3dPlugin } from "./tw-plugins"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                bounceY: {
                    "0%, 100%": { transform: "translateY(0%) scale(0.75)" },
                    "50%": { transform: "translateY(-10%) scale(0.75)" },
                },
            },
            backgroundImage: {
                "chip-1": "linear-gradient(to right, rgba(211,0,204,0.75), rgba(0,169,143,0.75), rgba(0,53,44,0.75))",
                "chip-2": "linear-gradient(to right, rgba(0,51,205,0.75), rgba(0,169,143,0.75), rgba(0,53,44,0.75))",
                "chip-3": "linear-gradient(to right, rgba(186,199,0,0.75), rgba(0,169,143,0.75), rgba(0,53,44,0.75))",
            },
            animation: {
                bounceY: "bounceY 1.5s ease-in-out infinite",
            },        
            colors: {
                text: "rgb(17, 24, 28)",
                secondary2: "#6589D1",
                secondary3: "#FF23AB",
                primary2: "hsl(var(--tw-color-primary2) / <alpha-value>)",
                primaryFrom: "hsl(var(--tw-color-primaryFrom) / <alpha-value>)",
            },
        },
    },
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        primary: "#00FFD7",
                        secondary: "#86B7F1",
                    },
                },
                dark: {
                    colors: {
                        primary: "#00FFD7",
                        secondary: "#86B7F1",
                    },
                },
            },
        }),
        gradientBorderPlugin(),
        //shadowPlugin(),
        figmaNoisePlugin(),
        rotate3dPlugin()
    ],
}

export default config
