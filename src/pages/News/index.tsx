import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SectionHeader from "../../layout/Header/SectionHeader";
import FilterBar from "./FilterBar";
import ItemCard from "./ItemCard";
import CustomPagination from "./CustomPagination";
import { TBasicNew, TNewsItemsApi } from "../../data/news/NewsItems";
import { getNewsItems } from "../../services/NewsApi";
import Reveal from "../../components/UI/Reaveal";
import FadeInView from "../../components/UI/FadeInView";
import useModal from "../../hooks/Modal/use-modal";
import InfoImageModal from "../../components/Modal/InfoImageModal";

const News: React.FC = function () {
	let [selectedFilter, setSelectedFilter] = useState("todos");
	let [itemsPerPage, setItemsPerPage] = useState(8);
	let [itemOffset, setItemOffset] = useState(0);
	let [numberPage, setNumberPage] = useState(0);
	let [amountOfPages, setAmountOfPages] = useState(0);
	let [currentItems, setCurrentItems] = useState<TBasicNew[]>([]);
	let [savedApiInfo, setSavedApiInfo] = useState<TNewsItemsApi>();
	let [items, setItems] = useState<TBasicNew[]>([]);
	let [filters, setFilters] = useState<string[]>([]);

	let { modalState, openModal, closeModal } = useModal();
	let [modalInfo, setModalInfo] = useState({ title: "", description: "", imgSrc: "" });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (!items.length || !savedApiInfo) {
			//getNewsItems(1, selectedFilter).then((response) => {
			getNewsItems(selectedFilter).then((response) => {
				const pageCount = Math.ceil(response.totalItems / itemsPerPage);
				const endOffset = itemOffset + itemsPerPage;
				const currentItems = response.items.slice(itemOffset, endOffset);
				setCurrentItems(currentItems);
				setSavedApiInfo(response);
				setItems(response.items);
				setAmountOfPages(pageCount);

				if (!filters.length) setFilters(response.categories);
			});
		} else {
			const endOffset = itemOffset + itemsPerPage;
			const currentItems = items.slice(itemOffset, endOffset);
			setCurrentItems(currentItems);
		}
	}, [itemOffset, items]);

	useEffect(() => {
		//getNewsItems(1, selectedFilter).then((response) => {
		getNewsItems(selectedFilter).then((response) => {
			const pageCount = Math.ceil(response.totalItems / itemsPerPage);
			setSavedApiInfo(response);
			setItems(response.items);
			setAmountOfPages(pageCount);
			setItemOffset(0);
			setNumberPage(0);
		});
	}, [selectedFilter]);

	useEffect(() => {
		if (savedApiInfo && items.length) {
			const pageCount = Math.ceil(savedApiInfo.totalItems / itemsPerPage);
			const endOffset = itemOffset + itemsPerPage;
			const currentItems = items.slice(itemOffset, endOffset);
			setCurrentItems(currentItems);
			setAmountOfPages(pageCount);
			setNumberPage(0);
			setItemOffset(0);
		}
	}, [itemsPerPage]);

	let updateItemsOffset = (offset: number) => {
		if (items.length && savedApiInfo) {
			if (offset > items.length) {
				//let pageApiRequest = Math.ceil(items.length / savedApiInfo.itemsPerRequest);
				//getNewsItems(pageApiRequest, selectedFilter).then((response) => {
				getNewsItems(selectedFilter).then((response) => {
					setSavedApiInfo(response);
					setItems((prevState) => [...prevState].concat(response.items));
					setItemOffset(offset);
				});
			} else setItemOffset(offset);
		}
	};

	const readMoreHandler = (title: string, description: string, imgSrc: string) => {
		setModalInfo({ title, description, imgSrc });
		openModal();
	};

	return (
		<React.Fragment>
			<SectionHeader title={"Noticias"} />
			{modalState ? <InfoImageModal {...modalInfo} closeHandler={closeModal} /> : null}

			<NewsContainer>
				<FadeInView duration={0.2} y={-20}>
					<FilterBar
						filters={filters}
						currentSelectedFilter={selectedFilter}
						updateFilterSelected={(newFilter: string) => {
							setSelectedFilter(newFilter);
						}}
						productsPerPage={itemsPerPage}
						updateProductsPerPage={(newNumber: number) => {
							setItemsPerPage(newNumber);
						}}
						productsPerPageOption={[4, 6, 8, 10]}
					/>
				</FadeInView>

				<Reveal delay={0.2} duration={0.2}>
					<ItemsContainer>
						{currentItems.length &&
							currentItems.map((item, index) => (
								<ItemCard
									key={"NewsCard-" + index}
									title={item.title}
									description={item.description}
									image={item.image}
									readMoreHandler={() => readMoreHandler(item.title, item.description, item.image)}
								/>
							))}
					</ItemsContainer>
				</Reveal>
			</NewsContainer>

			{amountOfPages > 1 && (
				<CustomPagination
					pageCount={amountOfPages}
					itemOffset={itemOffset}
					itemsPerPage={itemsPerPage}
					items={items}
					numberPage={numberPage}
					updateNumberPage={(page: number) => {
						setNumberPage(page);
					}}
					updateItemOffset={updateItemsOffset}
				/>
			)}
		</React.Fragment>
	);
};

export default News;

const NewsContainer = styled.div`
	padding: 30px;
	@media (max-width: 380px) {
		padding: 30px 5px;
	}
	min-height: 80vh;
`;

const ItemsContainer = styled.div`
	padding: 50px 40px;
	gap: 80px;

	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(500px, 550px));
	/* grid-template-columns: repeat(auto-fill, 500px); */
	justify-items: center;
	justify-content: center;

	@media (max-width: 350px) {
		padding: 50px 5px;
		gap: 50px;
	}
`;
