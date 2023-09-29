import styled from "styled-components";
import FadeInView from "../UI/FadeInView";

interface Tprops {
	text: string;
	image: string;
}
export default function OurSelection(props: Tprops) {
	const { text, image } = props;

	return (
		<FadeInView>
			<SpecialCardApp>
				<UpperFrame />
				<BottomsFrame />
				<NormalCard>
					<ImageSection src={image} alt="category-image" />
					<TextSection>{text}</TextSection>
				</NormalCard>
			</SpecialCardApp>
		</FadeInView>
	);
}

const SpecialCardApp = styled.div`
	position: relative;
	width: 248px;
	height: 345px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 300px) {
		width: 200px;
		height: 270px;
	}

	@media (max-width: 220px) {
		width: 140px;
		height: 190px;
	}
`;

const UpperFrame = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 220px;
	height: 311.79px;
	border: 5px solid #c9a66b;
	border-radius: 30px;
	z-index: 0;

	@media (max-width: 300px) {
		width: 180px;
		height: 230px;
	}

	@media (max-width: 220px) {
		width: 110px;
		height: 160px;
		border: 4px solid #c9a66b;
	}
`;

const BottomsFrame = styled.div`
	position: absolute;
	bottom: 0%;
	right: 0%;
	width: 220px;
	height: 311.79px;
	border: 5px solid #03989e;
	border-radius: 30px;
	z-index: 0;

	@media (max-width: 300px) {
		width: 180px;
		height: 230px;
	}

	@media (max-width: 220px) {
		width: 110px;
		height: 160px;
		border: 4px solid #03989e;
	}
`;

const NormalCard = styled.div`
	width: 220px;
	height: 311.79px;
	border-radius: 30px;
	background: #2f1107;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
	cursor: pointer;
	transition: all linear 0.1s;

	&:hover {
		width: 230px;
		height: 320px;
	}

	@media (max-width: 300px) {
		width: 180px;
		height: 230px;

		&:hover {
			width: 190px;
			height: 250px;
		}
	}

	@media (max-width: 220px) {
		width: 120px;
		height: 170px;
		&:hover {
			width: 140px;
			height: 190px;
		}
	}
`;

const ImageSection = styled.img`
	border-radius: 30px;
	width: 100%;
	height: 79%;
	display: block;
	object-fit: cover;
`;

const TextSection = styled.p`
	margin: 0;
	padding: 0;
	flex: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Alatsi";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	text-align: center;
	text-transform: uppercase;
	color: #ffffff;

	@media (max-width: 220px) {
		font-size: 18px;
	}
`;
