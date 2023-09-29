import styled from "styled-components";
import RevealInView from "../UI/RevealInView";

interface TProps {
	children: string;
}
export default function SectionTitle(props: TProps) {
	return (
		<RevealInView delay={0.1} duration={0.8} ease={[0, 0.3, 0.9, 1]}>
			<SectionTitleApp>
				<Title>{props.children}</Title>
				<Line />
			</SectionTitleApp>
		</RevealInView>
	);
}

const SectionTitleApp = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h2`
	font-family: "Cabin";
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 49px;
	text-transform: uppercase;
	color: #2f1107;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	@media (max-width: 920px) {
		font-size: 30px;
	}

	@media (max-width: 350px) {
		font-size: 20px;
		line-height: 30px;
		text-align: center;
	}
`;

const Line = styled.div`
	max-width: 320px;
	width: 100%;
	height: 0px;
	border: 2px solid #2f1107;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	@media (max-width: 350px) {
		width: 70%;
	}
`;
