import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TableStructure from "./TableStructure";
import ReviewStructure from "./ReviewsStructure";
import { TRootState } from "../../store";

export default function ProductExtraInfo() {
    let productInfo = useSelector((state: TRootState) => state.productInfo.product);
    let [tabSelected, setTabSelected] = useState(0);
    let [contentSelected, setContentSelected] = useState(<React.Fragment />)

    useEffect(() => {
        if (productInfo) {
            let newcontentSelected = <React.Fragment />
            switch (tabSelected) {
                case 0:
                    newcontentSelected = <InformationSection>{productInfo.information}</InformationSection>;
                    setContentSelected(newcontentSelected)
                    break;
                case 1:
                    if (productInfo.datasheet) {
                        newcontentSelected = <TableStructure tableInfo={productInfo.datasheet} />
                        setContentSelected(newcontentSelected)
                    }
                    break;
                case 2:
                    if (productInfo.aggregateRating) {
                        newcontentSelected = <ReviewStructure reviewsInfo={undefined/* productInfo.aggregateRating */} />
                        setContentSelected(newcontentSelected)
                    }
                    break;
            }
        }
    }, [productInfo, tabSelected])

    return !productInfo ? <React.Fragment /> : (

        <ProductExtraInfoApp>
            <ProductBakeryExtraInfoContainer>
                <TabsSection>
                    <TabContainer selected={tabSelected == 0} onClick={() => setTabSelected(0)}>Información</TabContainer>
                    <TabContainer selected={tabSelected == 1} onClick={() => setTabSelected(1)}>Ficha Tecnica</TabContainer>
                    <TabContainer selected={tabSelected == 2} onClick={() => setTabSelected(2)}>Reviews</TabContainer>
                </TabsSection>
                <ContentFromTab>
                    {contentSelected}
                </ContentFromTab>
            </ProductBakeryExtraInfoContainer>

        </ProductExtraInfoApp>
    );
}


const ProductExtraInfoApp = styled.div`
    margin-top: 80px;
    padding: 0px 30px 0px 50px;
    max-width: 1550px;
    display: flex;
    justify-content: center;
    @media (max-width: 640px){
        padding: 0px;
    }
`

const ProductBakeryExtraInfoContainer = styled.div`
    max-width: 1250px;
    width: 100%;
`

const InformationSection = styled.div`
    padding-top: 10px;
    
`

const TabsSection = styled.div`
    display: flex;
    @media(max-width: 400px){
        flex-direction: column;
        >div:first-child{
            border-radius: 10px 10px 0px 0px;
        }
    }
`

const TabContainer = styled.div<{ selected: boolean }>`
    background: ${({ selected }) => selected ? "#EBDCB2" : "#C9A66B"};
    border: 1px solid #000000;
    border-bottom: none;
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;
    width: 180px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-collapse: collapse;
    @media(max-width: 400px){
        width: 100%;
        border-radius: 0px;
        font-size: 14px;
    }
    
`

const ContentFromTab = styled.div`
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid #2F1107;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 10px 10px 10px;
    width: 100%;
    min-height: 420px;
    padding: 20px 40px;
    white-space: pre-line;
    @media (max-width: 720px){
        border-radius: 0px 0px 10px 10px;
        font-size: 14px;
    }

    @media(max-width: 400px){
        padding: 20px 5px;
        font-size: 12px;
    }
`