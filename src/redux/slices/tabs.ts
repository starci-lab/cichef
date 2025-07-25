import { createSlice } from "@reduxjs/toolkit"

export enum OurPreviousWorkTab {
    DeFi = "deFi",
    GameFi = "gameFi",
    NFT = "nft",
    SocialFi = "socialFi",
    RWA = "rwa"
}
export interface TabSlice {
    ourPreviousWorkTab: OurPreviousWorkTab
}

const initialState: TabSlice = {
    ourPreviousWorkTab: OurPreviousWorkTab.DeFi,
}

export const tabsSlice = createSlice({
    name: "tabs",
    initialState,
    reducers: {
        setOurPreviousWorkTab: (state, action) => {
            state.ourPreviousWorkTab = action.payload
        },
    },
})

export const tabsReducer = tabsSlice.reducer
export const {
    setOurPreviousWorkTab,
} = tabsSlice.actions