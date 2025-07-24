import React from "react"
import { Image } from "@heroui/react"
import Marquee from "react-fast-marquee"
import clsx from "clsx"

const images = [
    {
        src: "/tech/aptos.svg",
        alt: "aptos",
        key: "aptos",
        className: "h-8",
    },
    {
        src: "/tech/sui.svg",
        alt: "sui",
        key: "aptos",
        className: "h-10",
    },
    {
        src: "/tech/solana.svg",
        alt: "solana",
        key: "solana",
        className: "h-8",
    },
    {
        src: "/tech/monad.svg",
        alt: "monad",
        key: "monad",
        className: "h-8",
    },
    {
        src: "/tech/polygon.svg",
        alt: "polygon",
        key: "polygon",
        className: "h-10",
    },
    {
        src: "/tech/bnb.svg",
        alt: "bnb",
        key: "bnb",
        className: "h-10",
    },
    {
        src: "/tech/ethereum.svg",
        alt: "ethereum",
        key: "ethereum",
        className: "h-16",
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
