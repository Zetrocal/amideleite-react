import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Close from "../Button/Close";
import Spinner from "../Loading/Spinner";

interface TImageModal {
	title?: string;
	description: string;
	imgSrc: string;
	closeHandler: Function;
}
const InfoImageModal: React.FC<TImageModal> = ({ title, description, imgSrc, closeHandler }) => {
	const [isLoaded, setIsLoaded] = useState(false);

    const closeFunction = (event:React.MouseEvent<HTMLElement>) => {
        const clickedElement = event.target as HTMLElement;
        const clicked = clickedElement.id;
        if(clicked =="backdrop"){ closeHandler()}
    }

	if (!imgSrc) return null;
	return (
		<React.Fragment>
            
            {createPortal(
				<InfoImageModalApp
					onClick={closeFunction}
					id="backdrop"
				>
					<InfoImageModalContainer>
						<CloseButton onClick={() => {closeHandler()}} id="close-modal-button"><Close /></CloseButton>

						{!isLoaded && <Spinner />}
						<Image src={imgSrc} alt="image" onLoad={() => setIsLoaded(true)} $displayed={isLoaded} />

                        <TextSection>
                            {title&& <Title>{title}</Title>}
                            <Description>{description}</Description>
                        </TextSection>
                        

					</InfoImageModalContainer>
				</InfoImageModalApp>,
				document.getElementById("modal-root")!
                
			)}
            
			
		</React.Fragment>
	);
};

export default InfoImageModal;

const InfoImageModalApp = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(1, 1, 1, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 1000;
`;

const InfoImageModalContainer = styled.div`
	position: relative;
	display: flex;
    flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: #f5f3e9;
	min-width: 250px;
	min-height: 250px;
	height: 80vh;
	border-radius: 10px;
    overflow: auto;
    padding: 10px;
    max-width: 700px;
`;

const Image = styled.img<{ $displayed: boolean }>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	max-height: 40vh;
	opacity: ${({ $displayed }) => ($displayed ? "1" : "0")};
	transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-radius: 10px 10px 0px 0px;
`;

const TextSection = styled.div`
    padding: 10px 10px;
`

const Title = styled.h3`
    text-align: center;
    margin: 10px 0px;
    font-family: 'Cinzel Decorative';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 2px;

    text-shadow: 3px 4px 7px rgba(81,67,21,0.8);

    @media(max-width: 480px){
        font-size: 18px;
        letter-spacing: 1px;
    }
`

const Description = styled.p`
    white-space: pre-line;
    font-family: 'Cabin';
    padding: 10px 5px;
    font-size: 16px;

    @media(max-width: 480px){
        font-size: 14px;
    }
`



const CloseButton = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
	border-radius: 50%;
	background-color: #ffffffb5;
	z-index: 1000;
	transition: all 0.15s linear;
	&:hover {
		background-color: #ffffff;
	}
`;
