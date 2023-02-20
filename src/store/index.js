import { configureStore } from "@reduxjs/toolkit";
import { formReducer, updateCategory, updateSeries, updateDoorType } from "./slices/formSlice";
import { cartsReducer, addCart, clearCart, deleteLastCart, updateLastCart} from "./slices/cartsSlice";
import { layoutOptionsFormReducer, updateAssemblyType, updateWidthByFeet, updateWidthByInches, updateHeightByFeet, updateHeightByInches, updateWindCode, updateDesign, updateColor } from "./slices/layoutOptionsFormSlice";
import { windowOptionsFormReducer, updateGlassType, updateSectionGlazed, updateFraming } from './slices/windowOptionsFormSlice';
import { trackOptionsFormReducer, updateSpring, updateTrackSize, updateTrackMount, updateTrackLift, updateTrackRadius } from "./slices/trackOptionsFormSlice";
import { otherOptionsFormReducer, updateLock, updateMiscLockOptions, updatePackaging, addAdditionalOptions, removeAdditionalOptions } from "./slices/otherOptionsFormSlice";
import { resetForms } from "./actions/resetForms";
import { searchTermReducer, updateSearchTerm, clearSearchTerm } from "./slices/searchTermSlice";
import { isFormEditableReducer, setIsFormEditable } from "./slices/isFormEditableSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        carts: cartsReducer,
        searchTerm:searchTermReducer,
        layoutOptions: layoutOptionsFormReducer,
        windowOptions: windowOptionsFormReducer,
        trackOptions: trackOptionsFormReducer,
        otherOptions: otherOptionsFormReducer,
        isFormEditable: isFormEditableReducer
    }
});

export { store, addCart, clearCart, deleteLastCart, updateLastCart, setIsFormEditable, resetForms};
export {updateSearchTerm, clearSearchTerm};
export { updateCategory, updateSeries, updateDoorType };
export { updateAssemblyType, updateWidthByFeet, updateWidthByInches, updateHeightByFeet, updateHeightByInches, updateWindCode, updateDesign, updateColor };
export { updateGlassType, updateSectionGlazed, updateFraming };
export { updateSpring, updateTrackSize, updateTrackMount, updateTrackLift, updateTrackRadius };
export { updateLock, updateMiscLockOptions, updatePackaging, addAdditionalOptions, removeAdditionalOptions };