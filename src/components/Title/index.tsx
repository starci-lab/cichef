import { tv } from "@heroui/react"
import React from "react"
import clsx from "clsx"
import { zenDotsFont } from "@/fonts"

export type TitleVariant = "default" | "gradient" | "gradient2" | "primary"

export interface TitleProps {
  className?: string
  variant?: TitleVariant
  text: string
}

const titleTv = tv({
    base: "text-[30px] md:text-[40px]",
    variants: {
        variant: {
            default: "",
            gradient: "bg-gradient-to-r from-white to-primary text-transparent bg-clip-text",
            primary: "text-primary",
            gradient2: "bg-[linear-gradient(to_right,_white_0%,_theme('colors.secondary')_20%,_theme('colors.primary')_100%)] text-transparent bg-clip-text"
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export const Title = ({
    className,
    variant,
    text,
}: TitleProps) => {
    return (
        <div className={clsx(titleTv({ variant }), zenDotsFont.className, className)}>
            {text}
        </div>
    )
}