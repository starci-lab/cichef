import React from "react"

export const Hero = () => {
    return (
        <div className="w-full bg-red-500 relative h-[300px]">
            <div
                className="absolute w-full aspect-[1270/802] bg-cover bg-center top-0 left-0"
                style={{ backgroundImage: "url('/backgrounds/background-1.png')" }}
            >
            </div>
        </div>
    )
}