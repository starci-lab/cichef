import { WithClassNames } from "@/types"
import clsx from "clsx"
import React from "react"

export type LighOrbProps = WithClassNames
export const LightOrb = ({
    className,
}: LighOrbProps) => {
    return (
        <div
            className={clsx("absolute -top-[800px] left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] blur-2xl pointer-events-none", className)}
            style={{
                backgroundImage:
                  "radial-gradient(circle, hsl(var(--tw-color-primary2) / 1) 0%, hsl(var(--heroui-background) / 0) 70%)",
            }}
        />
    )
}