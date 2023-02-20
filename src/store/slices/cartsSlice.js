import { createSlice, nanoid } from "@reduxjs/toolkit";

const init = [
    {"layoutOptions":{"assemblyType":"Commercial Door","measureSize":{"width":{"feet":"8","inches":"0"},"height":{"feet":"8","inches":"0"}},"windCode":"W5","design":"CC","color":"Dark Finish","completionPercentage":100.00000000000001},"windowOptions":{"glassType":"Solid","sectionsGlazed":"None","framing":"Arch 1 Design","completionPercentage":100},"trackOptions":{"spring":"Galvanized Torsion","trackSize":"4” Flag & Jamb Brackets Loose","trackMount":"Bracket","trackLift":"Standary","trackRadius":"6\" Radius","completionPercentage":100},"otherOptions":{"lock":"Inside Slide Lock (#1)","miscLockOptions":true,"packaging":"Distributor","additionalOptions":[],"completionPercentage":100},"expiry":3,"creator":"Aaron Pacocha","name":"Aaron_5210","id":"zAivAhXQUu7Tgf-yawQLn"},
    {"layoutOptions":{"assemblyType":"Commercial Door","measureSize":{"width":{"feet":"10","inches":"0"},"height":{"feet":"8","inches":"0"}},"windCode":"W3","design":"BB","color":"Matt Black","completionPercentage":100.00000000000001},"windowOptions":{"glassType":"Solid","sectionsGlazed":"None","framing":"Arch 1 Design","completionPercentage":100},"trackOptions":{"spring":"Galvanized Torsion","trackSize":"4” Flag & Jamb Brackets Loose","trackMount":"Bracket","trackLift":"Standary","trackRadius":"6\" Radius","completionPercentage":100},"otherOptions":{"lock":"Inside Slide Lock (#1)","miscLockOptions":true,"packaging":"Distributor","additionalOptions":[],"completionPercentage":100},"expiry":90,"creator":"Norbert Abernathy","name":"Norbert_7905"},
    {"layoutOptions":{"assemblyType":"Residential Door","measureSize":{"width":{"feet":"10","inches":"0"},"height":{"feet":"10","inches":"0"}},"windCode":"W2","design":"CC","color":"Brass Finish","completionPercentage":100.00000000000001},"windowOptions":{"glassType":"Partially Glazed","sectionsGlazed":"2","framing":"Arch 1 Design","completionPercentage":100},"trackOptions":{"spring":"Oxidized Aluminium","trackSize":"2” Flag & Jamb Brackets Loose","trackMount":"Bracket","trackLift":"Standary","trackRadius":"12\" Radius","completionPercentage":100},"otherOptions":{"lock":"Inside Slide Lock (#2)","miscLockOptions":false,"packaging":"Distributor","additionalOptions":[],"completionPercentage":50},"expiry":88,"creator":"Kayleigh Hamill","name":"Kayleigh_5786","id":"Jnr2RlJSYthSnsOyA-rkW"}
]

const cartsSlice = createSlice({
    name:'cart',
    initialState:init,
    reducers:{
        addCart(state, action){
            state.push({...action.payload, id:nanoid()});
        },
        clearCart(state, action){
            return [];
        },
        deleteLastCart(state, action){
            const idToBeDeleted = state.length-1;
            state.splice(idToBeDeleted,1);
        },
        updateLastCart(state, action){
            state[state.length-1] = action.payload;
        }
    }
});

export const cartsReducer = cartsSlice.reducer;
export const {addCart, clearCart, deleteLastCart, updateLastCart} = cartsSlice.actions;