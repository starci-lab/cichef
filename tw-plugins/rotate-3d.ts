import type { PluginAPI } from "tailwindcss/types/config"

export const rotate3dPlugin = () => {
    return ({ addUtilities }: PluginAPI) => {
        const degrees = [15, 30, 45, 60, 90, 180]
        const combos: Record<string, { transform: string }> = {}

        degrees.forEach((x) => {
            degrees.forEach((y) => {
                const className = `.rotate-x-${x}-y-${y}`
                combos[className] = {
                    transform: `rotateX(${x}deg) rotateY(${y}deg)`,
                }

                const hoverClass = `.hover\\:rotate-x-${x}-y-${y}`
                combos[hoverClass] = {
                    transform: `rotateX(${x}deg) rotateY(${y}deg)`,
                }
            })
        })

        degrees.forEach((x) => {
            degrees.forEach((z) => {
                const className = `.rotate-x-${x}-z-${z}`
                combos[className] = {
                    transform: `rotateX(${x}deg) rotateZ(${z}deg)`,
                }

                const hoverClass = `.hover\\:rotate-x-${x}-z-${z}`
                combos[hoverClass] = {
                    transform: `rotateX(${x}deg) rotateZ(${z}deg)`,
                }
            })
        })

        degrees.forEach((y) => {
            degrees.forEach((z) => {
                const className = `.rotate-y-${y}-z-${z}`
                combos[className] = {
                    transform: `rotateY(${y}deg) rotateZ(${z}deg)`,
                }

                const hoverClass = `.hover\\:rotate-y-${y}-z-${z}`
                combos[hoverClass] = {
                    transform: `rotateY(${y}deg) rotateZ(${z}deg)`,
                }
            })
        })

        addUtilities(
            {
                ...combos,
                ".preserve-3d": { transformStyle: "preserve-3d" },
                ".backface-hidden": { backfaceVisibility: "hidden" },
                ".perspective-1000": { perspective: "1000px" },
            },
            {
                respectPrefix: true,
                respectImportant: true,
            }
        )
    }
}
