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
        base: "",
        tabList: "",
        tabContent: "",
        tab: "",
        cursor: ""
    },
    variants: {
        variant: {
            variant1: {
                base: "",
                tabList: "gap-4",
                tabContent: "group-data-[selected=true]:text-background",
                tab: "",
                cursor: ""
            },
        },
    },
    defaultVariants: {
        variant: "variant1",
    },
})


export interface StyledTabsProps<KeyT=string> extends WithClassNames {
  className?: string;
  tabs: Array<StyledTab>;
  activeKey: KeyT;
  onTabChange: (key: Key) => void;
  variant?: "variant1"
}

export const StyledTabs = <KeyT=string>({
    className,
    tabs,
    activeKey,
    onTabChange,
    variant = "variant1",
}: StyledTabsProps<KeyT>) => {
    const { base, tabList, tabContent, tab, cursor } = tabsTv({ variant })
    return (
        <Tabs
            classNames={{
                tabList: tabList(),
                tabContent: tabContent(),
                tab: tab(),
                cursor: cursor(),
            }}
            size="lg"
            variant="bordered"
            color="primary"
            defaultSelectedKey={activeKey as string}
            className={clsx(base(), className)}
            selectedKey={activeKey as string}
            onSelectionChange={(key) => onTabChange(key as string)}
        >
            {tabs.map((tab) => (
                <Tab key={tab.key} value={tab.key} title={tab.label} />
            ))}
        </Tabs>
    )
}
