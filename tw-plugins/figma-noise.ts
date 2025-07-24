import type { PluginAPI } from "tailwindcss/types/config"

interface FigmaNoiseOptions {
  shapePath?: string           // Make it optional since we have a default
  fillColor?: string
  noiseOpacity?: number       // 0.1 - 1
  grainSize?: number         // 0.3 - 1.5
}

export const figmaNoisePlugin = ({ 
    shapePath = "M290.569 0H50.2393C22.698 0 0.371338 15.9677 0.371338 35.6648V283.065C0.371338 302.763 22.698 318.73 50.2393 318.73H290.569C318.11 318.73 340.437 302.763 340.437 283.065V35.6648C340.437 15.9677 318.11 0 290.569 0Z",
    fillColor = "#545454", 
    noiseOpacity = 0.2, 
    grainSize = 0.5 
}: FigmaNoiseOptions = {}) => {
    return ({ addUtilities }: PluginAPI) => {
        const svgNoise = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <filter id="noise">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="${grainSize}" 
              numOctaves="1"
              stitchTiles="stitch"
            />
            <feColorMatrix type="matrix" values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 ${noiseOpacity} 0
            "/>
          </filter>
        </defs>
        <path 
          d="${shapePath}" 
          fill="${fillColor}" 
          filter="url(#noise)" 
        />
      </svg>
    `.replace(/\s+/g, " ")

        const utilities = {
            ".figma-noise": {
                position: "relative",
                "&::before": {
                    content: "\"\"",
                    position: "absolute",
                    inset: "0",
                    background: `url("data:image/svg+xml,${encodeURIComponent(svgNoise)}")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "repeat",
                    zIndex: "0",
                    pointerEvents: "none",
                }
            }
        }
        addUtilities(utilities)
    }
}