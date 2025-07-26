import React from "react"
import { Chef, Divider, ProcessStepCard, Title } from "@/components"
import { Spacer } from "@heroui/react"

export const CookingFlow = () => {
    const flows = [
        {
            key: "chef1",
            index: ".01",
            title: "Preparation",
            subtitle: "CiChef preparing ingredients",
            chef: Chef.Pose1,
            leftToRight: true,
            descriptions: [
                {
                    key: "contact-us",
                    value: "Contact us via Calendly, Gmail, or Telegram",
                },
                {
                    key: "negotiate-price",
                    value: "Negotiate the price and delivery timeline",
                },
                {
                    key: "share-requirements",
                    value: "Share your project requirements with us",
                }
            ],
            divider: Divider.Pallete1
        },
        {
            key: "chef2",
            index: ".02",
            title: "Pre-cooking",
            subtitle: "CiChef pre-processing ingredients",
            chef: Chef.Pose2,
            leftToRight: false,
            descriptions: [
                {
                    key: "assign-members",
                    value: "The team assigns members and finalizes requirements",
                },
                {
                    key: "provide-feedback",
                    value: "We provide feedback about potential changes and technologies to be used",
                },
            ],
            divider: Divider.Pallete2
        },
        {
            key: "chef3",
            index: ".03",
            title: "Cooking",
            subtitle: "CiChef cooking the dish",
            chef: Chef.Pose3,
            leftToRight: true,
            descriptions: [
                {
                    key: "develop-product",
                    value: "The team develops the product and continuously provides updates to the client",
                },
            ],
            divider: Divider.Pallete3
        },
        {
            key: "chef4",
            index: ".04",
            title: " Serving & Cleaning Up",
            subtitle: "CiChef shipping and doing dishes",
            leftToRight: false,
            chef: Chef.Pose4,
            descriptions: [
                {
                    key: "deliver-product",
                    value: "The team delivers the final product to the client",
                },
                {
                    key: "clean-up",
                    value: "We ensure everything is clean and ready for handover",
                }
            ],
            divider: Divider.Pallete4
        },
        {
            key: "chef5",
            index: ".05",
            title: " Maintenance",
            subtitle: "CiChef keeping the kitchen running",
            leftToRight: true,
            chef: Chef.Pose5,
            descriptions: [
                {
                    key: "maintain-and-support",
                    value: "We maintain and support the website to ensure smooth ongoing operations",
                },
            ],
            divider: Divider.Pallete4
        },
    ]
    return (
        <div className="max-w-[1024px] mx-auto px-6">
            <Title className="text-center uppercase" variant="gradient2" text="Cooking Flow"/>
            <Spacer y={6}/>
            <div className="text-sm text-center text-foreground-500">
                Cooking with this flow will help you achieve greater efficiency.
            </div>
            <Spacer y={48}/>
            <div className="flex flex-col gap-36">
                {flows.map((flow) => (
                    <ProcessStepCard
                        key={flow.key}
                        title={flow.title}
                        subTitle={flow.subtitle}
                        chef={flow.chef}
                        leftToRight={flow.leftToRight}
                        descriptions={flow.descriptions}
                        divider={flow.divider}
                    />
                ))}
            </div>
        </div>
    )
}
