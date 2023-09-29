import React, { useState } from "react";
import styled from "styled-components";
import { middleElements } from "../../data/navBar/elements";
import { NavLink, To } from "react-router-dom";
import AmideleiteLogo from "../../assets/images/AmideleiteLogo.png";
import Burger from "../../components/Button/Burger";
import "./index.css";

const NavBar: React.FC = () => {
	const [activeNavbar, setActiveNavBar] = useState(false);

	const toggleNavBar = () => {
		setActiveNavBar((prevState) => !prevState);
	};
	const closeNavBar = () => {
		setActiveNavBar(false);
	};

	const centerComponents = middleElements.map((element: any, index: number) => {
		return (
			<div className="flex md:basis-32 items-center justify-evenly w-full basis-16" key={"NavLinkStyledCenter-" + index}>
				<NavLink to={element.linkTo as To} onClick={closeNavBar} className={({ isActive }) => (isActive ? "activeNavLink" : "")}>
					<NavWord>{element.name}</NavWord>
				</NavLink>
			</div>
		);
	});

	const dynamicNavBox = activeNavbar ? "opacity-100 right-0" : "opacity-0 -right-full -mt-12";

	return (
		<React.Fragment>
			<NavBarApp className="absolute top-0 h-16 w-full bg-gradient-to-t from-brown-200 to-brown-100 ">
				<div className="relative w-full h-full flex">
					<LeftSection className={`sm:relative sm:top-full sm:h-28 sm:w-48 sm:rounded-b-full top-0 h-full sm:pl-0 pl-4`}>
						<NavLink to="/">
							<LogoImage src={AmideleiteLogo} alt="Amideleite" />
						</NavLink>
						<Pasteleria className="sm:hidden px-5 text-cream-200 right">PASTELERIA</Pasteleria>
					</LeftSection>

					<TextSection className="h-16 border-b-4 border-b-cream-400 box-content static sm:relative z-10  justify-end md:justify-between px-5">
						<Burger
							className="md:hidden absolute t-0 cursor-pointer h-16 w-3 flex justify-center items-center"
							changeState={toggleNavBar}
							currentState={activeNavbar}
						/>

						<CenterSection
							className={`
              md:top-0 md:h-full
              w-full ${activeNavbar ? "h-auto" : "h-0"} absolute overflow-hidden left-0 z-20 top-full rounded-b-md d`}
						>
							<div
								className={`
                ${dynamicNavBox} 
                md:flex-row md:relative md:bg-opacity-0 md:opacity-100 md:right-auto md:h-full md:rounded-none md:gap-4 md:top-0 md:mt-0
                flex flex-col relative  bg-brown-200 transition-all ease-in-out duration-200 w-full items-center p-3 gap-1 rounded-b-md`}
							>
								{centerComponents}
							</div>
						</CenterSection>
					</TextSection>
				</div>
			</NavBarApp>
			<div className="h-16 w-full border-b-4 box-content"></div>
		</React.Fragment>
	);
};

export default NavBar;

const NavBarApp = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	top: 0;
	z-index: 100;
`;

const NavWord = styled.p`
	color: #e5e0d3;
	//border-bottom: 2px solid transparent;
	padding-top: 2px;
	padding-bottom: 2px;
	text-transform: uppercase;
	transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
	font-size: 14px;

	&:hover {
		color: #ebdcb2;
		text-shadow: 1px 1px 5px #ebdcb290, 1px 1px 5px #ebdcb290, -1px -1px 5px #ebdcb290, -1px -1px 5px #ebdcb290;
	}

	@media (max-width: 768px) {
		padding-top: 8px;
		padding-bottom: 8px;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const LeftSection = styled.div`
	background: #2f1107;
	left: 0;
	border-bottom: 5px solid #c9a66b;
	border-left: 5px solid #c9a66b;
	border-right: 5px solid #c9a66b;
	display: flex;
	align-items: top;
	justify-content: center;
    box-shadow: 5px 0px 15px rgba(0, 0, 0, 0.35);

	@media (max-width: 640px) {
		border-bottom: 4px solid #c9a66b;
		border-left: none;
		border-right: none;
		box-sizing: content-box;
		background: transparent;
		align-items: center;
		box-shadow: unset;

	}
`;

const LogoImage = styled.img`
	border-radius: 50%;
	position: absolute;
	bottom: 20%;
	left: 13%;

	@media (max-width: 640px) {
		left: 0;
		bottom: auto;
		height: 50px;
		position: relative;
	}
`;

const TextSection = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
  box-shadow: 15px 0px 15px rgba(0, 0, 0, 0.35);
`;

const CenterSection = styled.div`
	flex-basis: 700px;
	justify-content: space-evenly;
	align-items: center;

	& a {
		text-decoration: none;
		text-align: center;
		//flex-basis: 100px;
	}

	@media (max-width: 768px) {
		& a {
			width: 100%;
			flex-basis: unset;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}

		& a:hover {
			background: #54342a;
		}
	}
`;

const Pasteleria = styled.div`
	@media(max-width: 280px ){
		display: none;
	}
`