import React, { useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../../layout/Header/SectionHeader";
import ImageSection from "./ImageSection";
import instalationImages from "../../data/location/InstalationImages";
import StaticMap from "../../components/Map/StaticMap";
import Reveal from "../../components/UI/Reaveal";

const Location: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<React.Fragment>
			<SectionHeader title={"Ubicacion"} />
			<LocationContainer>
				<LocationSection direction="row">
					<ImageSection optionsPosition={"left"} images={instalationImages} />
					<InfoSection>
						<Reveal>
							<Title>Instalaciones</Title>
							<Description>
								Las entregas de la pastelería se la realizan en la calle tumusla entre calle México y Jose de la Reza.
								<br />
								<br />
								Se debe entrar por el pasaje municipal ubicado en la acera este y la entrada es en la casa con rejas negras que tiene un pino
								muy alto
								<br />
								<br />
								Los pedidos deben realizarse con un dia de anticipacion mediante Whatsapp
								<br />
								<br />
							</Description>
						</Reveal>
					</InfoSection>
				</LocationSection>
			</LocationContainer>

			<StaticMap />
		</React.Fragment>
	);
};

export default Location;

const LocationContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	max-width: 1280px;
	margin: auto;
	padding: 50px 20px;

	@media (max-width: 300px) {
		padding: 50px 5px;
	}
`;

const LocationSection = styled.div<{ direction: string }>`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	padding: 20px;
	gap: 10px;
	justify-content: space-evenly;

	@media (max-width: 1280px) {
		flex-direction: column;
		align-items: center;
		padding: 0px;
		gap: 20px;
	}
`;

const InfoSection = styled.div`
	width: 100%;
	/* max-width: 500px;
    padding: 30px 10px; */
	max-width: 600px;
	padding: 30px 80px;
	@media (max-width: 680px) {
		padding: 20px 10px;
		max-width: unset;
	}
`;

const Title = styled.div`
	font-family: "Cinzel Decorative";
	font-style: normal;
	font-weight: 400;
	font-size: 33px;
	line-height: 47px;
	text-transform: uppercase;

	color: #000000;

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	margin-bottom: 20px;

	@media (max-width: 680px) {
		font-size: 28px;
	}

	@media (max-width: 400px) {
		font-size: 18px;
		line-height: 40px;
	}

	@media (max-width: 200px) {
		font-size: 14px;
		line-height: 40px;
	}
`;

const Description = styled.div`
	font-family: "Cabin";
	font-style: italic;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;

	color: #000000;
	@media (max-width: 680px) {
		font-size: 14px;
	}

	@media (max-width: 400px) {
		font-size: 14px;
		line-height: 22px;
	}

	@media (max-width: 200px) {
		font-size: 12px;
	}
`;
