import { createSlice } from "@reduxjs/toolkit";
import { updateLastCart } from "./cartsSlice";

const isFormEditableSlice = createSlice({
    name:'isFormEditable',
    initialState:false,
    reducers:{
        setIsFormEditable(state, action){
            return action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(updateLastCart, (state, action)=>{
            return false;
        })
    }
})

export const isFormEditableReducer = isFormEditableSlice.reducer;
export const {setIsFormEditable} = isFormEditableSlice.actions;