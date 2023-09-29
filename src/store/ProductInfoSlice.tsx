import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProductInfo } from "../data/products/ProductsInfo";

interface TInitialState {
	product: TProductInfo | null;
}
const initialProductState: TInitialState = { product: null };

const productInfoSlice = createSlice({
	name: "productInfo",
	initialState: initialProductState,
	reducers: {
		updateInfo(state, action: PayloadAction<TProductInfo | null>) {
			state.product = action.payload;
		},
		clearInfo(state) {
			state.product = initialProductState.product;
		},
	},
});

export const { updateInfo, clearInfo } = productInfoSlice.actions;
export default productInfoSlice.reducer;
