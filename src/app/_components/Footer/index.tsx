import React from "react"

export const Footer = () => {
    return (
        <div className="min-h-[200vh] relative overflow-hidden">
            {/* Background aurora gradient */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `
                radial-gradient(at 20% 30%, rgba(0,247,230,0.4) 0%, transparent 50%),
                radial-gradient(at 80% 60%, rgba(0,255,200,0.25) 0%, transparent 50%),
                radial-gradient(at 50% 90%, rgba(0,255,255,0.2) 0%, transparent 50%),
                linear-gradient(to bottom, #041c3c, #072f4f)
              `,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundBlendMode: "screen",
                }}
            />
    
            {/* Animated blobs (optional) */}
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#00f7e6] opacity-20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-[#00fff7] opacity-15 blur-2xl rounded-full animate-ping" />
    
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-[100vh] text-white text-center px-4">
                <h1 className="text-5xl font-bold mb-4">Aurora Mesh Hero</h1>
                <p className="text-lg opacity-80 max-w-xl">
              Full height, smooth gradient background for landing pages
                </p>
            </div>
        </div>
    )
}