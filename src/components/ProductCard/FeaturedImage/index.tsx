import React from 'react'
import styled from "styled-components";
import Footer from "./Footer";

interface TProps {
    image: string,
    footerColor: string,
    text: string
}
export default function FeaturedImage({ image, footerColor, text }: TProps) {
    return (
        <React.Fragment>
            <ImageCard src={image} />
            <ImageFooter>
                <Footer color={footerColor}>{text}</Footer>
            </ImageFooter>
        </React.Fragment>
    );
}


const ImageCard = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    border: 2px solid #2F1107;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    object-fit: cover;
`

const ImageFooter = styled.div`
    width: 100%;
`