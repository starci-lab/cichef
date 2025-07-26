import React from "react"
import {
    CardBody,
    Spacer,
} from "@heroui/react"
import { Crop, StyledCard, Title } from "@/components"

export const OurServices = () => {
    const services = [
        {
            key: "ux-ui",
            name: "UX/UI",
            crop: Crop.Pumpkin,
            description:
            "We design intuitive interfaces and seamless user journeys that convert. From wireframes to pixel-perfect screens — all crafted with empathy.",
        },
        {
            key: "blockchain-developer",
            name: "Blockchain Developer",
            crop: Crop.Parsnip,
            description:
            "Smart contract engineers fluent in Solidity, Move, Rust, and more. We build secure, gas-optimized onchain logic across EVM, SVM, MoveVM.",
        },
        {
            key: "web-developer",
            name: "Web Developer",
            crop: Crop.Cucumber,
            description:
            "Frontend & backend developers crafting fast, responsive, and scalable web apps — from landing pages to full-stack dashboards.",
        },
        {
            key: "mobile-app-developers",
            name: "Mobile App Developers",
            crop: Crop.Eggplant,
            description:
            "We ship polished mobile experiences on iOS and Android using React Native, Flutter, or native SDKs. Built for performance and usability.",
        },
        {
            key: "game-developer",
            name: "Game Developer",
            crop: Crop.BellPepper,
            description:
            "2D/3D game devs with a love for fun. We build cross-platform WebGL, Unity, and pixel-art games with smooth UX and tight mechanics.",
        },
        {
            key: "payment-development",
            name: "Payment Development",
            crop: Crop.Squash,
            description:
            "We integrate fiat & crypto payments seamlessly, including Stripe, USDC, Solana Pay, Aptos Payment, onramp/offramp SDKs & beyond.",
        },
    ]
    return (
        <div className="max-w-[1024px] mx-auto px-6 relative">
            <Title
                variant="gradient2"
                className="text-center uppercase"
                text="Our services"
            />
            <Spacer y={24} />
            <div className="grid sm:grid-cols-3 gap-x-4 gap-y-12 place-items-stretch">
                {services.map((service) => (
                    <StyledCard variant="variant2" crop={service.crop} key={service.key}>
                        <CardBody className="grid place-items-center">
                            <Title text={service.name} className="!text-lg"/>
                            <Spacer y={4}/>
                            <div className="text-sm text-foreground-500">
                                {service.description}
                            </div>
                        </CardBody>
                    </StyledCard>
                ))}
            </div>
        </div>
    )
}
