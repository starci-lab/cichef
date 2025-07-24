import { useIsMobile } from "@/hooks"
import { WithClassNames } from "@/types"
import { Image } from "@heroui/react"
import React from "react"
export type LogoProps = WithClassNames
export const Logo = ({ className }: LogoProps) => {
    const isMobile = useIsMobile()
    return <Image removeWrapper src={isMobile ? "/logo-mobile.svg" : "/logo.svg"} alt="logo" className={className} />
}