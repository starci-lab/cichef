
import { configureStore } from "@reduxjs/toolkit"
import { caroselsReducer, tabsReducer } from "./slices"

export const store = configureStore({
    reducer: {
        tabs: tabsReducer,
        carosels: caroselsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
