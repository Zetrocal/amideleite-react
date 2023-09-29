import ReactPaginate from "react-paginate";
import styled from "styled-components";
import "./CustomPagination.css";
import { animateScroll as scroll } from "react-scroll";

interface TProps {
	pageCount: number;
	itemOffset: number;
	itemsPerPage: number;
	items: Array<any>;
	numberPage: number;
	updateItemOffset: Function;
	updateNumberPage: Function;
}
export default function CustomPagination({ pageCount, updateItemOffset, itemsPerPage, items, updateNumberPage, numberPage }: TProps) {
	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		updateNumberPage(event.selected);
		updateItemOffset(newOffset);
		scroll.scrollToTop({
			duration: 600,
			smooth: "easeInOutQuart",
		});
	};

	return (
		<CustomPaginationApp>
			<ReactPaginate
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
				forcePage={numberPage}
			/>
		</CustomPaginationApp>
	);
}

const CustomPaginationApp = styled.div`
	text-align: center;
	@media (max-width: 300px) {
		.pagination > li:not(:first-child):not(:last-child){
			display: none;
		}
        font-size: 14px;
	}

    @media (max-width: 300px) {
        font-size: 10px;
    }
`;
