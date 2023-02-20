import { createSlice } from "@reduxjs/toolkit";

const cartsSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addCart(state, action){
            state.push(action.payload);
        }
    }
});

export const cartsReducer = cartsSlice.reducer;
export const {addCart} = cartsSlice.actions;