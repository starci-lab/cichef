
"use client"
import React, { PropsWithChildren, Suspense } from "react"
import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/redux"
import { IconContext } from "@phosphor-icons/react"
import { SWRConfig } from "swr"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export const ContentLayout = ({ children }: PropsWithChildren) => {
    return (
        <SWRConfig value={{
            provider: () => new Map(),
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateIfStale: false,
        }}>
            <HeroUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                    <IconContext.Provider
                        value={{
                            size: 20,
                        }}
                    >
                        {children}
                        <ToastProvider />
                    </IconContext.Provider>
                </NextThemesProvider>
            </HeroUIProvider>
        </SWRConfig>
    )
}
export const WrappedLayout = ({ children }: PropsWithChildren) => {
    return (
        <Suspense>
            <ReduxProvider store={store}>
                <ContentLayout>
                    {children}
                </ContentLayout>
            </ReduxProvider>
        </Suspense>
    )
}
