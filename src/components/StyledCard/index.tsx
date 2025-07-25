import { Card, CardProps, Image } from "@heroui/react"
import React from "react"
import { tv } from "tailwind-variants"
import clsx from "clsx"

export interface StyledCardProps extends CardProps {
  variant?: "variant1" | "variant2"
  crop?: Crop // only work with variant2
}


export enum Crop {
    BellPepper = "bellPepper",
    Cucumber = "cucumber",
    Eggplant = "eggplant",
    Parsnip = "parsnip",
    Pumpkin = "pumpkin",
    Squash = "squash",
}

export const cropMap = {
    [Crop.BellPepper]: {
        url: "/crops/bell-pepper.png",
        name: "Bell Pepper",
    },
    [Crop.Cucumber]: {
        url: "/crops/cucumber.png",
        name: "Cucumber",
    },
    [Crop.Eggplant]: {
        url: "/crops/eggplant.png",
        name: "Eggplant",
    },
    [Crop.Parsnip]: {
        url: "/crops/parsnip.png",
        name: "Parsnip",
    },
    [Crop.Pumpkin]: {
        url: "/crops/pumpkin.png",
        name: "Pumpkin",
    },
    [Crop.Squash]: {
        url: "/crops/squash.png",
        name: "Squash",
    },
}

const cardTv = tv({
    slots: {
        container: "rounded-medium",
    },
    variants: {
        variant: {
            variant1: {
                container: "box-border bg-foreground-500/40 rounded-medium p-0.5 overflow-hidden backdrop-blur-sm",
            },
            variant2: {
                container: "overflow-hidden bg-secondary2/40 pt-2 h-full",
            },
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
    crop = Crop.Pumpkin,
    ...rest
}: StyledCardProps) => {
    const { container } = cardTv({ variant })
    if (variant === "variant2") {
        return (
            <div className={clsx("relative", className, "preserve-3d transition-all duration-500 hover:rotate-x-30-y-15")}>
                <div className="absolute top-0 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-[55%] z-50 flex items-center justify-center">
                    <Image removeWrapper src={cropMap[crop].url} alt={cropMap[crop].name} style={{
                        scale: 0.3
                    }} className="w-fit h-fit min-w-fit min-h-fit"/>
                </div>
                <Card className={clsx(container())} {...rest}>
                    {children}
                </Card>
            </div>
        )
    }
    return (
        <Card className={clsx(container(), className, "transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-white/30")} {...rest}>
            {children}
        </Card>
    )
}