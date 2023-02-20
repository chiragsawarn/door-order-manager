import { createSlice } from '@reduxjs/toolkit';
import { resetForms } from '../actions/resetForms.js';

const init = {
    spring:"",
    trackSize:"",
    trackMount:"",
    trackLift:"",
    trackRadius:"",
    completionPercentage:0
}

const updateCompletionPercentage = (state, existingValueOfProperty, updationValueOfProperty)=>{
    const contribution = 100/5;
    if(!existingValueOfProperty && updationValueOfProperty) state.completionPercentage += contribution;
    if(existingValueOfProperty && !updationValueOfProperty) state.completionPercentage -= contribution;
}

const trackOptionsFormSlice = createSlice({
    name:'trackOptions',
    initialState:init,
    reducers:{
        updateSpring(state, action){
            updateCompletionPercentage(state, state.spring, action.payload);
            state.spring = action.payload;
        },
        updateTrackSize(state, action){
            updateCompletionPercentage(state, state.trackSize, action.payload);
            state.trackSize = action.payload;
        },
        updateTrackMount(state, action){
            updateCompletionPercentage(state, state.trackMount, action.payload);
            state.trackMount = action.payload;
        },
        updateTrackLift(state, action){
            updateCompletionPercentage(state, state.trackLift, action.payload);
            state.trackLift = action.payload;
        },
        updateTrackRadius(state, action){
            updateCompletionPercentage(state, state.trackRadius, action.payload);
            state.trackRadius = action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(resetForms, (state, action)=>{
            return init;
        })
    }
});

export const trackOptionsFormReducer = trackOptionsFormSlice.reducer;
export const {updateSpring, updateTrackSize, updateTrackMount, updateTrackLift, updateTrackRadius} = trackOptionsFormSlice.actions;