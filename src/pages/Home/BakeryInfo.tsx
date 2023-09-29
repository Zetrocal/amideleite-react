import styled from "styled-components";
import Circular from "../../components/Carousel/Circular";

import MouseCake from "../../assets/images/Extra/HomeTart/blur.jpg";
let Pudin1 = "Products/Season/Christmas/ChocoPudin/1/medium.jpg";
let Pudin2 = "Products/Season/Christmas/ClasicPudin/1/medium.jpg";
let Cake = "Products/Specials/LittlePony/big.jpg";
let MotherPack = "Products/Season/Mother1/Cupcake/big.jpg";
import RevealInView from "../../components/UI/RevealInView";

export default function BakeryInfo() {
	const imageList = [Pudin1, Pudin2, Cake, MotherPack];
	return (
		<BakeryInfoApp>
			<BakeryContainer>
                <InfoContainer>
                    <RevealInView delay={0.3} duration={0.8} ease={[0, 0.15, 0.5, 1]}>
                        <InfoBox>
                            <InfoBoxTitle>Pasteleria de Corazon</InfoBoxTitle>
                            <InfoBoxDescription>
                                Ofrecemos productos cuidadosamente elaborados con cariño y atención al detalle, que incluyen pasteles, bollería, tartas y cupcakes
                                entre otros
                                <br />
                                <br />
                                Cada producto es preparado con ingredientes frescos y de alta calidad, y nuestros pasteles y tartas son decorados a mano para crear
                                diseños personalizados.
                            </InfoBoxDescription>
                        </InfoBox>
                    </RevealInView>
                </InfoContainer>
				

				<Circular items={imageList} />
			</BakeryContainer>
		</BakeryInfoApp>
	);
}

const BakeryInfoApp = styled.div`
	background: url(${MouseCake});
	background-position: center;
	background-size: cover;
	padding: 100px;
	width: 100%;

	@media (max-width: 680px) {
		padding: 80px 10px;
	}

	@media (max-width: 300px) {
		padding: 80px 5px;
	}
`;

const BakeryContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	max-width: 1200px;
	margin: auto;
	flex-wrap: wrap;
	gap: 20px;
`;

const InfoContainer = styled.div`
    width: 100%;
    max-width: 490px;
    min-height: 400px;
    @media (max-width: 300px) {
		min-height: 300px;
	}
`

const InfoBox = styled.div`
	width: 100%;
	padding: 20px;
    height: 100%;
	//max-width: 490px;
	//min-height: 400px;
	background: #54342a;
	border-radius: 20px;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	justify-content: center;
	opacity: 0.85;
	@media (max-width: 300px) {
		padding: 15px 8px;
		//min-height: 300px;
	}
`;

const InfoBoxTitle = styled.h2`
	font-family: "Cinzel Decorative";
	font-style: normal;
	font-weight: 400;
	font-size: 30px;
	line-height: 40px;
	text-align: center;
	text-transform: uppercase;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	@media (max-width: 300px) {
		font-size: 20px;
	}
`;

const InfoBoxDescription = styled.p`
	margin: 0;
	font-family: "Cabin";
	font-style: italic;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: #ffffff;
	max-width: 400px;
	min-height: 220px;
	@media (max-width: 300px) {
		font-size: 12px;
	}
`;
