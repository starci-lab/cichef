import { createSlice } from "@reduxjs/toolkit"
import { EmblaCarouselType } from "embla-carousel"

export interface CarouselSlice {
    projectEmbraApi?: EmblaCarouselType
    projectPage: number
}

const initialState: CarouselSlice = {
    projectPage: 0
}

export const caroselsSlice = createSlice({
    name: "carosels",
    initialState,
    reducers: {
        setProjectEmblaApi: (state, action) => {
            state.projectEmbraApi = action.payload
        },
        setProjectPage: (state, action) => {
            state.projectPage = action.payload
        },
    },
})

export const caroselsReducer = caroselsSlice.reducer
export const {
    setProjectEmblaApi,
    setProjectPage,
} = caroselsSlice.actions