import { createSlice } from "@reduxjs/toolkit";
import {addCart} from '../index';
import { resetForms } from "../actions/resetForms";

const init = {
    glassType:"",
    sectionsGlazed:"",
    framing:"",
    completionPercentage:0
}

const updateCompletionPercentage = (state, existingValueOfProperty, updationValueOfProperty)=>{
    const contribution = 100/3;
    if(!existingValueOfProperty && updationValueOfProperty) state.completionPercentage += contribution;
    if(existingValueOfProperty && !updationValueOfProperty) state.completionPercentage -= contribution;
}

const windowOptionsFormSlice = createSlice({
    name:'windowOptions',
    initialState:init,
    reducers:{
        updateGlassType(state, action){
            updateCompletionPercentage(state, state.glassType, action.payload);
            state.glassType = action.payload; 
        },
        updateSectionGlazed(state, action){
            updateCompletionPercentage(state, state.sectionsGlazed, action.payload);
            state.sectionsGlazed = action.payload;
        },
        updateFraming(state, action){
            updateCompletionPercentage(state, state.framing, action.payload);
            state.framing = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(addCart, (state, action)=>{
            return init;
        })
        builder.addCase(resetForms, (state, action)=>{
            return init;
        })
    }
});

export const windowOptionsFormReducer = windowOptionsFormSlice.reducer;
export const {updateGlassType, updateSectionGlazed, updateFraming} = windowOptionsFormSlice.actions;