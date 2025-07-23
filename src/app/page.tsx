"use client"
import React from "react"
import { Hero } from "./_components"
import { Logo, StyledButton, StyledCard } from "@/components"

const Page = () => {
    return (
        <div>
            <StyledButton variant="faded" color="primary">
                Contact Us</StyledButton>
            <StyledButton  color="primary">
                Get Started
            </StyledButton>
            <Logo className="h-10"/>
            <StyledCard variant="variant1">
                <div className="text-white">
                    123
                </div>
            </StyledCard>
            <Hero/>   
        </div>
    )
}

export default Page