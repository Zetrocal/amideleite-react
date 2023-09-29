import React, { useEffect} from "react";
import styled from "styled-components";
import SpecialsSectionInfo from "./SpecialsSectionInfo";
import SpecialsFooter from "./SpecialsFooter";
import SectionHeader from "../../layout/Header/SectionHeader";
import { TSpecialsSectionInfo, sectionsInfo } from "../../data/specials/SectionInfo";

const Specials:React.FC  = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return(
        <SpecialsApp>
            <SectionHeader title="Especiales" />
            <SpecialsSections>
                {sectionsInfo.map((section: TSpecialsSectionInfo, index: number) => (
                    <SpecialsSectionInfo key={"special-" + index} {...section} inverted={index % 2} />
                ))}
            </SpecialsSections>

            <SpecialsFooter />
        </SpecialsApp>
    );
}


export default Specials;

const SpecialsApp = styled.div`

`

const SpecialsSections = styled.div`
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media(max-width: 680px) {
        //gap: 200px;
        margin-bottom: 60px;
    }

    @media(max-width: 350px) {
        padding: 130px 5px;
    }

    @media(max-width: 200px) {
        padding: 130px 0px;
    }
`