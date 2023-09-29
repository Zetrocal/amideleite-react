import React, { useEffect } from "react";
import SectionHeader from "../../layout/Header/SectionHeader";
import { categories } from "../../data/categories/CategoryProducts";
import { NavLink } from "react-router-dom";
import RoundedCategory from "../../components/ProductCard/RoundedCategory";
import CategoriesContainer from "../../components/UI/CategoriesContainer";
import Reveal from "../../components/UI/Reaveal";

const Category: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	let categoriesMap = categories.map((category, index) => (
		<NavLink key={"categoryLink-" + index} to={category.linkTo}>
			<RoundedCategory key={"Category-" + index} text={category.title} image={category.image} />
		</NavLink>
	));

	return (
		<React.Fragment>
			<SectionHeader title="Productos" />
			<Reveal duration={0.4}>
				<CategoriesContainer>{categoriesMap}</CategoriesContainer>
			</Reveal>
		</React.Fragment>
	);
};

export default Category;
