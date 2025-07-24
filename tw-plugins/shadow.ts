import type { PluginAPI } from "tailwindcss/types/config"

interface ShadowOptions {
  size?: string;
  opacity?: number;
  color?: string;
}

export const shadowPlugin = ({ 
    size = "8px", 
    opacity = 0.3, 
    color = "255, 255, 255"
}: ShadowOptions = {}) => {
    return ({ addUtilities }: PluginAPI) => {
        const shadowValue = `${size} ${size} ${size} rgba(${color}, ${opacity})`
    
        const utilities = {
            // shadow-white
            ".shadow-white": {
                boxShadow: shadowValue,
            },
            // shadow-white-right
            ".shadow-white-right": {
                boxShadow: `${size} 0 ${size} rgba(${color}, ${opacity})`,
            },
            // shadow-white-bottom
            ".shadow-white-bottom": {
                boxShadow: `0 ${size} ${size} rgba(${color}, ${opacity})`,
            },
            // shadow-white-left-top
            ".shadow-white-left-top": {
                boxShadow: `-${size} -${size} ${size} rgba(${color}, ${opacity})`,
            },
            // shadow-white-inner
            ".shadow-white-inner": {
                boxShadow: `inset ${size} ${size} ${size} rgba(${color}, ${opacity})`,
            },
        }

        addUtilities(utilities, {
            respectImportant: true,
            respectPrefix: true,
        })
    }
}