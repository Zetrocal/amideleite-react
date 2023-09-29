import React, { useEffect } from "react";
import styled from "styled-components";
import SectionHeader from "../../layout/Header/SectionHeader";
import { selectTitle } from "../../data/categories/CategoryProducts";
import CategoriesContainer from "../../components/UI/CategoriesContainer";
import { getProductsFromCategory } from "../../data/products/ProductsShortInfo";
import ShortInfoProduct from "../../components/ProductCard/ShortInfoProduct";
import Reveal from "../../components/UI/Reaveal";

interface TProps {
	type: string;
}
const Products: React.FC<TProps> = ({ type }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	let products = getProductsFromCategory(type);
	let productsBakery = products.products.map((product, index) => (
		<ShortInfoProduct
			title={product.productName}
			image={product.image}
			minPrice={product.minPrice}
			maxPrice={product.maxPrice}
			productId={product.id}
			key={"CategoriesBakery-" + index}
		/>
	));

	return (
		<ProductsApp>
			<SectionHeader title={selectTitle(type)} />
			<Reveal delay={0.1} duration={0.2}>
				<CategoriesContainer>{productsBakery}</CategoriesContainer>
			</Reveal>
		</ProductsApp>
	);
};

export default Products;

const ProductsApp = styled.div``;
