import React, { useEffect, useState, useRef } from "react";
import {useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { assignAvailability, assignPrice, assignVariant, removeVariant, resetCustomization, assignCakeMessage, updateProductId } from "../../store/ProductCustomizationSlice";
import { TOffer } from "../../data/products/ProductsInfo";
import { TRootState } from "../../store";

//let domain = "http://localhost:5173"
let domain = "http://www.amideleite.com"
export default function SellingInfoSection() {
	let location = useLocation();
	let cakeMessageRef = useRef<HTMLInputElement>(null);
	let dispatch = useDispatch();
	let productInfo = useSelector((state: TRootState) => state.productInfo.product);
	if (!productInfo) return <React.Fragment />;

	let productCustomization = useSelector((state: TRootState) => state.productCustomization);
	let [priceDisplayed, setPriceDisplayed] = useState("");
	let [variantCombinationList, setVariantCombinationList] = useState<Array<string>>([]);
	let [quantityValue, setQuantityValue] = useState("1");
	let [addToCartEnabled, setAddToCartEnabled] = useState(false);
	let minMaxPrice =
		productInfo.minPrice && productInfo.maxPrice && productInfo.minPrice !== productInfo.maxPrice
			? `${productInfo.minPrice} Bs - ${productInfo.maxPrice} Bs`
			: `${productInfo.minPrice || productInfo.maxPrice} Bs`;

	useEffect(() => {
		if (productInfo) {
			if(!productCustomization.productId) dispatch(updateProductId(productInfo.productId))
			
			let currentSelectedVariantTypes = productCustomization.variant != undefined ? Object.keys(productCustomization.variant) : [];
			let variantQuantity = productInfo.variants.length;
			if (currentSelectedVariantTypes.length && variantQuantity == currentSelectedVariantTypes.length) {
                let priceSelectionFilter = productInfo.offers;

				for (let i = 1; i <= variantQuantity; i++) {
					let variantType = i == 1 ? "variantType" : `variantType${i}`;
					let variantName = i == 1 ? "variantName" : `variantName${i}`;

					let selectedCustomVariantTypeKey = currentSelectedVariantTypes.filter(
						(element) => element == productInfo!.offers[0][variantType as keyof TOffer]
					)[0];
					if (selectedCustomVariantTypeKey) {
						priceSelectionFilter = priceSelectionFilter.filter((offer: TOffer) => {
                            let currentOfferType = offer[variantType as keyof TOffer];
                            let currentOfferName = offer[variantName as keyof TOffer];
                            let customSelectedListNames = productCustomization.variant? productCustomization.variant[selectedCustomVariantTypeKey]: [];
                            let matchedCustomizedNames = true;
                            for(let i = 0; i < customSelectedListNames.length; i++){
                                if(currentOfferName && !currentOfferName.toString().match(customSelectedListNames[i])) matchedCustomizedNames = false;
                            }
							return (
								currentOfferType === selectedCustomVariantTypeKey && matchedCustomizedNames
							);
						});
					}
                    
				}

				let price = minMaxPrice;
				if (priceSelectionFilter.length) {
					let offerPrice = priceSelectionFilter[0].price;
					let offerAvailability = priceSelectionFilter[0].availability;
					dispatch(assignPrice(offerPrice));
					dispatch(assignAvailability(offerAvailability));
					price = `${offerPrice} Bs`;

					if (offerAvailability === "OutOfStock") setAddToCartEnabled(false);
					else setAddToCartEnabled(true);
				} else if (addToCartEnabled) setAddToCartEnabled(false);
				if (priceDisplayed != price) setPriceDisplayed(price);

			} else {
				if (productInfo.variants.length) {
					if (variantCombinationList.length) setVariantCombinationList([]);
					dispatch(assignPrice(0));
					dispatch(assignAvailability("OutOfStock"));
					setPriceDisplayed(minMaxPrice);
					if (addToCartEnabled) setAddToCartEnabled(false);
				} else {
					let offerPrice = productInfo.offers[0].price;
					let offerAvailability = productInfo.offers[0].availability;
					if (productCustomization.price != offerPrice) dispatch(assignPrice(offerPrice));
					if (productCustomization.availability != offerAvailability) dispatch(assignAvailability(offerAvailability));

					if (offerAvailability === "OutOfStock") setAddToCartEnabled(false);
					else setAddToCartEnabled(true);
				}
			}
		}
        
	}, [productInfo, productCustomization.variant]);

    useEffect(() => {
        return(() => {
            dispatch(resetCustomization())
        })
    }, [])

	const selectVariant = (variantType: string, variantOption: string) => {
		if (productCustomization.variant && productCustomization.variant[variantType] && productCustomization.variant[variantType].includes(variantOption))
			dispatch(removeVariant({ variantType, variantOption }));
		else dispatch(dispatch(assignVariant({ variantType, variantOption })));
	};
	let customizationOptions = productInfo.variants.map((element, index) => (
		<CustomizationContainer key={element.variantType + "-variantType-" + index}>
			<CustomizationTitle>{element.variantType}</CustomizationTitle>
			<CustomizationOptions>
				{element.variantOptions.map((variant, index) => {
					let isActive = productCustomization.variant && productCustomization.variant[element.variantType]? productCustomization.variant[element.variantType].includes(variant) : false;
					return (
						<CustomizationOption
							key={element.variantType + "-variant-" + index}
							onClick={() => {
								selectVariant(element.variantType, variant);
							}}
							$active={isActive}
						>
							{variant}
						</CustomizationOption>
					);
				})}
			</CustomizationOptions>
		</CustomizationContainer>
	));

	const changeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
		let inputValue = event.target.value;
		if ((+inputValue > 0 && +inputValue < 11) || inputValue.length == 0) {
			setQuantityValue(inputValue);
		}
	};

	const enviarMensaje = () => {
		let cakeMessage = cakeMessageRef.current?  cakeMessageRef.current.value.trim() : "";
		if(cakeMessage.trim().length > 0){ dispatch(assignCakeMessage(cakeMessage))};
		
		let initialMessageCode = 'Buen dia quisiera realizar un pedido con la siguiente especificacion porfavor:';
		let productNameCode = productInfo? `\nProducto: ${productInfo.productName}` : '';
		let quantityCode = `\nCantidad: ${quantityValue}`
		let cakeMessageCode = cakeMessage.length? `\nMensaje escrito en el pastel: ${cakeMessage}` :'';
		let refUrl = `\nURL referencia: ${domain}${location.pathname}`;
		//let refUrl = `\nURL referencia: https://www.google.com`;

		let specsMessageCode = "";
		for(let spec in productCustomization.variant){
			specsMessageCode += `\n${spec}: ${productCustomization.variant[spec].join(" ")}`;
		}

		let completeMessageCode = initialMessageCode + productNameCode + quantityCode + specsMessageCode + cakeMessageCode + refUrl;
		let encodedMessage = encodeURIComponent(completeMessageCode);
		let whatsappMessage = `whatsapp://send?phone=+59176999830&text=${encodedMessage}`;
		window.open(whatsappMessage, '_blank');

	}

	return (
		<SellingInfoSectionApp>
			<SellingInfoSectionContainer>
				<ProductPrice>{priceDisplayed}</ProductPrice>
				<ProductDescription>{productInfo.description}</ProductDescription>

				<CustomizeProduct>{customizationOptions}</CustomizeProduct>

				{productInfo.type === "cake" && addToCartEnabled && (
					<ExtraMessageContainer>
						<MessageTitle>*Mensaje escrito en el pastel (opcional)</MessageTitle>
						<MessageInput type="text" placeholder="Feliz Cumpleaños" maxLength={25} ref={cakeMessageRef}/>
					</ExtraMessageContainer>
				)}

				{addToCartEnabled && (
					<CartOptions>
						<QuantityContainer>
							<QuantityTitle>Cantidad</QuantityTitle>
							<QuantityBox type="number" min={1} max={10} onChange={changeQuantity} value={quantityValue} />
						</QuantityContainer>

						<AddToCartButton disabled={!addToCartEnabled} onClick={enviarMensaje}>Enviar Mensaje</AddToCartButton>
					</CartOptions>
				)}
			</SellingInfoSectionContainer>
		</SellingInfoSectionApp>
	);
}

