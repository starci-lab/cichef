import React from "react"
import { CardBody } from "@heroui/react"
import { StyledCard, Title } from "@/components"

const stats = [
    {
        key: "project-delivered",
        title: "20+",
        subtitle: "Project Delivered",
    },
    {
        key: "clients",
        title: "30+",
        subtitle: "Clients",
    },
    {
        key: "support",
        title: "24/7",
        subtitle: "Support",
    },
]
export const Stats = () => {
    return (
        <div className="grid sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
                <StyledCard key={stat.key} className="min-h-[200px]">
                    <CardBody className="grid place-items-center h-full">
                        <div>
                            <div className="text-center">
                                <Title text={stat.title}/>
                            </div>
                            <div className="text-xl uppercase text-center">
                                {stat.subtitle}
                            </div>
                        </div>
                    </CardBody>
                </StyledCard>
            ))}
        </div>
    )
}