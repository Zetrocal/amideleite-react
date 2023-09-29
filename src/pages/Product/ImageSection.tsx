import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TRootState } from "../../store";
import { selectDescription } from "../../data/products/ProductsInfo";
import { changeSize } from "../../data/products/ProductsImages";

export default function ImageSection() {
    let productInfo = useSelector((state: TRootState) => state.productInfo.product);
    if (!productInfo) return <React.Fragment />;

    let productCustomization = useSelector((state:TRootState) => state.productCustomization);;

    let [selectedImageIndex, setSelectedImageIndex] = useState(0);
    let [mainImageDisplayed, setMainImageDisplayed] = useState(productInfo.image)

    useEffect(() => {
        if (productInfo) {
            let mainImageSelected = productInfo.images[selectedImageIndex]
            let productImageDisplayed = changeSize(mainImageSelected, "big")
            setMainImageDisplayed(productImageDisplayed)
        }
    }, [selectedImageIndex, productInfo])


    return (
        <ImageSectionApp>
            <ImageSectionContainer>
                <ProductExtraImages>
                    {productInfo.images.map((image: string, index: number) => (
                        <OptionImage
                            src={image}
                            alt="optionImage"
                            key={"optionImage-" + index}
                            selected={index === selectedImageIndex}
                            onClick={() => { setSelectedImageIndex(index) }} />
                    ))}
                </ProductExtraImages>
                <ProductMainImageCard>
                    <ProductImage src={mainImageDisplayed} alt="mainImage" />
                    <ExtraDescription>{ selectDescription(productCustomization.availability).length? "*"+selectDescription(productCustomization.availability):"" }</ExtraDescription>
                </ProductMainImageCard>
            </ImageSectionContainer>

        </ImageSectionApp>
    );
}


const ImageSectionApp = styled.div`
    flex-grow: 1;
    max-width: 800px;
    justify-content: center;
    display: flex;
`

const ImageSectionContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;

    @media (max-width: 1280px){
        flex-direction: column-reverse;
    }
`

const ProductExtraImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 68px;
    align-items: center;
    @media (max-width: 1280px){
        flex-direction: row;
    }

    @media(max-width: 600px){
        flex-wrap: wrap;
        width: 100%;
    }
`
const OptionImage = styled.img<{ selected: boolean }>`
    width: ${({ selected }) => selected ? "68px" : "64px"};
    height:${({ selected }) => selected ? "68px" : "64px"};
    border-radius: 10px;
    object-fit: cover;
    border: ${({ selected }) => selected ? "1px solid #2F1107" : "none"};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    transition: all 0.1s linear;
    display: block;

    @media(max-width: 400px){
        width: 40px;
        height: 40px;
    }
`

const ProductMainImageCard = styled.div`
    width: 525px;

    @media(max-width: 720px){
        width: 100%;
    }
`

const ProductImage = styled.img`
    width: 100%;
    height: 525px;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    @media(max-width: 720px){
        height: auto;
    }
`

const ExtraDescription = styled.div`
    width: 100%;
    font-family: 'Cabin';
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    /* or 24px */

    letter-spacing: 0.2em;

    color: #54342A;

    @media(max-width: 350px){
		font-size: 12px;
	}
`