import React from "react";
import styled from "styled-components";
import ImageSection from "./ImageSection";
import SellingInfoSection from "./SellingInfoSection";
import { useSelector } from "react-redux";
import { TRootState } from "../../store";


export default function ProductMainInfo() {
    let productInfo = useSelector((state: TRootState) => state.productInfo.product)

    return !productInfo ? <React.Fragment /> : (

        <ProductMainInfoApp>
            <ProductTitleSection>
                <ProductTitleFlex>
                    <ProductTitleContainer>
                        <ProductTitle>{productInfo.productName}</ProductTitle>
                        <ProductTitleLine />
                    </ProductTitleContainer>
                    <ExtraInfo />
                </ProductTitleFlex>
            </ProductTitleSection>

            <ProductBakeryContainer>
                <ImageSection />
                <SellingInfoSection />
            </ProductBakeryContainer>

        </ProductMainInfoApp>
    );
}



const ProductMainInfoApp = styled.div`
    padding: 0px 40px;
    @media (max-width: 640px){
        padding: 0px;
    }
`

const ProductTitleSection = styled.div`
    display: flex;
    margin-left: 90px;
    margin-bottom: 20px;
    @media (max-width: 640px){
        margin-left: 0px;
        margin-bottom: 20px;
    }
`

const ProductTitleFlex = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    max-width: 1080px;
`

const ProductTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-grow: 1;
    max-width: 525px;
    min-width: 525px;
    @media (max-width: 640px){
        max-width: 100%;
        min-width: 0px;
    }
    
`
const ExtraInfo = styled.div`
    flex: 1;
    max-width: 465px;
`

const ProductTitle = styled.div`
    font-family: 'Caramel';
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 46px;
    /* identical to box height */

    text-transform: uppercase;

    color: #000000;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0px 10px;
    
    @media (max-width: 640px){
        font-size: 32px;
    }

    @media(max-width: 400px){
		font-size: 28px;
        line-height: 30px;
	}

    @media(max-width: 250px){
		font-size: 22px;
        line-height: 30px;
	}
    
`

const ProductTitleLine = styled.div`
    width: 100%;
    border: 2px solid #2F1107;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media(max-width: 250px){
		border: 1px solid #2F1107;
	}
`



const ProductBakeryContainer = styled.div`
    display: flex;
    gap: 15px;

    @media (max-width: 1280px){
        flex-direction: column;
        align-items: center;
    }
`