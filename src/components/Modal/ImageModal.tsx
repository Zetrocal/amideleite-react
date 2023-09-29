import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Close from "../Button/Close";
import Spinner from "../Loading/Spinner";

interface TImageModal {
	imgSrc: string;
	closeHandler: Function;
}
const ImageModal: React.FC<TImageModal> = ({ imgSrc, closeHandler }) => {
	const [isLoaded, setIsLoaded] = useState(false);

	if (!imgSrc) return null;
	return (
		<React.Fragment>
			{createPortal(
				<ImageModalApp
					onClick={() => {closeHandler();}}
					id="backdrop"
				>
					<Imagecontainer>
						<CloseButton>
							<Close />
						</CloseButton>
						{!isLoaded && <Spinner />}
						<Image src={imgSrc} alt="image" onLoad={() => setIsLoaded(true)} $displayed={isLoaded}/>
					</Imagecontainer>
				</ImageModalApp>,
				document.getElementById("modal-root")!
			)}
		</React.Fragment>
	);
};

export default ImageModal;

const ImageModalApp = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(1, 1, 1, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 1000;
`;

const Imagecontainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #8b8b8b52;
	min-width: 300px;
	min-height: 300px;
	border-radius: 10px;
`;

const Image = styled.img<{ $displayed: boolean }>`
	width: 100%;
	height: 100%;
	object-fit: contain;
	max-height: 90vh;
	opacity: ${({ $displayed }) => ($displayed ? "1" : "0")};
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const CloseButton = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
	border-radius: 50%;
	background-color: #ffffffb5;
	z-index: 1000;
	transition: all 0.15s linear;
	&:hover{
		background-color: #ffffff;
	}
`;
