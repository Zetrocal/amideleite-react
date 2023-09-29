import React, {useEffect} from "react";
import styled from "styled-components";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import Coffee from "../../assets/images/Figures/Coffee/original.png";

const Error: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
	return (
		<>
			<NavBar />
			<ErrorPage>
				<div className="flex flex-col md:flex-row justify-center items-center h-full gap-2 md:gap-6">
					<img src={Coffee} alt="Coffee" className="w-16 mr-auto ml-auto opacity-50 md:m-0 md:w-52" />
					<div className="text-center flex flex-col justify-center gap-2 md:basis-1/3 font-Cabin">
						<p className="text-5xl md:text-6xl drop-shadow-xl">404</p>
						<p className="text-lg md:text-xl">Pagina no encontrada</p>
						<div className="text-xs md:text-sm text-center mr-auto ml-auto">
							<p className="max-w-sm">
								Lo sentimos pero no encontramos contenido en la direccion ingresada porfavor vuelva a la pagina de inicio
							</p>
						</div>
					</div>
				</div>
			</ErrorPage>
			<Footer />
		</>
	);
};

export default Error;

const ErrorPage = styled.div`
	height: 70vh;
	padding: 20px;
`;
