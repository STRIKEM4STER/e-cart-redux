import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // to add itm to state

        addWishlistItems : (state, action)=>{
            state.push(action.payload)
        },
        removeWishlistItem : (state, action)=>{
            return state.filter((item)=>item.id != action.payload)
        }

    }
})

export const {addWishlistItems ,removeWishlistItem} = wishListSlice.actions

export default wishListSlice.reducer