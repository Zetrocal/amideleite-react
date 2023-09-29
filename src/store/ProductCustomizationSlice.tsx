import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TVariantUpdate{
    variantType: string,
    variantOption: string
}
interface TVariantSelected{
    [key: string]: Array<string>
}
interface TProductCustomizationParams{
    productId: string|undefined,
    variant: TVariantSelected|undefined,
    price: number,
    availability: string,
    quantity: number,
    cakeMessage: string|undefined,
    additionalInfo: Array<object>
}
const initialState:TProductCustomizationParams = {
    productId: undefined,
    variant: undefined,
    price: 0,
    quantity: 1,
    availability: "OutOfStock",
    cakeMessage: "",
    additionalInfo: []
}

const productCustomizationSlice = createSlice({
    name: "productCustomization",
    initialState: initialState,
    reducers:{
        updateProductId(state, action:PayloadAction<string>){
            state.productId = action.payload.trim();
        },
        assignVariant(state, action:PayloadAction<TVariantUpdate>){
            let variantType = action.payload.variantType;
            let variantOption = action.payload.variantOption;
            
            if(state.variant === undefined) state.variant = {};
            //let newVariantOptions = state.variant[variantType]? [...state.variant[variantType]] : []; // for multiple options logic, needs a flag to handle this logic
            let newVariantOptions:any =  [];
            
            if(!newVariantOptions.includes(variantOption)) newVariantOptions.push(variantOption);
            state.variant[variantType] = newVariantOptions.sort();
        },
        removeVariant(state, action:PayloadAction<TVariantUpdate>){
            let variantType = action.payload.variantType;
            let variantOption = action.payload.variantOption;
            if(state.variant && state.variant.hasOwnProperty(variantType)) {
                if(state.variant[variantType].includes(variantOption)){
                    state.variant[variantType] = state.variant[variantType].filter((element)=>element !== variantOption);
                    if(state.variant[variantType].length == 0) delete state.variant[variantType]
                }
            }
        },
        assignPrice(state, action:PayloadAction<number>){
            state.price = action.payload;
        },
        assignAvailability(state, action:PayloadAction<string>){
            state.availability = action.payload;
        },
        assignQuantity(state, action:PayloadAction<number>){
            let newQuantityValue = action.payload <= 0? 1: action.payload;
            state.quantity = newQuantityValue;
        },
        assignCakeMessage(state, action:PayloadAction<string>){
            state.cakeMessage = action.payload.trim();
        },
        addAdditionalInfo(state, action:PayloadAction<object>){
            state.additionalInfo.push(action.payload);
        },
        resetCustomization(state){
            state.variant = undefined;
            state.price = 0;
            state.availability = "OutOfStock";
        }
    }
})

export const {updateProductId, 
    addAdditionalInfo, 
    assignAvailability, 
    assignCakeMessage, 
    assignPrice, 
    assignQuantity, 
    assignVariant,
    removeVariant, 
    resetCustomization} = productCustomizationSlice.actions;

export default productCustomizationSlice.reducer;