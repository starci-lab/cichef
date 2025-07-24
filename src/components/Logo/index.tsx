import { WithClassNames } from "@/types"
import { Image } from "@heroui/react"
import React from "react"
export type LogoProps = WithClassNames
export const Logo = ({ className }: LogoProps) => {
    return <Image removeWrapper src="/logo.svg" alt="logo" className={className} />
}