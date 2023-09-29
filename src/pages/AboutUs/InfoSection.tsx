import styled from "styled-components";
import ScaleFadeInView from "../../components/UI/ScaleFadeInView";
import RevealInView from "../../components/UI/RevealInView";

interface TProps {
	title: string;
	description: string;
	image: string;
	invertPosition: boolean;
}
export default function InfoSection({ title, description, image, invertPosition }: TProps) {
	return (
		<InfoSectionApp $invert={invertPosition}>
			<ImageContainer>
				<ScaleFadeInView delay={0.2} type="spring" duration={1.5}>
					<InfoImage src={image} />
				</ScaleFadeInView>
			</ImageContainer>

			<InfoContent>
				<RevealInView delay={0.5}>
					<InfoContentTitle>{title}</InfoContentTitle>
					<InfoContentDescription>{description}</InfoContentDescription>
				</RevealInView>
			</InfoContent>
		</InfoSectionApp>
	);
}

const InfoSectionApp = styled.div<{ $invert: boolean }>`
	display: flex;
	flex-direction: ${({ $invert }) => ($invert ? "row-reverse" : "row")};
	justify-content: center;
	align-items: center;
	gap: 80px;
	flex-wrap: wrap;

	@media (max-width: 1200px) {
		gap: 20px;
	}
`;

const ImageContainer = styled.div`
	max-width: 500px;
	width: 100%;
`;

const InfoImage = styled.img`
	display: block;
	max-width: 500px;
	width: 100%;
`;

const InfoContent = styled.div`
	max-width: 500px;
`;

const InfoContentTitle = styled.h2`
	font-family: "Cinzel Decorative";
	font-style: normal;
	font-weight: 400;
	font-size: 35px;
	line-height: 47px;
	text-transform: uppercase;
	color: #000000;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	margin-bottom: 20px;

	@media (max-width: 400px) {
		font-size: 22px;
		line-height: 40px;
	}

	@media (max-width: 250px) {
		font-size: 18px;
		line-height: 30px;
	}
`;

const InfoContentDescription = styled.p`
	margin: 0;
	font-family: "Cabin";
	font-style: italic;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #000000;
	min-height: 300px;

	@media (max-width: 1200px) {
		min-height: unset;
	}

	@media (max-width: 400px) {
		font-size: 14px;
	}

	@media (max-width: 250px) {
		font-size: 12px;
	}
`;