const SellingInfoSectionApp = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	max-width: 600px;
	padding-top: 20px;

	min-width: 450px;
    @media (max-width: 640px){
        min-width: 0px;
    }
`;

const SellingInfoSectionContainer = styled.div`
	min-width: 320px;
	max-width: 550px;
	display: flex;
	flex-direction: column;
	gap: 10px;

	@media(max-width: 400px){
		min-width: unset;
	}
`;

const ProductPrice = styled.div`
	font-family: "Cabin";
	font-style: normal;
	font-weight: 400;
	font-size: 30px;
	line-height: 36px;
	text-transform: uppercase;

	color: #2f1107;

	@media(max-width: 400px){
		font-size: 24px;
	}
`;

const ProductDescription = styled.div`
	font-family: "Cabin";
	font-style: italic;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	/* or 24px */

	letter-spacing: 0.2em;

	color: #000000;

	@media(max-width: 400px){
		font-size: 14px;
	}
`;

const CustomizeProduct = styled.div`
	padding: 10px 0px;
`;

const CustomizationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
    margin-bottom: 12px;
`;

const CustomizationTitle = styled.div`
	font-family: "Cabin";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	text-transform: uppercase;

	color: #000000;
`;

const CustomizationOptions = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	user-select: none;
`;

const CustomizationOption = styled.div<{ $active: boolean }>`
	cursor: pointer;
	padding: 5px;
	background: #ebdcb2;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 90px;
	min-height: 36px;
	font-family: "Cabin";
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 16px;
	border: ${({ $active }) => ($active ? "2px solid #2F1107" : "none")};
`;

const ExtraMessageContainer = styled.div`
	padding-top: 10px;
`;

const MessageTitle = styled.div`
	font-family: "Cabin";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */

	color: #000000;

	@media(max-width: 320px){
		font-size: 14px;
	}
`;

const MessageInput = styled.input`
	width: 100%;
	max-width: 400px;
	padding: 6px 5px 4px 5px;
	border: 1px solid #2f11072b;
	font-family: Cabin;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: rgb(124, 124, 124);

	@media(max-width: 320px){
		font-size: 14px;
	}
`;

const CartOptions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 500px;
	padding: 10px 0px;
	flex-wrap: wrap;
	@media(max-width: 320px){
		flex-direction: column;
		gap: 10px;
		padding: 0px;
		align-items: flex-start;
	}
`;

const QuantityContainer = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
`;

const QuantityTitle = styled.div`
	font-family: "Cabin";
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */
	color: #000000;

	@media(max-width: 320px){
		font-size: 14px;
	}
`;

const QuantityBox = styled.input`
	width: 45px;
	padding: 5px;
	font-family: Cabin;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: rgb(124, 124, 124);

	@media(max-width: 320px){
		font-size: 14px;
	}
`;

const AddToCartButton = styled.button`
	background: #03989e;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	font-family: "Cabin";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	align-items: center;
	justify-content: center;

	color: #fffbf1;
	padding: 10px;
	width: 100%;
	flex: 1;
	max-width: 150px;
	cursor: pointer;

	&:hover {
		background: #04a5aa;
	}

	&:active {
		background: #017579;
	}

	@media(max-width: 320px){
		font-size: 14px;
	}
`;
