import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem(state, action) {
            let isInArray = false
            state.items.forEach(elem => {
                if(elem._id === action.payload._id) isInArray = true
            })
            if(isInArray === false)
                state.items = [...state.items, action.payload]
        },
        deleteItem(state, action) {
            state.items = state.items.filter(e => e._id !== action.payload._id)
        }
    }
})

export const {addItem, deleteItem} = cartSlice.actions