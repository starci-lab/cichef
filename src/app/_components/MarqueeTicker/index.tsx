import React from "react"
import { Image, Spacer } from "@heroui/react"
import Marquee from "react-fast-marquee"
import clsx from "clsx"

const imagesTop = [
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

const imagesBottom = [
    {
        src: "/tech/aws.svg",
        alt: "aws",
        key: "aws",
        className: "h-16",
    },
    {
        src: "/tech/wormhole.svg",
        alt: "wormhole",
        key: "wormhole",
        className: "h-5",
    },
    {
        src: "/tech/google-cloud.svg",
        alt: "google-cloud",
        key: "google-cloud",
        className: "h-10",
    },
    {
        src: "/tech/lifi.svg",
        alt: "lifi",
        key: "lifi",
        className: "h-10",
    },
    {
        src: "/tech/zksync.svg",
        alt: "zksync",
        key: "zksync",
        className: "h-8",
    },
]

export const MarqueeTicker = () => {
    return (
        <div>
            <Marquee speed={50} gradient={true} gradientColor="black">
                {imagesTop.map(({ src, alt, key, className }) => (
                    <Image
                        key={key}
                        className={clsx("h-10 mx-6", className)}
                        src={src}
                        alt={alt}
                        radius="none"
                        removeWrapper
                    />
                ))}
            </Marquee>
            <Spacer y={6}/>
            <Marquee speed={50} direction="right" gradient={true} gradientColor="black">
                {imagesBottom.map(({ src, alt, key, className }) => (
                    <Image
                        key={key}
                        radius="none"
                        className={clsx("h-10 mx-6", className)}
                        src={src}
                        alt={alt}
                        removeWrapper
                    />
                ))}
            </Marquee>
        </div>
    )
}
