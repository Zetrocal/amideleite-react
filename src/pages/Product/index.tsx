import React, { useEffect } from "react";
import styled from "styled-components";
import ProductMainInfo from "./ProductMainInfo";
import ProductExtraInfo from "./ProductExtraInfo";
import useDispatchInfo from "../../hooks/Product/use-dispatchInfo";
import { useParams } from "react-router-dom";
import Reveal from "../../components/UI/Reaveal";

const Product: React.FC = () => {
	let { productId } = useParams();
	let productInfo = productId ? useDispatchInfo({ productId }) : undefined;
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return !productInfo ? (
		<EmptyContainer />
	) : (
		<ProductApp>
			<Reveal delay={0.05} duration={0.15}>
				<ProductMainInfo/>
				<ProductExtraInfo />
			</Reveal>
		</ProductApp>
	);
};

export default Product;

const EmptyContainer = styled.div`
	height: 100vh;
	width: 100vw;
`;

const ProductApp = styled.div`
	padding: 50px;
  min-height: 100vh;
	@media (max-width: 640px) {
		padding: 30px 10px;
	}
`;
