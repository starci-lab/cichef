import { WithClassNames } from "@/types"
import clsx from "clsx"
import React from "react"

export type EllipseSvgProps = WithClassNames

export const EllipseSvg = ({ className }: EllipseSvgProps) => {
    return (
        <svg
            className={clsx(className)}
            width="371"
            height="302"
            viewBox="0 0 371 302"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="paint0_linear_207_86"
                    x1="106.937"
                    y1="70.3455"
                    x2="191.743"
                    y2="263.617"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00AA90" />
                    <stop offset="1" stopColor="#00382F" />
                </linearGradient>
            </defs>
            <path
                d="M357.273 32.5772C374.068 56.9142 370.808 92.2705 350.978 130.223C331.195 168.085 295.151 208.005 247.479 240.904C199.806 273.803 149.694 293.339 107.277 298.401C64.7576 303.476 30.5448 293.98 13.7497 269.643C-3.04532 245.306 0.214381 209.949 20.0447 171.996C39.8272 134.135 75.8712 94.2137 123.544 61.3149C171.216 28.416 221.328 8.88054 263.745 3.81801C306.265 -1.2567 340.478 8.24005 357.273 32.5772Z"
                fill="url(#paint0_linear_207_86)"
                stroke="#00FFD7"
                strokeWidth="4"
            />
        </svg>
    )
}