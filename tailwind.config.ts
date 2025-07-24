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
            colors: {
                background: "var(--background)",
                text: "rgb(17, 24, 28)",
                secondary2: "#6589D1",
                secondary3: "#FF23AB",
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
