import styled from "styled-components";
import featuredProducts from "../../data/products/featured";

import BirthdayDraw from "../../assets/images/Figures/Birthday/medium.png";
import CafeDraw from "../../assets/images/Figures/Coffee/original.png";

import SectionTitle from "../../components/SectionTitle";
import FeaturedImage from "../../components/ProductCard/FeaturedImage";
import FadeInView from "../../components/UI/FadeInView";

export default function Featured() {
	return (
		<FeaturedApp>
			<LeftCornerImage src={BirthdayDraw} alt="Birthday Cake" />
			<RightCornerImage src={CafeDraw} alt="Coffee" />
			<SectionTitle>Destacados</SectionTitle>
			<FeaturedCollection>
				<SecondaryProduct>
					<FadeInView delay={0.55} y={-60} duration={1} ease="easeOut">
						<FeaturedImage image={featuredProducts[1].image} footerColor="#EBDCB2" text={featuredProducts[1].name} />
					</FadeInView>
				</SecondaryProduct>

				<PrimaryProduct>
					<FadeInView delay={0.25} y={-80} duration={1} ease="easeOut">
						<FeaturedImage image={featuredProducts[0].image} footerColor="#03989E" text={featuredProducts[0].name} />
					</FadeInView>
				</PrimaryProduct>

				<SecondaryProduct>
					<FadeInView delay={0.85} y={-60} duration={1} ease="easeOut">
						<FeaturedImage image={featuredProducts[2].image} footerColor="#EBDCB2" text={featuredProducts[2].name} />
					</FadeInView>
				</SecondaryProduct>
			</FeaturedCollection>
		</FeaturedApp>
	);
}

const FeaturedApp = styled.div`
	position: relative;
	padding: 60px;

	@media (max-width: 400px) {
		padding: 60px 5px;
	}
`;

const LeftCornerImage = styled.img`
	position: absolute;
	top: -80px;
	left: 0;
	width: 300px;
	height: 270px;
	@media (max-width: 1080px) {
		width: 200px;
		height: 200px;
	}
	@media (max-width: 680px) {
		width: 100px;
		height: 100px;
		top: -40px;
	}
`;

const RightCornerImage = styled.img`
	position: absolute;
	top: -80px;
	right: 0;
	width: 190px;
	height: 196px;
	@media (max-width: 1080px) {
		width: 150px;
		height: 150px;
	}
	@media (max-width: 680px) {
		width: 100px;
		height: 100px;
		top: -40px;
	}

	@media (max-width: 220px) {
		display: none;
	}
`;

const FeaturedCollection = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 100px;
	gap: 10px;
	@media (max-width: 920px) {
		margin-top: 50px;
	}
`;

const PrimaryProduct = styled.div`
	max-width: 345px;

	@media (max-width: 480px) {
		& p {
			font-size: 14px;
		}
	}

	@media (max-width: 380px) {
		& p {
			font-size: 12px;
		}
	}
`;

const SecondaryProduct = styled.div`
	max-width: 300px;
	@media (max-width: 1280px) {
		width: 250px;

		& p {
			font-size: 13px;
		}
	}

	@media (max-width: 800px) {
		display: none;
	}
`;
