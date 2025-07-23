import { Image } from "@heroui/react"
import React from "react"
export interface LogoProps {
    className?: string
}
export const Logo = ({ className }: LogoProps) => {
    return <Image removeWrapper src="/logo.svg" alt="logo" className={className} />
}