import { Logo, StyledButton, Title } from "@/components"
import { Spacer } from "@heroui/react"
import React from "react"
import { motion } from "framer-motion"

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

export const Hero = () => {
    const navItems = [
        {
            key: "our-services",
            label: "Our services",
            action: () => console.log("Our services"),
        },
        {
            key: "our-previous-work",
            label: "Our previous work",
            action: () => console.log("Our previous work"),
        },
        {
            key: "techstacks",
            label: "Techstacks",
            action: () => console.log("Techstacks"),
        },
        {
            key: "why-choose-us",
            label: "Why choose us",
            action: () => console.log("Why choose us"),
        },
    ]

    return (
        <motion.div
            className="rounded-2xl bg-foreground-500/20 p-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            {/* Header */}
            <div className="flex justify-between items-center">
                <Logo />
                <div className="gap-4 hidden md:flex">
                    {navItems.map((item) => (
                        <motion.div
                            key={item.key}
                            className="text-sm cursor-pointer"
                            onClick={item.action}
                            variants={fadeInUp}
                        >
                            {item.label}
                        </motion.div>
                    ))}
                </div>
                <div className="flex gap-2 items-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <StyledButton variant="faded" color="primary">
              Contact Us
                        </StyledButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <StyledButton color="primary">Get Started</StyledButton>
                    </motion.div>
                </div>
            </div>

            <Spacer y={12} />

            {/* Content */}
            <div className="sm:flex justify-between items-center gap-6">
                <motion.div
                    className="flex-1"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={fadeInUp}>
                        <Title text="We’re Experienced" className="whitespace-nowrap" />
                        <Title text="Web3 Chefs" variant="gradient" />
                    </motion.div>
                    <Spacer y={4} />
                    <motion.div variants={fadeInUp} className="text-lg font-medium">
                        <span className="text-xl font-bold text-primary">40%</span>
                        <span> Lower Cost, </span>
                        <span className="text-xl font-bold text-primary">100%</span>
                        <span> Faster Delivery </span>
                        <span>*</span>
                        <span>.</span>
                    </motion.div>
                    <motion.div
                        className="text-sm text-foreground-500 italic"
                        variants={fadeInUp}
                    >
            *Compared to other agencies.
                    </motion.div>
                    <Spacer y={4} />
                    <motion.div
                        className="text-sm text-foreground-500"
                        variants={fadeInUp}
                    >
            A team of seasoned Web3 developers, we ship products by deeply
            understanding customer needs — even on a small budget. From Dapps
            to full-stack blockchain platforms, we can handle any kind of
            blockchain project.
                    </motion.div>
                </motion.div>

                {/* Floating Image */}
                <motion.img
                    src="/chefs/main.png"
                    className="w-full h-full sm:w-[400px] sm:h-auto"
                    animate={{ y: [0, -10, 0], scale: [1, 1.01, 1] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
            </div>
        </motion.div>
    )
}
