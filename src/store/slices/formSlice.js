import { createSlice } from "@reduxjs/toolkit";
import { addCart } from "./cartsSlice";
import { resetForms } from "../actions/resetForms";

const init = {
    category:"",
    series:"",
    doorType:""
};

const formSlice = createSlice({
    name:'form',
    initialState:init,
    reducers:{
        updateCategory(state, action){
            state.category = action.payload;
        },
        updateSeries(state, action){
            state.series = action.payload;
        },
        updateDoorType(state, action){
            state.doorType = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(addCart, (state, action)=>{
            return init;
        });
        builder.addCase(resetForms, (state, action)=>{
            return init;
        })
    }
});

export const formReducer = formSlice.reducer;
export const {updateCategory, updateSeries, updateDoorType} = formSlice.actions;