import type { Metadata } from "next"
import React, { PropsWithChildren } from "react"
import "./globals.css"
import { WrappedLayout } from "./WrappedLayout"
import { Lato } from "next/font/google"

export const metadata: Metadata = {
    title: "CiChef",
    description: "",
}

const font = Lato({
    weight: "700",
    subsets: ["latin"],
})

const Layout = ({
    children,
}: PropsWithChildren) => {
    return (
        <html lang="en">
            <body
                className={`${font.className} antialiased`}
            >
                <WrappedLayout>{children}</WrappedLayout>
            </body>
        </html>
    )
}

export default Layout
