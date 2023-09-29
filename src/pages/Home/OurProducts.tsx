import styled from "styled-components";

let CakeImage = "Products/Cakes/GoldChocolate/1/medium.jpg";
let CupcakesImage = "Products/CupCakes/PinkGreen/1/medium.jpg";
let PastriesImage = "Products/Pastries/CheeseRol/1/medium.jpg";
let SpecialsImage = "Products/Specials/VioletButterfly/medium.jpg";

import SectionTitle from "../../components/SectionTitle";
import OurSelection from "../../components/ProductCard/OurSelection";
import { NavLink } from "react-router-dom";

export default function OurProducts() {
	return (
		<OurProductsApp>
			<SectionTitle>Nuestros Productos</SectionTitle>

			<SampleCategories>
				<PermanentPair>
					<NavLink to={"/Cakes"}>
						<OurSelection text="Pasteles" image={CakeImage} />
					</NavLink>
					<NavLink to={"/Cupcakes"}>
						<OurSelection text="Cupcakes" image={CupcakesImage} />
					</NavLink>
				</PermanentPair>
				<ExtraPair>
					<NavLink to={"/Pastries"}>
						<OurSelection text="Bolleria" image={PastriesImage} />
					</NavLink>
					<NavLink to={"/Specials"}>
						<OurSelection text="Especiales" image={SpecialsImage} />
					</NavLink>
				</ExtraPair>
			</SampleCategories>

			<Buttoncontainer>
				<NavLink to={"/Category"}>
					<LookMoreButton>
						<TextButton>Ver Mas</TextButton>
					</LookMoreButton>
				</NavLink>
			</Buttoncontainer>
		</OurProductsApp>
	);
}

const OurProductsApp = styled.div`
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	gap: 50px;
`;

const SampleCategories = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 80%;
	margin: auto;
	flex-wrap: wrap;
	gap: 20px;
`;

const Buttoncontainer = styled.div`
	height: 65px;
`;

const LookMoreButton = styled.div`
	width: 240px;
	height: 60px;
	background: #54342a;
	border: 2px solid #c9a66b;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 22px;
	transition: all linear 0.05s;

	&:hover {
		width: 245px;
		height: 62px;
		font-size: 23px;
	}

	@media (max-width: 300px) {
		width: 80vw;
		font-size: 18px;
		transition: all linear 0.08s;
		&:hover {
			width: 83vw;
			height: 63px;
			font-size: 18px;
		}
	}
`;
const TextButton = styled.p`
	margin: 0;
	font-family: "Alatsi";
	font-style: normal;
	font-weight: 400;

	text-transform: uppercase;
	color: #ffffff;
`;

const PermanentPair = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex: 1;
	gap: 20px;
	max-width: 900px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const ExtraPair = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex: 1;
	gap: 20px;
	max-width: 900px;

	@media (max-width: 768px) {
		display: none;
	}
`;
