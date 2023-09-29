import styled from "styled-components";
import FooterBanner from "../../assets/images/Extra/Footer/Bread/original.jpg";
import RevealInView from "../../components/UI/RevealInView";

export default function SpecialsFooter() {
	return (
		<SpecialsFooterApp>
			<RevealInView delay={0.5} duration={0.9}>
				<SpecialsFooterContainer>
					<Text>para coordinar o consultar el servicio</Text>
					<Button href="https://wa.me/59176999830" target="_blank">
						Contáctanos
					</Button>
				</SpecialsFooterContainer>
			</RevealInView>
		</SpecialsFooterApp>
	);
}

const SpecialsFooterApp = styled.div`
	margin-top: 20px;
	background: url(${FooterBanner});
	background-position: top;
	background-size: cover;
	width: 100%;
	height: 60vh;
	text-align: center;
	
`;

const SpecialsFooterContainer = styled.div`
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
    height: 100%;
`

const Text = styled.div`
	font-family: "Caramel";
	font-style: normal;
	font-weight: 400;
	font-size: 70px;
	line-height: 84px;
	/* identical to box height */

	text-align: center;
	text-transform: uppercase;

	color: #ebdcb2;

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	@media (max-width: 680px) {
		font-size: 38px;
		line-height: 60px;
	}

	@media (max-width: 350px) {
		font-size: 24px;
		line-height: 40px;
	}

	@media (max-width: 200px) {
		font-size: 20px;
		line-height: 40px;
	}
`;

const Button = styled.a`
	background: #03989e;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	font-family: "Cabin";
	font-style: normal;
	font-weight: 400;
	font-size: 26px;
	line-height: 32px;
	width: 300px;

	color: #fffbf1;
	padding: 20px;
	cursor: pointer;
	text-decoration: none;
	max-width: 500px;

	&:hover {
		background: #04a5aa;
	}

	&:active {
		background: #017579;
	}

	@media (max-width: 680px) {
		font-size: 18px;
		width: 50%;
		padding: 10px;
	}

	@media (max-width: 350px) {
		font-size: 14px;
		width: 80vw;
		max-width: 150px;
		padding: 5px;
	}
`;
