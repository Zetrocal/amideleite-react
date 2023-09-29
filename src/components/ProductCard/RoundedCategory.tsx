import { useState } from "react";
import styled from "styled-components";

interface TProps {
    image: string,
    text: string,
}
export default function RoundedCategory({ image, text }: TProps) {
    let [displayText, setDisplayText] = useState(true)
    return (
        <RoundedCategoryApp onMouseEnter={() => { setDisplayText(false) }} onMouseLeave={() => { setDisplayText(true) }}>
            <RoundedInnerContainer >
                <RoundedImage src={image} alt="CategoryImage" />
                <RoundedText $displayText={displayText}>{text}</RoundedText>
            </RoundedInnerContainer>
        </RoundedCategoryApp>
    );
}


const RoundedCategoryApp = styled.div`
    background: #C9A66B;
    border-radius: 50%;
    border: 2px solid #2F1107;
    position: relative;
    width: 310px;
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media(max-width: 330px){
      width: 90vw;
      height: 90vw;
    }
`

const RoundedInnerContainer = styled.div`
    border: 2px solid #2F1107;
    width: 97%;
    height: 97%;
    border-radius: 50%;
    position: relative;
    margin: auto;
    cursor: pointer;
`

const RoundedImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
`

const RoundedText = styled.div<{ $displayText: boolean }>`
    position: absolute;
    display: flex;
    opacity: ${({ $displayText }) => $displayText ? 1 : 0};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 50%;
    background-color: #FFFFFFA3;
    font-family: 'Caramel';
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 54px;

    text-align: center;
    text-transform: uppercase;

    color: #2F1107;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transition: opacity 0.2s ease-in-out;

    @media(max-width: 330px){
        font-size: 36px;
    }

    @media(max-width: 230px){
        font-size: 30px;
        line-height: 30px;
    }

    @media(max-width: 200px){
        font-size: 22px;
    }
`