import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import { storeApi } from './storeApi';

export const store = configureStore({
    reducer: {
        [storeApi.reducerPath]: storeApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware)
});

setupListeners(store.dispatch)