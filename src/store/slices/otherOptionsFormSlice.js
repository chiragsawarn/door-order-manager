import { createSlice } from "@reduxjs/toolkit";
import { resetForms } from "../actions/resetForms";

const init = {
    lock:"",
    miscLockOptions:false,
    packaging:"",
    additionalOptions:[],
    completionPercentage:0
}

const updateCompletionPercentage = (state, existingValueOfProperty, updationValueOfProperty)=>{
    const contribution = 100/2;
    if(!existingValueOfProperty && updationValueOfProperty) state.completionPercentage += contribution;
    if(existingValueOfProperty && !updationValueOfProperty) state.completionPercentage -= contribution;
}

const otherOptionsFormSlice = createSlice({
    name:'otherOptions',
    initialState:init,
    reducers:{
        updateLock(state, action){
            state.lock = action.payload;
        },
        updateMiscLockOptions(state, action){
            updateCompletionPercentage(state, state.miscLockOptions, action.payload);
            state.miscLockOptions = action.payload;
        },
        updatePackaging(state, action){
            updateCompletionPercentage(state, state.packaging, action.payload);
            state.packaging = action.payload;
        },
        addAdditionalOptions(state, action){
            state.additionalOptions.push(action.payload);
        },
        removeAdditionalOptions(state, action){
            const idxToRemove = state.additionalOptions.map(e => e.name).indexOf(action.payload);
            state.splice(idxToRemove, 1);
        }
    },
    extraReducers(builder){
        builder.addCase(resetForms, (state, action)=>{
            return init;
        })
    }
});

export const otherOptionsFormReducer = otherOptionsFormSlice.reducer;
export const {updateLock, updateMiscLockOptions, updatePackaging, addAdditionalOptions, removeAdditionalOptions} = otherOptionsFormSlice.actions;