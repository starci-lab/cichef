import { Button, ButtonProps } from "@heroui/react"
import clsx from "clsx"
import React from "react"

export const StyledButton = ({ variant, className, ...rest }: ButtonProps) => {
    return (
        <Button
            variant={variant}
            className={clsx(
                (!variant || variant === "solid") && 
                "bg-gradient-to-r from-white to-primary text-text",
                className
            )}
            {...rest}
        />
    )
}