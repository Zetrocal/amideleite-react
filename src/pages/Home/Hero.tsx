import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import DynamicCircle from "../../components/CircleTitle/Dynamic";
import Reveal from "../../components/UI/Reaveal";

interface TProps {
	title: String;
	subtitle: String;
}
const Hero: React.FC<TProps> = ({ title, subtitle }) => {
	return (
		<HeroApp>
			<Reveal>
				<HeroVideo>
					<ReactPlayer
						url="videos/HeroVideo.mp4"
						playing
						loop={true}
						playsinline={true}
						controls={false}
						width={"100%"}
						height={"100%"}
						muted={true}
					/>
				</HeroVideo>

				<CircleContainer>
					<CircleSize>
						<DynamicCircle title={title} subTitle={subtitle} />
					</CircleSize>
				</CircleContainer>
			</Reveal>
		</HeroApp>
	);
};

export default Hero;

const HeroVideo = styled.div`
	position: absolute;
	width: 100%;
	z-index: 1;
	height: calc(100vh - 68px);

	& > div {
		max-height: calc(100vh - 68px);
	}

	& video {
		max-height: calc(100vh - 68px);
		object-fit: cover;
		object-position: center;
	}
`;

const HeroApp = styled.div`
	height: calc(100vh - 68px);
`;

const CircleContainer = styled.div`
	position: relative;
	z-index: 10;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CircleSize = styled.div`
	width: 70vw;
	height: 35vw;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 640px) {
		width: 90vw;
		height: 45vw;
	}
`;
