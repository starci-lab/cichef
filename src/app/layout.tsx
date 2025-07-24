import type { Metadata } from "next"
import React, { PropsWithChildren } from "react"
import "./globals.css"
import { WrappedLayout } from "./WrappedLayout"
import { latoFont } from "@/fonts"

export const metadata: Metadata = {
    title: "CiChef",
    description: "",
}

const Layout = ({
    children,
}: PropsWithChildren) => {
    return (
        <html lang="en">
            <body
                className={`${latoFont.className} antialiased`}
            >
                <WrappedLayout>{children}</WrappedLayout>
            </body>
        </html>
    )
}

export default Layout
