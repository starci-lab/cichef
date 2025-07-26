import React from "react"
import { Spacer, Image } from "@heroui/react"
import { Title } from "@/components"
import { ContactLine } from "./ContactLine"

export const contactLines = [
    {
        key: "telegram",
        name: "Telegram",
        iconUrl: "/contact-us/telegram.svg",
        action: () => {
            window.open("https://t.me/tucuong183", "_blank")
        }
    },
    {
        key: "calendly",
        name: "Calendly",
        iconUrl: "/contact-us/calendly.svg",
        action: () => {
            window.open("https://calendly.com/tucuong1832002", "_blank")
        }
    },
    {
        key: "gmail",
        name: "Gmail",
        iconUrl: "/contact-us/gmail.svg",
        action: () => {
            window.open("https://mail.google.com/mail/?view=cm&to=cuongnvtse160875@gmail.com", "_blank")
        }   
    }
]
export const ContactUs = () => {
    return (
        <div className="max-w-[1024px] mx-auto px-6 relative">
            <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
                <div className="relative w-full h-[500px] overflow-hidden grid place-items-center">
                    <div className="relative z-50 text-center">
                        <Title
                            variant="gradient2"
                            className="uppercase"
                            text="Contact us"
                        />
                        <Spacer y={6} />
                        <div className="text-sm text-foreground-500 max-w-[300px] mx-auto">
                        You can reach us anytime through the methods below — we&apos;re available 24/7 and always ready to respond.
                        </div>
                        <Spacer y={12} />
                        <div className="flex flex-col gap-4">
                            {
                                contactLines.map(({ key, ...rest}) => (
                                    <ContactLine key={key} {...rest} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Image src="/coins.png" removeWrapper style={{
                opacity: 0.4
            }} className="max-w-[800px] mx-auto px-6 relative -mt-64"/>
        </div>
    )
}
