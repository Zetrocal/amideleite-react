import React, {useEffect} from "react";
import styled from "styled-components";
import SectionHeader from "../../layout/Header/SectionHeader";
import BannerSection from "./BannerSection";
import InfoSection from "./InfoSection";
import { aboutUsContent, bannerContent } from "../../data/aboutUs/TextContent";


const AboutUs:React.FC  = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return(
        <React.Fragment>
            <SectionHeader title="Sobre Nosotros"/>
            <InfoContent>
            {aboutUsContent.map((content, index) => (
                <InfoSection
                    title={content.title}
                    description={content.description}
                    image={content.image}
                    invertPosition={content.invertPosition}
                    key={"InfoSection-" + index}
                />
            ))}
            </InfoContent>
            
            <BannerSection text={bannerContent.text} backgroundImage={bannerContent.backgroundImage}/>
        </React.Fragment>
    );
}

export default AboutUs;

const InfoContent = styled.div`
    padding: 160px 50px;
    display: flex;
    flex-direction: column;
    gap: 140px;

    @media(max-width: 400px) {
        padding: 80px 5px;
        gap: 70px;
    }
        
`