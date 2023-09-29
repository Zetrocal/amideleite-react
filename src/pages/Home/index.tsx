import React, {useEffect} from "react";
import styled from "styled-components";
import Hero from "./Hero";
import OurProducts from "./OurProducts";
import BakeryInfo from "./BakeryInfo";
import Featured from "./Featured";


const Home:React.FC  = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    return(
        <HomeApp>
            <Hero title="BIENVENIDOS A" subtitle="AMIDELEITE"/>
            <OurProducts/>
            <BakeryInfo/>
            <Featured/>
        </HomeApp>
    );
}


export default Home;

const HomeApp = styled.div`

`