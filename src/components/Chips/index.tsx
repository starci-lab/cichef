import { Chip, Tooltip } from "@heroui/react"
import React from "react"

export interface ChipValue {
    key: string
    label: string
}
export interface ChipsProps {
  items: Array<ChipValue>
}

export const Chips = ({ items }: ChipsProps) => {
    const visible = items.slice(0, 2)
    const hidden = items.slice(2)

    return (
        <div className="flex flex-wrap gap-2">
            {visible.map((item) => (
                <Chip key={item.key} variant="flat">{item.label}</Chip>
            ))}

            {hidden.length > 0 && (
                <Tooltip
                    content={
                        <div className="flex flex-col gap-1">
                            {hidden.map((item) => (
                                <div key={item.key} className="text-sm">
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    }
                    placement="top"
                >
                    <Chip variant="flat" color="default">
            +{hidden.length}
                    </Chip>
                </Tooltip>
            )}
        </div>
    )
}
