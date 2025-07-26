import React from "react"
import {
    Spacer,
} from "@heroui/react"
import { StyledTabs, Title } from "@/components"
import { OurPreviousWorkTab, useAppDispatch, useAppSelector } from "@/redux"
import { setOurPreviousWorkTab } from "@/redux/slices"
import { EmblaCarousel } from "./EmblaCarousel"

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
            <EmblaCarousel/>
        </div>
    )
}
