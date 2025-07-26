import React from "react"
import { Image, Spacer } from "@heroui/react"
import { MailboxIcon, MapPinLineIcon, PhoneIcon } from "@phosphor-icons/react"

const contactLines = [
    {
        key: "phone",
        icon: <PhoneIcon/>,
        value: "+84828678897",
    },
    {
        key: "email",
        icon: <MailboxIcon/>,
        value: "cuongnvtse160875@gmail.com",
    },
    {
        key: "address",
        icon: <MapPinLineIcon/>,
        value: "Ho Chi Minh City, Vietnam",
    }
]
export const Footer = () => {
    return (
        <div className="max-w-[1024px] mx-auto relative">
            <div className="p-6 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="w-full rounded-xl">
                        <Image removeWrapper src="/logo-footer.svg" alt="footer" className="h-16 object-cover" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col gap-2 text-foreground-500">
                            {
                                contactLines.map(({ key, ...rest}) => (
                                    <div key={key} className="flex items-center gap-2">
                                        {rest.icon}
                                        <span>{rest.value}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Spacer y={12}/>
            <div className="text-center text-foreground-500 text-sm">
                Copyright ©{new Date().getFullYear()} CICHEF. All Right Reserved
            </div>
        </div>
    )
}