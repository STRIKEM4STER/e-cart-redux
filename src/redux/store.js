import { configureStore } from "@reduxjs/toolkit";
import  wishListSlice  from "./slices/wishlistSlice";
import  cartSlice  from "./slices/cartSlice";


const store = configureStore({
    reducer:{
        Wishlist : wishListSlice,
        cartItem : cartSlice
    }
})

export default store