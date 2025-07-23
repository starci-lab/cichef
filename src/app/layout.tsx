import type { Metadata } from "next"
import React, { PropsWithChildren } from "react"
import "./globals.css"
import { WrappedLayout } from "./WrappedLayout"
import { Open_Sans } from "next/font/google"

export const metadata: Metadata = {
    title: "CiChef",
    description: "",
}

const font = Open_Sans({
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
