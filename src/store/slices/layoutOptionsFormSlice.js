import { createSlice } from "@reduxjs/toolkit";
import { addCart } from "../index";
import { resetForms } from "../actions/resetForms";

const init = {
    assemblyType:"",
    measureSize:{
        width:{
            feet:"",
            inches:"0"
        },
        height:{
            feet:"",
            inches:"0"
        }
    },
    windCode:"",
    design:"",
    color:"",
    completionPercentage:0
}

const updateCompletionPercentage = (state, existingValueOfProperty, updationValueOfProperty)=>{
    const contribution = 100/6;
    if(!existingValueOfProperty && updationValueOfProperty) state.completionPercentage += contribution;
    if(existingValueOfProperty && !updationValueOfProperty) state.completionPercentage -= contribution;
}

const layoutOptionsFormSlice = createSlice({
    name:'layoutOptions',
    initialState:init,
    reducers:{
        updateAssemblyType(state, action){
            updateCompletionPercentage(state, state.assemblyType, action.payload);
            state.assemblyType = action.payload;
        },
        updateWidthByFeet(state, action){
            updateCompletionPercentage(state, state.measureSize.width.feet, action.payload);
            state.measureSize.width.feet = action.payload;
        },
        updateWidthByInches(state, action){
            state.measureSize.width.inches = action.payload;
        },
        updateHeightByFeet(state, action){
            updateCompletionPercentage(state, state.measureSize.height.feet, action.payload);
            state.measureSize.height.feet =  action.payload;
        },
        updateHeightByInches(state, action){
            state.measureSize.height.inches =  action.payload;
        },
        updateWindCode(state, action){
            updateCompletionPercentage(state, state.windCode, action.payload);
            state.windCode = action.payload;
        },
        updateDesign(state, action){
            updateCompletionPercentage(state, state.design, action.payload);
            state.design = action.payload;
        },
        updateColor(state, action){
            updateCompletionPercentage(state, state.color, action.payload);
            state.color = action.payload;
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

export const layoutOptionsFormReducer = layoutOptionsFormSlice.reducer;
export const {updateAssemblyType, updateWidthByFeet, updateWidthByInches, updateHeightByFeet, updateHeightByInches, updateWindCode, updateDesign, updateColor} = layoutOptionsFormSlice.actions;