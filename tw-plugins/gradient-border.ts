import type { PluginAPI } from "tailwindcss/types/config"

interface GradientBorderOptions {
  borderRadius?: string;
  borderWidth?: string;
}

export const gradientBorderPlugin = ({
    borderWidth = "2px",
}: GradientBorderOptions = {}) => {
    return ({ addUtilities, theme }: PluginAPI) => {
        const primaryColor = theme("colors.primary")
        const secondary3Color = theme("colors.secondary3") 

        const utilities = {
            ".gradient-border-white-primary": {
                position: "relative",
                backgroundColor: "transparent",
                "&::before": {
                    content: "\"\"",
                    position: "absolute",
                    inset: "0",
                    borderRadius: "inherit",
                    opacity: "1",
                    padding: borderWidth,
                    background: `linear-gradient(135deg, #ffffff 50%, ${primaryColor} 100%)`,
                    mask: `
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0)
          `,
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    pointerEvents: "none",
                },
            },
            ".gradient-border-3colors": {
                position: "relative",
                backgroundColor: "transparent",
                "&::before": {
                    content: "\"\"",
                    position: "absolute",
                    inset: "0",
                    opacity: "1",
                    borderRadius: "inherit",
                    padding: borderWidth,
                    background: `linear-gradient(90deg,
  #ffffff 0%,
  #ffffff 20%,
  ${primaryColor} 30%,
  ${primaryColor} 70%,
  ${secondary3Color} 80%,
  ${secondary3Color} 100%
)`,
                    mask: `
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0)
          `,
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    pointerEvents: "none",
                },
            },
        }

        addUtilities(utilities, {
            respectImportant: true,
            respectPrefix: true,
        })
    }
}
