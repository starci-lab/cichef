"use client"
import React from "react"
import { CookingFlow, Hero, MarqueeTicker, OurPreviousWork, OurServices, Stats, OurTeam, ContactUs, Footer } from "./_components"
import {
    LightOrb,
} from "@/components"
import { Image, Spacer } from "@heroui/react"

const Page = () => {
    return (
        <div className="relative max-w-screen overflow-hidden">
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
            <Spacer y={36} />
            <OurServices/>
            <Spacer y={36} />
            <CookingFlow />
            <Spacer y={36} />
            <OurTeam />   
            <Spacer y={36} />
            <ContactUs/>
            <Spacer y={36} />
            <Footer/>
            <Spacer y={6} />
        </div>
    )
}

export default Page
