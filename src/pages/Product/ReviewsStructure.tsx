import styled from "styled-components";
import CakerPortion from "../../assets/images/Figures/Pie/original.png";
import { TAggregateRating } from "../../data/products/ProductsInfo";

interface TProps {
	reviewsInfo: TAggregateRating | undefined;
}
export default function ReviewStructure({ reviewsInfo }: TProps) {
	let noReviewsTag = (
		<NoReviewsContainer>
			<NoReviewImage src={CakerPortion} />
			<NoReviewText>No se encontraron reviews para este producto</NoReviewText>
		</NoReviewsContainer>
	);
	return <ReviewStructureApp>{!reviewsInfo ? noReviewsTag : <ReviewInfoContainer></ReviewInfoContainer>}</ReviewStructureApp>;
}

const ReviewStructureApp = styled.div`
	height: 370px;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const NoReviewsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	height: 100%;
	border-radius: 20px;
	border: 1px dotted #afafaf83;
    padding: 10px;
`;

const NoReviewImage = styled.img``;

const NoReviewText = styled.p`
	font-family: Cabin;
	font-style: italic;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	letter-spacing: 0.2em;
	color: rgb(84, 52, 42);
	@media (max-width: 640px) {
		font-size: 12px;
		text-align: center;
	}
`;

const ReviewInfoContainer = styled.div``;
