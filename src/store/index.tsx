import {configureStore} from '@reduxjs/toolkit'
import ProductInfoSlice from './ProductInfoSlice'
import ProductCustomizationSlice from './ProductCustomizationSlice';

let store = configureStore({
    reducer: {
      productInfo: ProductInfoSlice,
      productCustomization: ProductCustomizationSlice
    }
})

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export default store;
