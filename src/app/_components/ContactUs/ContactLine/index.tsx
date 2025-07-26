import { Button, Image } from "@heroui/react"
import { ArrowRightIcon } from "@phosphor-icons/react"
import React from "react"

export interface ContactLineProps {
    iconUrl: string 
    name: string
    action: () => void
}

export const ContactLine = ({ iconUrl, name, action }: ContactLineProps) => {
    return (
        <div className="flex items-center gap-2 justify-between group">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-medium bg-foreground-500/10 grid place-items-center group-hover:bg-primary/50 transition">
                    <Image
                        src={iconUrl}
                        alt={name}
                        removeWrapper
                        className="w-6 h-6 transition"
                        radius="none"
                    />
                </div>
                <div className="text-lg font-bold group-hover:text-primary transition">{name}</div>
            </div>
            <Button onPress={action} isIconOnly variant="flat" className="text-foreground group-hover:text-primary transition">
                <ArrowRightIcon className="w-5 h-5" />
            </Button>
        </div>
    )
}