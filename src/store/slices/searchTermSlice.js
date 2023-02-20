import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name:'searchTerm',
    initialState:'',
    reducers:{
        updateSearchTerm(state, action){
            return action.payload;
        },
        clearSearchTerm(state, action){
            return '';
        }
    }
});

export const searchTermReducer = searchTermSlice.reducer;
export const {updateSearchTerm, clearSearchTerm} = searchTermSlice.actions;