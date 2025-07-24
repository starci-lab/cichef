import React from "react"
import { Tab, Tabs, tv } from "@heroui/react"
import { WithClassNames } from "@/types"
import clsx from "clsx"

export type Key = string | number

export interface StyledTab {
  label: string;
  key: Key;
}

const tabsTv = tv({
    slots: {
        base: "rounded-medium",
        tabList: "rounded-none",
        tabContent: "",
        tab: "",
        cursor: ""
    },
    variants: {
        variant: {
            variant1: {
                base: "gradient-border-white-primary rounded-medium p-0.5 overflow-hidden backdrop-blur-sm",
                tabList: "gap-4",
                tabContent: "leading-none",
                tab: "h-7 px-4",
                cursor: "bottom-0.5 w-[calc(100%-24px)] bg-gradient-to-r from-white via-secondary to-primary"
            },
        },
    },
    defaultVariants: {
        variant: "variant1",
    },
})


export interface StyledTabsProps extends WithClassNames {
  className?: string;
  tabs: Array<StyledTab>;
  activeKey: string;
  onTabChange: (key: Key) => void;
  variant?: "variant1"
}

export const StyledTabs = ({
    className,
    tabs,
    activeKey,
    onTabChange,
    variant = "variant1",
}: StyledTabsProps) => {
    const { base, tabList, tabContent, tab, cursor } = tabsTv({ variant })
    return (
        <Tabs
            classNames={{
                tabList: tabList(),
                tabContent: tabContent(),
                tab: tab(),
                cursor: cursor(),
            }}
            color="primary"
            variant="underlined"
            className={clsx(base(), className)}
            selectedKey={activeKey}
            onSelectionChange={(key) => onTabChange(key as Key)}
        >
            {tabs.map((tab) => (
                <Tab key={tab.key} title={tab.label} />
            ))}
        </Tabs>
    )
}
