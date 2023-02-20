import { configureStore } from "@reduxjs/toolkit";
import { formReducer, updateCategory, updateSeries, updateDoorType } from "./slices/formSlice";
import { cartsReducer, addCart } from "./slices/cartsSlice";
import { layoutOptionsFormReducer, updateAssemblyType, updateWidthByFeet, updateWidthByInches, updateHeightByFeet, updateHeightByInches, updateWindCode, updateDesign, updateColor } from "./slices/layoutOptionsFormSlice";
import { windowOptionsFormReducer, updateGlassType, updateSectionGlazed, updateFraming } from './slices/windowOptionsFormSlice';
import { trackOptionsFormReducer, updateSpring, updateTrackSize, updateTrackMount, updateTrackLift, updateTrackRadius } from "./slices/trackOptionsFormSlice";
import { otherOptionsFormReducer, updateLock, updateMiscLockOptions, updatePackaging, addAdditionalOptions, removeAdditionalOptions } from "./slices/otherOptionsFormSlice";
import { resetForms } from "./actions/resetForms";

const store = configureStore({
    reducer: {
        form: formReducer,
        carts: cartsReducer,
        layoutOptions: layoutOptionsFormReducer,
        windowOptions: windowOptionsFormReducer,
        trackOptions: trackOptionsFormReducer,
        otherOptions: otherOptionsFormReducer
    }
});

export { store, addCart, resetForms};
export { updateCategory, updateSeries, updateDoorType };
export { updateAssemblyType, updateWidthByFeet, updateWidthByInches, updateHeightByFeet, updateHeightByInches, updateWindCode, updateDesign, updateColor };
export { updateGlassType, updateSectionGlazed, updateFraming };
export { updateSpring, updateTrackSize, updateTrackMount, updateTrackLift, updateTrackRadius };
export { updateLock, updateMiscLockOptions, updatePackaging, addAdditionalOptions, removeAdditionalOptions };