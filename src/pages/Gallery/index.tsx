import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getGalleryItems } from "../../services/GalleryApi";
import { TGalleryItemsApi, TImageGallery } from "../../data/gallery/infoGallery";
import ImageModal from "../../components/Modal/ImageModal";
import SectionHeader from "../../layout/Header/SectionHeader";
import FilterBar from "../News/FilterBar";
import CustomPagination from "../News/CustomPagination";
import Reveal from "../../components/UI/Reaveal";
import FadeInView from "../../components/UI/FadeInView";

const Gallery: React.FC = () => {
	let [selectedFilter, setSelectedFilter] = useState("todos");
	let [itemsPerPage, setItemsPerPage] = useState(12);
	let [itemOffset, setItemOffset] = useState(0);
	let [numberPage, setNumberPage] = useState(0);
	let [amountOfPages, setAmountOfPages] = useState(0);
	let [currentItems, setCurrentItems] = useState<TImageGallery[]>([]);
	let [savedApiInfo, setSavedApiInfo] = useState<TGalleryItemsApi>();
	let [items, setItems] = useState<TImageGallery[]>([]);
	let [filters, setFilters] = useState<string[]>([]);
	let [imageModal, setImageModal] = useState("");
	let [modalImageFlag, setModalImageFlag] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (!items.length || !savedApiInfo) {
			//let response = getGalleryItems(1, selectedFilter);
			let response = getGalleryItems(selectedFilter);
			const pageCount = Math.ceil(response.totalItems / itemsPerPage);
			const endOffset = itemOffset + itemsPerPage;
			const currentItems = response.items.slice(itemOffset, endOffset);
			setCurrentItems(currentItems);
			setSavedApiInfo(response);
			setItems(response.items);
			setAmountOfPages(pageCount);

			if (!filters.length) setFilters(response.categories);
		} else {
			const endOffset = itemOffset + itemsPerPage;
			const currentItems = items.slice(itemOffset, endOffset);
			setCurrentItems(currentItems);
		}
	}, [itemOffset, items]);

	useEffect(() => {
		//let response = getGalleryItems(1, selectedFilter);
		let response = getGalleryItems(selectedFilter);
		const pageCount = Math.ceil(response.totalItems / itemsPerPage);
		setSavedApiInfo(response);
		setItems(response.items);
		setAmountOfPages(pageCount);
		setItemOffset(0);
		setNumberPage(0);
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
				//let response = getGalleryItems(pageApiRequest, selectedFilter);
				let response = getGalleryItems(selectedFilter);

				setSavedApiInfo(response);
				setItems((prevState) => [...prevState].concat(response.items));
				setItemOffset(offset);
			} else setItemOffset(offset);
		}
	};

	let clickedImage = (imageToDisplay: string) => {
		setImageModal(imageToDisplay);
		setModalImageFlag(true);
	};

	let closeImageModal = () => {
		setImageModal("");
		setModalImageFlag(false);
	};

	return (
		<React.Fragment>
			{modalImageFlag && <ImageModal imgSrc={imageModal} closeHandler={closeImageModal} />}
			<SectionHeader title={"Galeria"} />
			<GalleryContainer>
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
						productsPerPageOption={[9, 12, 18]}
					/>
				</FadeInView>

				<Reveal delay={0.2} duration={0.2}>
					<ItemsContainer>
						{currentItems.length &&
							currentItems.map((item, index) => (
								<ImageContainer key={"ImageGallery-" + index}>
									<Image
										src={item.smallImage}
										onClick={() => {
											clickedImage(item.mainImage);
										}}
									></Image>
								</ImageContainer>
							))}
					</ItemsContainer>
				</Reveal>
			</GalleryContainer>

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

export default Gallery;

const GalleryContainer = styled.div`
	padding: 30px;
	min-height: 80vh;
	@media (max-width: 680px) {
		padding: 30px 5px;
	}
`;

const ItemsContainer = styled.div`
	padding: 50px 40px 10px 40px;
	gap: 1px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(500px, 500px));
	/* grid-template-columns: repeat(auto-fill, 500px); */
	justify-items: center;
	justify-content: center;
	@media (max-width: 680px) {
		gap: 10px;
	}
`;

const ImageContainer = styled.div`
	width: 500px;
	height: 500px;
	position: relative;
	@media (max-width: 680px) {
		width: 300px;
		height: 300px;
	}

	@media (max-width: 300px) {
		width: 88vw;
		height: 88vw;
	}
`;

const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	cursor: pointer;
	transition: all linear 0.2s;
	border-radius: 10px;
	filter: brightness(0.8);

	&:hover {
		transform: scale(1.05);
		z-index: 10;
		filter: brightness(1.1);
		box-shadow: rgba(255, 253, 229, 0.575) 0px 8px 24px;
	}

	@media (max-width: 680px) {
		filter: brightness(1);
	}
`;
