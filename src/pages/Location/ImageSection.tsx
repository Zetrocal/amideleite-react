import { useEffect, useState } from "react";
import styled from "styled-components";
import ScaleFadeInView from "../../components/UI/ScaleFadeInView";

interface TProps {
	optionsPosition: "left" | "right" | "top" | "bottom";
	images: Array<string>;
}
export default function ImageSection({ optionsPosition, images }: TProps) {
	let [staticImage, setStaticImage] = useState(images[0]);
	let [vanishImage, setVanishImage] = useState(images[0]);
	let [opacity, setOpacity] = useState(0);
	let [selectedIndex, setSelectedIndex] = useState(0);
	let timeout: number;

	useEffect(() => {
		timeout -
			setTimeout(() => {
				setStaticImage(images[selectedIndex]);
				setOpacity(0);
			}, 200);

		return () => {
			clearTimeout(timeout);
		};
	}, [selectedIndex]);

	let optionDirection = optionsPosition == "left" || optionsPosition == "right" ? "column" : "row";
	let imageSectionDirection =
		optionsPosition == "left" ? "row-reverse" : optionsPosition == "right" ? "row" : optionsPosition == "top" ? "column-reverse" : "column";

	let clickedOptionImage = (index: number) => {
		clearTimeout(timeout);
		if (index != selectedIndex) {
			setSelectedIndex(index);
			setVanishImage(images[index]);
			if (opacity == 0) setOpacity(1);
		}
	};

	let optionImages = images.map((image: string, index: number) => (
		<ImageOption
			key={image + "-" + index}
			src={image}
			alt="optionImage"
			onClick={() => {
				clickedOptionImage(index);
			}}
		/>
	));

	return (
		<ScaleFadeInView delay={0} type="spring" duration={1.5}>
			<ImageSectionApp direction={imageSectionDirection}>
				<MainImageContainer>
					<StaticImage src={staticImage} alt="mainImage" />
					{images.length > 1 ? <VanishImage src={vanishImage} alt="mainImage" opacity={opacity} /> : null}
				</MainImageContainer>
				<OptionImages direction={optionDirection}>{optionImages}</OptionImages>
			</ImageSectionApp>
		</ScaleFadeInView>
	);
}

const ImageSectionApp = styled.div<{ direction: string }>`
	display: flex;
	justify-content: center;
	flex-direction: ${({ direction }) => direction};
	gap: 15px;
	@media (max-width: 680px) {
		flex-wrap: wrap;
		justify-content: flex-end;
	}
`;

const MainImageContainer = styled.div`
	position: relative;
	width: 500px;
	height: 500px;
	min-width: 500px;
	@media (max-width: 680px) {
		width: 90vw;
		height: auto;
		min-width: unset;
	}
`;

const StaticImage = styled.img`
	position: relative;
	z-index: 1;
	width: 100%;
	height: 100%;
	display: block;
	object-fit: cover;
`;

const VanishImage = styled.img<{ opacity: number }>`
	position: absolute;
	z-index: 10;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: ${({ opacity }) => opacity};
	display: block;
	transition: opacity 0.2s linear;
	object-fit: cover;
`;

const OptionImages = styled.div<{ direction: string }>`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	gap: 10px;

	@media (max-width: 200px) {
		display: none;
	}
`;

const ImageOption = styled.img`
	width: 80px;
	height: 80px;
	object-fit: cover;
	cursor: pointer;
	min-width: 80px;

	@media (max-width: 680px) {
		min-width: 60px;
		width: 60px;
		height: 60px;
	}

	@media (max-width: 400px) {
		min-width: 40px;
		width: 40px;
		height: 40px;
	}
`;
