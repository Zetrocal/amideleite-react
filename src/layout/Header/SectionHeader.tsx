import React from "react";
import styled from "styled-components";
import SampleCakes from "../../assets/images/Extra/CakesHeader/banner.png";
import Reveal from "../../components/UI/Reaveal";

interface TProps {
	title: string;
	backgroundImage?: string;
}
const SectionHeader: React.FC<TProps> = ({ title, backgroundImage }) => {
	return (
		<SectionHeaderApp $backgroundImage={backgroundImage || SampleCakes}>
			<SectionTitle>
				<Reveal delay={0} duration={0.3} ease={[0, 0.3, 0.9, 1]}>
					<MainElipse>
						<SecondElipse>
							<HeaderTitle>{title}</HeaderTitle>
						</SecondElipse>
					</MainElipse>
				</Reveal>
			</SectionTitle>
		</SectionHeaderApp>
	);
};

export default SectionHeader;

const SectionHeaderApp = styled.div<{ $backgroundImage: string }>`
	height: 280px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${({ $backgroundImage }) => $backgroundImage});
	background-size: cover;
	background-position: center;
`;

const SectionTitle = styled.div`
	height: 120px;
	width: 450px;
	@media (max-width: 480px) {
		width: 90vw;
	}

	@media (max-width: 200px) {
		height: 80px;
	}
`;

const MainElipse = styled.div`
	height: 120px;
	width: 450px;
	background: #e5e0d3dd;
	border-radius: 50%;
	max-height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 480px) {
		width: 90vw;
	}

	@media (max-width: 200px) {
		height: 80px;
		width: 80vw;
	}
`;

const SecondElipse = styled.div`
	height: 96%;
	width: 98%;
	border-radius: 50%;
	border: 5px solid #54342a;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 480px) {
		border: 4px solid #54342a;
	}
`;

const HeaderTitle = styled.h2`
	font-family: "Caramel";
	font-style: normal;
	font-weight: 400;
	font-size: 48px;
	text-align: center;
	text-transform: uppercase;
	color: #03989e;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

	@media (max-width: 480px) {
		font-size: 38px;
	}

	@media (max-width: 300px) {
		font-size: 34px;
	}

	@media (max-width: 250px) {
		font-size: 30px;
		line-height: 1;
	}

	@media (max-width: 200px) {
		font-size: 20px;
	}
`;
