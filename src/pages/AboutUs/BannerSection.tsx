import styled from "styled-components";
import RevealInView from "../../components/UI/RevealInView";

interface TProps {
	text: string;
	backgroundImage: string;
}
export default function BannerSection({ text, backgroundImage }: TProps) {
	return (
		<BannerSectionApp $backgroundImage={backgroundImage}>
			<BannerTitle>
				<RevealInView delay={0.5} duration={0.9}>{text}</RevealInView>
			</BannerTitle>
		</BannerSectionApp>
	);
}

const BannerSectionApp = styled.div<{ $backgroundImage: string }>`
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42)), url(${({ $backgroundImage }) => $backgroundImage});
	background-position: center;
	background-size: cover;
	height: 540px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BannerTitle = styled.h2`
	font-family: "Caramel";
	font-style: normal;
	font-weight: 400;
	font-size: 70px;
	line-height: 84px;
	text-align: center;
	text-transform: uppercase;
	color: #ffffff;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	@media (max-width: 420px) {
		font-size: 30px;
		line-height: 54px;
	}

	@media (max-width: 300px) {
		font-size: 24px;
		line-height: 40px;
	}
`;
