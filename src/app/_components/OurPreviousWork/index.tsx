import React from "react"
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Chip,
    Image,
    Spacer,
} from "@heroui/react"
import { StyledTabs, Title } from "@/components"
import { OurPreviousWorkTab, useAppDispatch, useAppSelector } from "@/redux"
import { setOurPreviousWorkTab } from "@/redux/slices"
import { GithubLogoIcon, GlobeIcon, XLogoIcon } from "@phosphor-icons/react"

export interface Project {
  key: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  x?: string;
  tags: Array<string>;
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
            tags: ["Virtual Liquidity", "Debt Token", "DEX", "Aptos"],
            year: 2025,
        },
        {
            key: "cross-chain-meme-creator",
            title: "Cross-chain Meme Creator",
            description: "A multichain meme platform where you can create tokens on one chain and bridge them across others using Wormhole — mint, meme, and move!",
            image: "/images/projects/meme-creator.png",
            github: "https://github.com/Cross-chain-Meme-Token-Creator",
            tags: ["Meme", "Launchpad", "Sui", "BNB", "Aptos", "Solana", "Wormhole"],
            year: 2024,
        },
        {
            key: "nomas-aggregator",
            title: "Nomas Aggregator",
            description: "A lightning-fast DEX aggregator built for Monad. Nomas Aggregator fetches and caches raw DEX states off-chain, simulates 1M+ routes/sec, and delivers optimal prices in under 50ms — powering real-time swaps for Nomas Wallet.",
            image: "/images/projects/nomas-aggregator.png",
            github: "https://github.com/starci-lab/ci-aggregator",
            tags: ["Aggregator", "Solana", "Monad"],
            year: 2025,
        },
    ],
    [OurPreviousWorkTab.GameFi]: [
        {
            key: "cifarm",
            title: "Nomas Aggregator",
            description: "A lightning-fast DEX aggregator built for Monad. Nomas Aggregator fetches and caches raw DEX states off-chain, simulates 1M+ routes/sec, and delivers optimal prices in under 50ms — powering real-time swaps for Nomas Wallet.",
            image: "/images/projects/nomas-aggregator.png",
            github: "https://github.com/starci-lab/ci-aggregator",
            tags: ["Aggregator", "Solana", "Monad"],
            year: 2025,
        }
    ]
}
export const OurPreviousWork = () => {
    const ourPreviousWorkTab = useAppSelector(
        (state) => state.tabs.ourPreviousWorkTab
    )
    const dispatch = useAppDispatch()
    const tabs = [
        {
            key: OurPreviousWorkTab.DeFi,
            label: "DeFi",
        },
        {
            key: OurPreviousWorkTab.GameFi,
            label: "GameFi",
        },
        {
            key: OurPreviousWorkTab.NFT,
            label: "NFT",
        },
        {
            key: OurPreviousWorkTab.SocialFi,
            label: "SocialFi",
        },
        {
            key: OurPreviousWorkTab.RWA,
            label: "RWA",
        },
    ]
    return (
        <div className="max-w-[1024px] mx-auto px-6 relative">
            <Title
                variant="gradient2"
                className="text-center uppercase"
                text="Our previous work"
            />
            <Spacer y={6} />
            <div className="flex justify-center">
                <StyledTabs
                    tabs={tabs}
                    activeKey={ourPreviousWorkTab}
                    onTabChange={(key) => dispatch(setOurPreviousWorkTab(key))}
                />
            </div>
            <Spacer y={6} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects[ourPreviousWorkTab]?.map((project) => (
                    <Card key={project.key}>
                        <CardBody>
                            <div className="flex flex-col gap-2">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={300}
                                    height={300}
                                />
                                <div className="flex flex-col gap-2">
                                    <div className="text-lg font-bold">{project.title}</div>
                                    <div className="text-sm text-gray-500">
                                        {project.description}
                                    </div>
                                    <div className="flex flex-wrap gap-2 items-center">
                                        {project.tags.map((tag) => (
                                            <Chip variant="flat" color="primary" key={tag}>
                                                {tag}
                                            </Chip>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="flex gap-2 items-center">
                                {
                                    project.github && (
                                        <Button
                                            isIconOnly
                                            variant="light"
                                            onPress={() => window.open(project.github, "_blank")}
                                        >
                                            <GithubLogoIcon />
                                        </Button>
                                    )
                                }
                                {
                                    project.x && (
                                        <Button
                                            isIconOnly
                                            variant="light"
                                            onPress={() => window.open(project.x, "_blank")}
                                        >
                                            <XLogoIcon />
                                        </Button>
                                    )
                                }
                                {
                                    project.link && (
                                        <Button
                                            isIconOnly
                                            variant="light"
                                            onPress={() => window.open(project.link, "_blank")}
                                        >
                                            <GlobeIcon />
                                        </Button>
                                    )
                                }
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
