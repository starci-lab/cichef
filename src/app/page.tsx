"use client"
import React from "react"
import { Hero } from "./_components"
import {
    Crop,
    Logo,
    StyledButton,
    StyledCard,
    StyledTabs,
    Title,
} from "@/components"
import { CardBody, Spacer } from "@heroui/react"

const Page = () => {
    return (
        <div>
            <Hero />
            <StyledButton variant="faded" color="primary">
        Contact Us
            </StyledButton>
            <StyledButton color="primary">Get Started</StyledButton>
            <Logo className="h-10" />
            <div className="grid grid-cols-3 gap-4">
                <StyledCard variant="variant1">123123</StyledCard>
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
            <Spacer y={6}/>
            <div className="grid grid-cols-3 gap-4">
                <StyledCard variant="variant2">
                    <CardBody>
                    213
                    </CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.Cucumber}>
                    <CardBody>
                    213
                    </CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.Eggplant}>
                    <CardBody>
                    213
                    </CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.Parsnip}>
                    <CardBody>
                    213
                    </CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.Squash}>
                    <CardBody>
                        213
                    </CardBody>
                </StyledCard>
                <StyledCard variant="variant2" crop={Crop.BellPepper}>
                    <CardBody>
                        213
                    </CardBody>
                </StyledCard>
            </div>
        </div>
    )
}

export default Page
