import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import { cartSlice } from './cartSlice';
import { storeApi } from './storeApi';

const rootReducer = combineReducers({
    [storeApi.reducerPath]: storeApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeApi.middleware)
});

setupListeners(store.dispatch)