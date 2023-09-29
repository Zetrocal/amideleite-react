import styled from "styled-components";


const CategoriesContainer:React.FC<React.PropsWithChildren>  = (props) => {
    return(
        <CategoriesContainerApp>
            {props.children}
        </CategoriesContainerApp>
    );
}


export default CategoriesContainer;

const CategoriesContainerApp = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 80%;
    gap: 25px;
    margin: auto;
    padding: 50px 20px;

	@media (max-width: 400px) {
        padding: 50px 5px;
        max-width: unset;
    }
`