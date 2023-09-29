import { useState, useEffect } from "react";
import styled from "styled-components";

const circleSize = 390;

interface TProps {
	items: Array<any>;
}
export default function Circular({ items }: TProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loopEnabled, setloopEnabled] = useState(true);

	// Function to handle rotation of carousel
	const rotateCarousel = () => {
		if (loopEnabled) {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
		}
	};

	useEffect(() => {
		if (loopEnabled) {
			let interval = setInterval(rotateCarousel, 3000);
			return () => {
				clearInterval(interval);
			};
		}
	}, [loopEnabled]);

	let imageOptionClicked = (imageIndex: number) => {
		setCurrentIndex(imageIndex);
		setloopEnabled(false);
	};

	let mainImageHover = () => {
		setloopEnabled(false);
	};
	let leaveHover = () => {
		setloopEnabled(true);
	};

	return (
		<CircularCarrouselApp>
			<CircularCarrouselMain>
				{/* <Carousel
					style={{
						transform: `translateY(-${currentIndex * circleSize}px)`, // Adjust the translateY property to control the vertical translation
						transition: "transform 0.9s cubic-bezier(.35,.95,.45,.98)", // Add a transition effect for smooth animation
					}}
				> */}
                <Carousel $currentIndex={currentIndex} $circleSize={circleSize}>
					{items.map((image, index) => (
						<CarouselImage
							key={"MainImage-" + index}
							src={image}
							alt={`Carousel Image ${index + 1}`}
							onMouseEnter={mainImageHover}
							onMouseLeave={leaveHover}
						/>
					))}
				</Carousel>
			</CircularCarrouselMain>

			<CarrouselOptions>
				{items.map((image, index) => (
					<CarouselImageContainer key={"OptionImage-" + index}>
						<CarouselImageOption
							src={image}
							alt={`Carousel Image Option ${index + 1}`}
							onClick={() => {
								imageOptionClicked(index);
							}}
							onMouseLeave={leaveHover}
							$currentOption={index === currentIndex ? "1" : "0"}
						/>
					</CarouselImageContainer>
				))}
			</CarrouselOptions>
		</CircularCarrouselApp>
	);
}

const CircularCarrouselApp = styled.div`
	display: flex;
	gap: 20px;
	@media (max-width: 680px) {
		flex-direction: column;
		align-items: center;
	}
`;

const CircularCarrouselMain = styled.div`
	overflow: hidden;
	height: ${circleSize}px; /* Set the height of the carousel container */
	width: ${circleSize}px;
	border-radius: 50%;
	border: 2px solid rgb(201 166 107 / 75%);

	@media (max-width: 680px) {
		width: 300px;
		height: 300px;
	}

	@media (max-width: 350px) {
		width: 90vw;
		height: 90vw;
	}
`;

/* const Carousel = styled.div`
	display: flex;
	flex-direction: column;
`; */

const Carousel = styled.div<{ $currentIndex: number, $circleSize: number }>`
	display: flex;
	flex-direction: column;
    transform: ${({$currentIndex, $circleSize})=> `translateY(-${$currentIndex * $circleSize}px)`}; // Adjust the translateY property to control the vertical translation
	transition: transform 0.9s cubic-bezier(.35,.95,.45,.98); // Add a transition effect for smooth animation

    @media (max-width: 350px) {
        transform: ${({$currentIndex})=> `translateY(-${$currentIndex * 90}vw)`}
    }
`;

const CarouselImage = styled.img`
	width: ${circleSize}px; /* Set the width of the carousel images */
	height: ${circleSize}px; /* Set the height of the carousel images */
	object-fit: cover;
	object-position: center;

	@media (max-width: 350px) {
		width: 90vw;
		height: 90vw;
	}
`;

const CarrouselOptions = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	//width: 50px;
	width: auto;
	@media (max-width: 680px) {
		flex-direction: row;
	}

	@media (max-width: 350px) {
		display: none;
	}
`;
const CarouselImageContainer = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CarouselImageOption = styled.img<{ $currentOption: string }>`
	width: 45px;
	height: 45px;
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
	cursor: pointer;
	transition: all ease-in-out 0.15s;
	box-shadow: ${({ $currentOption }) =>
		$currentOption == "1"
			? " rgb(255, 255, 255) 0px 10px 30px -10px, rgb(255, 255, 255) 0px -10px 30px -10px, rgb(255, 255, 255) 10px 0px 30px -10px, rgb(255, 255, 255) -10px 0px 30px -10px;"
			: "unset"};
	&:hover {
		width: 50px;
		height: 50px;
		box-shadow: rgb(255, 255, 255) 0px 10px 30px -10px, rgb(255, 255, 255) 0px -10px 30px -10px, rgb(255, 255, 255) 10px 0px 30px -10px,
			rgb(255, 255, 255) -10px 0px 30px -10px;
	}
`;
