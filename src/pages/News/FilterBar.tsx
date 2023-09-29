import styled from "styled-components";

//const productsPerPageOption = [4, 6, 8, 10]

interface TProps {
	filters: Array<string>;
	currentSelectedFilter: string;
	updateFilterSelected: Function;
	productsPerPage: number;
	updateProductsPerPage: Function;
	productsPerPageOption: Array<number>;
}
export default function FilterBar({
	filters,
	currentSelectedFilter,
	updateFilterSelected,
	productsPerPage,
	updateProductsPerPage,
	productsPerPageOption,
}: TProps) {
	return (
		<FilterBarApp>
			<CategoryContainer>
				<OptionContainer
					onClick={() => {
						updateFilterSelected("todos");
					}}
					style={{ width: "40px" }}
				>
					<Option selected={currentSelectedFilter === "todos"}>todos</Option>
					<SubLine selected={currentSelectedFilter === "todos"} />
				</OptionContainer>
				{filters.map((element) => (
					<OptionContainer
						onClick={() => {
							updateFilterSelected(element);
						}}
						key={"CategoryFilter-" + element}
						style={{ width: "60px" }}
					>
						<Option selected={currentSelectedFilter === element}>{element}</Option>
						<SubLine selected={currentSelectedFilter === element} />
					</OptionContainer>
				))}
			</CategoryContainer>

			<PerPageContainer>
				{productsPerPageOption.map((element) => (
					<OptionContainer
						onClick={() => {
							updateProductsPerPage(element);
						}}
						key={"PerPage-" + element}
						style={{ width: "10px" }}
					>
						<Option selected={element === productsPerPage}>{element}</Option>
						<SubLine selected={element === productsPerPage} />
					</OptionContainer>
				))}
			</PerPageContainer>
		</FilterBarApp>
	);
}

const FilterBarApp = styled.div`
	width: 90%;
	margin: 10px auto;
	background: rgba(235, 220, 178, 0.6);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	display: flex;
	padding: 12px 20px;
	@media (max-width: 680px) {
		padding: 12px 0px;
		width: 95%;
	}
`;

const CategoryContainer = styled.div`
	display: flex;
	gap: 50px;
	flex: 1;
	@media (max-width: 680px) {
		gap: 5px;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}

	@media (max-width: 400px) {
		gap: unset;
		justify-content: space-evenly;
	}
`;

const PerPageContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: flex-end;

	@media (max-width: 680px) {
		display: none;
	}
`;

const OptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const Option = styled.p<{ selected: boolean }>`
	margin: 0;
	font-family: "Cabin";
	font-style: normal;
	font-size: 14px;
	line-height: 17px;
	text-transform: capitalize;

	font-weight: ${({ selected }) => (selected ? "700" : "400")};
	color: ${({ selected }) => (selected ? "#2F1107" : "#54342A")};
	transition: all 0.15s linear;

	:hover {
		color: #2f1107;
		font-weight: 700;
	}

	@media (max-width: 400px) {
		font-size: 12px;
	}
`;

const SubLine = styled.div<{ selected: boolean }>`
	width: ${({ selected }) => (selected ? "100%" : "0%")};
	height: 1px;
	background: #2f1107;
	transition: all 0.15s linear;
`;
