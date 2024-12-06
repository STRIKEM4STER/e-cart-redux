import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItemToCart : (state, action)=>{
            state.push(action.payload)
        },
        removeCartItem : (state, action)=>{
            return state.filter((item)=>item.id != action.payload)
        },
        emptyCart : (state)=>{
            return state = []
        }
    }
})

export const {addItemToCart, removeCartItem, emptyCart} = cartSlice.actions

export default cartSlice.reducer