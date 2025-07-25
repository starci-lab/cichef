"use client"
import React from "react"
import { Hero, MarqueeTicker, OurPreviousWork, Stats } from "./_components"
import {
    Crop,
    Logo,
    StyledButton,
    StyledCard,
    StyledTabs,
    Title,
    ProcessStepCard,
    Chef,
    Divider,
    EllipticalCard,
    LightOrb,
} from "@/components"
import { CardBody, Image, Spacer } from "@heroui/react"

const Page = () => {
    return (
        <>
            <LightOrb className="mx-auto" />
            <Spacer y={6} />
            <div className="max-w-[1024px] mx-auto px-6 relative">
                <Hero />
            </div>
            <Spacer y={12} />
            <div className="max-w-[1024px] mx-auto px-6 relative">
                <MarqueeTicker />
            </div>
            <Spacer y={36} />
            <div className="relative">
                <div className="max-w-[1024px] mx-auto px-6 relative">
                    <Image
                        src="/effects/effect-1.png"
                        alt="effect-1"
                        removeWrapper
                        className="-z-10 w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                    />
                    <Stats />
                </div>
            </div>
            <Spacer y={36} />
            <OurPreviousWork />
            <StyledButton variant="faded" color="primary">
        Contact Us
            </StyledButton>
            <StyledButton color="primary">Get Started</StyledButton>
            <Logo className="h-10" />
            <div className="grid grid-cols-3 gap-4">
                <StyledCard variant="variant1">
                    <div className="bg-red-500 rounded-medium">123</div>
                </StyledCard>
                <div className="bg-blue-500 rounded-medium border border-2 bg">
                    <div className="bg-red-500 rounded-medium">123</div>
                </div>
                <StyledCard variant="variant1">123123</StyledCard>
                <StyledCard variant="variant1">123123</StyledCard>
            </div>
            <Title text="Hello World" />
            <Title text="Hello World" variant="gradient" />
            <StyledTabs
                tabs={[
                    { label: "GameFi", key: "tab1" },
                    { label: "DeFi", key: "tab2" },
                ]}
                activeKey="tab1"
                onTabChange={() => {}}
            />
            <Spacer y={6} />
            <div className="grid grid-cols-3 gap-4">
                <StyledCard variant="variant2">123</StyledCard>
                <StyledCard variant="variant2" crop={Crop.Cucumber}>
                    <CardBody>213</CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.Eggplant}>
                    <CardBody>213</CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.Parsnip}>
                    <CardBody>213</CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.Squash}>
                    <CardBody>213</CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.BellPepper}>
                    <CardBody>213</CardBody>
                </StyledCard>
            </div>
            <ProcessStepCard
                title="Step 1"
                subTitle="Subtitle 1"
                descriptions={[
                    { key: "Description 1", value: "Description 1" },
                    { key: "Description 2", value: "Description 2" },
                    { key: "Description 3", value: "Description 3" },
                ]}
                image="https://via.placeholder.com/150"
            />
            <ProcessStepCard
                title="Step 1"
                subTitle="Subtitle 1"
                leftToRight={false}
                chef={Chef.Pose2}
                descriptions={[
                    { key: "Description 1", value: "Description 1" },
                    { key: "Description 2", value: "Description 2" },
                    { key: "Description 3", value: "Description 3" },
                ]}
                divider={Divider.Pallete2}
                image="https://via.placeholder.com/150"
            />
            <EllipticalCard />
        </>
    )
}

export default Page
