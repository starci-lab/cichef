import React from "react"
import { EllipseSvg } from "./EllipeSvg"
import { Chip } from "@heroui/react"
import clsx from "clsx"

export enum ChipPalette {
  Pallete1 = "pallete1",
  Pallete2 = "pallete2",
  Pallete3 = "pallete3",
}

export const chipPaletteMap = {
    [ChipPalette.Pallete1]: {
        className:
      "bg-chip-1",
    },
    [ChipPalette.Pallete2]: {
        className:
      "bg-chip-2",
    },
    [ChipPalette.Pallete3]: {
        className:
      "bg-chip-3",
    },
}

export type EllipticalCardProps = {
  palette?: ChipPalette;
  chipText?: string;
};
export const EllipticalCard = ({
    palette = ChipPalette.Pallete1,
    chipText = "CEO",
}: EllipticalCardProps) => {
    return (
        <div className="relative w-[300px] h-[350px] flex items-center justify-center">
            {/* <img
                src="https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/468551698_551419647787337_4757030506567463756_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEQZqiNTlgN6xrWNIzllh6sxNcAvDPnxmXE1wC8M-fGZTu0p6avkvCwAxGlbqbHhzsxeR0VcGjhyEhCbZOCAroB&_nc_ohc=0VHEhHliF30Q7kNvwGHBsHD&_nc_oc=Adk_cWfZvvm-wFHd_CV8aIk0OxoHyBbwQvXYcZCQSnXSYozf3hW806xuNz7jKszFzHg&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=Vq9Ea5kH7Xhwt9Jqi2SmWw&oh=00_AfRqfkBSj3LxCCn1hUSniMzdMBDmHRtEP4ulosq-qpKMeg&oe=6887E25E" // 👈 Thay bằng ảnh thực tế
                alt="CEO"
                className="relative z-10 w-[220px] h-[280px] object-cover rounded-xl"
            /> */}
            <EllipseSvg />
            <Chip
                className={clsx(
                    "absolute bottom-14 px-4 text-lg rounded-none z-20",
                    chipPaletteMap[palette].className
                )}
            >
                {chipText}
            </Chip>
        </div>
    )
}
