import { ReactElement } from "react";
import styled from "styled-components";
import ScaleFadeInView from "../../components/UI/ScaleFadeInView";

interface TProps {
	title: string;
	description: ReactElement | string;
	image: string;
	textImage: string;
	inverted: number;
}
export default function SpecialsSectionInfo({ title, description, image, textImage, inverted }: TProps) {
	return (
        <ScaleFadeInView delay={0.2} type="spring" duration={1.5}>
		<SpecialsSectionInfoApp inverted={inverted}>
			
				<ImageSection>
					<Image src={image} />
					<BackImage />
				</ImageSection>
			
			<InfoTextSection>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<FloatingImage src={textImage} inverted={inverted} />
			</InfoTextSection>
		</SpecialsSectionInfoApp>
        </ScaleFadeInView>
	);
}

const SpecialsSectionInfoApp = styled.div<{ inverted: number }>`
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${({ inverted }) => (inverted ? "row-reverse" : "row")};
	gap: 70px;
	max-width: 1280px;
	margin: 90px auto;
	justify-content: center;
	@media (max-width: 680px) {
		gap: 40px;
	}
`;

const ImageSection = styled.div`
	position: relative;
	width: 520px;
	height: 520px;

	@media (max-width: 680px) {
		width: 90vw;
		height: 90vw;
	}

	@media (max-width: 350px) {
		width: 85vw;
		height: 85vw;
	}
`;

const BackImage = styled.div`
	background: #54342a;
	width: 100%;
	height: 100%;
	filter: blur(40px);
	position: absolute;
	z-index: 1;
`;

const Image = styled.img`
	position: absolute;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 10;
`;

const InfoTextSection = styled.div`
	max-width: 550px;
	padding: 20px 10px;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0px 10px;

	@media (max-width: 350px) {
		padding: 20px 0px;
	}
`;

const Title = styled.div`
	font-family: "Cinzel Decorative";
	font-style: normal;
	font-weight: 400;
	font-size: 30px;
	line-height: 40px;
	text-transform: uppercase;

	color: #000000;

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	margin-bottom: 30px;
	@media (max-width: 680px) {
		font-size: 24px;
	}

	@media (max-width: 350px) {
		font-size: 18px;
		line-height: 32px;
	}

	@media (max-width: 200px) {
		font-size: 16px;
		line-height: 28px;
	}
`;

const Description = styled.div`
	font-family: "Cabin";
	font-style: italic;
	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
	min-height: 300px;

	color: #000000;
	@media (max-width: 680px) {
		min-height: unset;
		font-size: 16px;
	}

	@media (max-width: 350px) {
		font-size: 14px;
		line-height: 20px;
	}

	@media (max-width: 200px) {
		font-size: 12px;
	}
`;

const FloatingImage = styled.img<{ inverted: number }>`
	position: absolute;
	right: ${({ inverted }) => (inverted ? "unset" : "0")};
	left: ${({ inverted }) => (inverted ? "0" : "unset")};
	bottom: 0;

	@media (max-width: 680px) {
		width: 120px;
		bottom: -100px;
	}
`;
