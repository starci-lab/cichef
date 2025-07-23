import { Card, CardProps } from "@heroui/react"
import React from "react"
import { tv } from "tailwind-variants"

export interface StyledCardProps extends CardProps {
  variant?: "variant1" | "variant2"
}

const cardTv = tv({
    base: "rounded-xl shadow-md",
    variants: {
        variant: {
            variant1:
        "gradient-border-mask rounded-xl p-[2px]",
            variant2:
        "bg-gradient-to-r from-blue-50 to-white border border-blue-200 text-blue-900 p-6",
        },
    },
    defaultVariants: {
        variant: "variant1",
    },
})

export const StyledCard = ({
    children,
    className,
    variant,
    ...rest
}: StyledCardProps) => {
    return (
        <Card className={cardTv({ variant, className })} {...rest}>
            <div className="inner-content">
                {children}
            </div>
        </Card>
    )
}
