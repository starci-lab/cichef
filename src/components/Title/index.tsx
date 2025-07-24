import { tv } from "@heroui/react"
import React from "react"
import clsx from "clsx"
import { zenDotsFont } from "@/fonts"

export type TitleVariant = "default" | "gradient"

export interface TitleProps {
  className?: string
  variant?: TitleVariant
  text: string
}

const titleTv = tv({
    base: "text-[32px] md:text-[48px]",
    variants: {
        variant: {
            default: "",
            gradient: "bg-gradient-to-r from-white to-primary text-transparent bg-clip-text",
            primary: "text-primary",
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