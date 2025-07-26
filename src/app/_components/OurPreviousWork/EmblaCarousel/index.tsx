import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import ClassNames from "embla-carousel-class-names"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux"
import { OurPreviousWorkTab, setProjectEmblaApi } from "@/redux/slices"
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Image,
    Spacer,
} from "@heroui/react"
import { GithubLogoIcon, XLogoIcon, GlobeIcon } from "@phosphor-icons/react"
import { Chips, ChipValue, Title } from "@/components"
export interface Project {
  key: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  x?: string;
  tags: Array<ChipValue>;
  year: number;
}

export const projects: Partial<Record<OurPreviousWorkTab, Array<Project>>> = {
    [OurPreviousWorkTab.DeFi]: [
        {
            key: "ciswap",
            title: "CiSwap",
            description:
        "CiSwap is a next-gen DEX on Aptos powered by Virtual Liquidity. By minting debt-backed ciTokens, it enables instant token pair creation and trading — with no upfront capital. This unlocks capital efficiency, low-slippage trades, and programmable liquidity for any DeFi use case. Launch and scale markets faster, without barriers.",
            image: "/images/projects/ciswap.png",
            link: "https://ciswap.xyz",
            github: "https://github.com/starci-lab/ciswap-contracts",
            x: "https://x.com/CiSwapvAMM",
            tags: [
                { key: "DEX", label: "DEX" },
                { key: "Aptos", label: "Aptos" },
            ],
            year: 2025,
        },
        {
            key: "cross-chain-meme-creator",
            title: "Cross-chain Meme Creator",
            description:
        "A multichain meme platform where you can create tokens on one chain and bridge them across others using Wormhole — mint, meme, and move!",
            image: "/images/projects/meme-creator.png",
            github: "https://github.com/Cross-chain-Meme-Token-Creator",
            tags: [
                { key: "Meme", label: "Meme" },
                { key: "Launchpad", label: "Launchpad" },
                { key: "Wormhole", label: "Wormhole" },
                { key: "Sui", label: "Sui" },
                { key: "BNB", label: "BNB" },
                { key: "Solana", label: "Solana"}
            ],
            year: 2024,
        },
        {
            key: "nomas-aggregator",
            title: "Nomas Aggregator",
            description:
        "A lightning-fast DEX aggregator built for Monad. Nomas Aggregator fetches and caches raw DEX states off-chain, simulates 1M+ routes/sec, and delivers optimal prices in under 50ms — powering real-time swaps for Nomas Wallet.",
            image: "/images/projects/nomas-aggregator.png",
            github: "https://github.com/starci-lab/ci-aggregator",
            tags: [
                { key: "Aggregator", label: "Aggregator" },
                { key: "Solana", label: "Solana" },
                { key: "Monad", label: "Monad" },
            ],
            year: 2025,
        },
        {
            key: "nomas-aggregator2",
            title: "Nomas Aggregator",
            description:
        "A lightning-fast DEX aggregator built for Monad. Nomas Aggregator fetches and caches raw DEX states off-chain, simulates 1M+ routes/sec, and delivers optimal prices in under 50ms — powering real-time swaps for Nomas Wallet.",
            image: "/images/projects/nomas-aggregator.png",
            github: "https://github.com/starci-lab/ci-aggregator",
            tags: [
                { key: "Aggregator", label: "Aggregator" },
                { key: "Solana", label: "Solana" },
                { key: "Monad", label: "Monad" },
            ],
            year: 2025,
        },
    ],
    [OurPreviousWorkTab.GameFi]: [
        {
            key: "cifarm",
            title: "CiFarm",
            description:
        "Farm Thief Earn — the #1 MMO farming game on Solana.",
            image: "https://www.cifarm.xyz/logo.png",
            github: "https://github.com/starci-lab/cifarm",
            tags: [
                { key: "solana", label: "Solana" },
                { key: "mmo", label: "MMO" },
                { key: "PhaserJs", label: "PhaserJs" },
            ],
            x: "https://x.com/cifarmonsol",
            link: "https://cifarm.xyz",
            year: 2025,
        },
        {
            key: "pet-rising-game",
            title: "Pet Rising Game",
            description:
        "Airdropping 1000+ pets to the community.",
            image: "/images/projects/pet-rising-game.png",
            github: "https://github.com/starci-lab/blockchain-pet-simulator",
            tags: [
                { key: "monad", label: "Monad" },
            ],
            year: 2025,
        },
    ],
    [OurPreviousWorkTab.NFT]: [
        {
            key: "llamao",
            title: "Llamao",
            description:
            "The first meme ideology on Monad — Llamaoism blends satire, culture, and NFTs into one on-chain movement. Built to test L1 infra with vibes.",
            image: "/icons/llamao.jpg",
            github: "https://github.com/starci-lab/llammao",
            tags: [
                { key: "monad", label: "Monad" },
                { key: "magiceden", label: "Magic Eden" },
            ],
            x: "https://x.com/llamao_",
            year: 2025,
        },
    ]
}

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay({ delay: 4000, stopOnInteraction: false }), ClassNames()]
    )

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setProjectEmblaApi(emblaApi))
    }, [emblaApi, dispatch])
    const tab = useAppSelector((state) => state.tabs.ourPreviousWorkTab)
    return (
        <div className="w-full h-full">
            {(projects[tab] && projects[tab].length > 0) ?
                <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex items-stretch h-full touch-pan-y">
                        {projects[tab]?.map((project) => (
                            <div
                                key={project.key}
                                className="w-[100%] min-w-[100%] sm:w-[33.3333%] sm:min-w-[33.3333%] px-2 box-border"
                            >
                                <Card className="h-full">
                                    <CardBody>
                                        <div className="flex flex-col gap-2">
                                            <Image
                                                classNames={{
                                                    wrapper: "w-full aspect-square min-w-full"
                                                }}
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-contain"
                                            />
                                            <Title
                                                text={project.title}
                                                variant="primary"
                                                className="!text-lg"
                                            />
                                            <div className="text-sm text-gray-500">
                                                {project.description}
                                            </div>
                                        </div>
                                    </CardBody>
                                    <CardFooter>
                                        <div>
                                            <Chips items={project.tags} />
                                            <Spacer y={4} />
                                            <div className="flex gap-2 items-center">
                                                {project.github && (
                                                    <Button
                                                        isIconOnly
                                                        variant="light"
                                                        onPress={() => window.open(project.github, "_blank")}
                                                    >
                                                        <GithubLogoIcon />
                                                    </Button>
                                                )}
                                                {project.x && (
                                                    <Button
                                                        isIconOnly
                                                        variant="light"
                                                        onPress={() => window.open(project.x, "_blank")}
                                                    >
                                                        <XLogoIcon />
                                                    </Button>
                                                )}
                                                {project.link && (
                                                    <Button
                                                        isIconOnly
                                                        variant="light"
                                                        onPress={() => window.open(project.link, "_blank")}
                                                    >
                                                        <GlobeIcon />
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div> 
                        ))}
                    </div>
                </div> :
                <div className="flex items-center justify-center h-full">
                    <Title text="No projects found" variant="primary" className="!text-xl !text-foreground-500"/>
                </div>
            }
        </div>
    )
}
