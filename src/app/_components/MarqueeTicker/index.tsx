import React from "react"
import { Image } from "@heroui/react"
import Marquee from "react-fast-marquee"
import clsx from "clsx"

const images = [
    {
        src: "/tech/aptos.svg",
        alt: "aptos",
        key: "aptos",
        className: "h-12",
    },
    {
        src: "/tech/sui.svg",
        alt: "sui",
        key: "aptos",
        className: "h-16",
    },
    {
        src: "/tech/solana.svg",
        alt: "solana",
        key: "solana",
        className: "h-[44px]",
    },
    {
        src: "/tech/ethereum.svg",
        alt: "ethereum",
        key: "ethereum",
        className: "h-20",
    },
]

export const MarqueeTicker = () => {
    return (
        <Marquee speed={50} gradient={true} gradientColor="black">
            {images.map(({ src, alt, key, className }) => (
                <Image
                    key={key}
                    className={clsx("h-10 mx-6", className)}
                    src={src}
                    alt={alt}
                    removeWrapper
                />
            ))}
        </Marquee>
    )
}
