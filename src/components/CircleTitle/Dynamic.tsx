import React from "react";
import styled from "styled-components";

interface TProps {
  title?: String;
  subTitle?: String;
}
const DynamicCircle: React.FC<TProps> = ({ title, subTitle}) => {
  return (
    <MainElipse>
      <SecondElipse>
        {title && title.length ? <FirstHeaderTitle>{title}</FirstHeaderTitle> : null}
        {subTitle && subTitle.length ? <SecondHeaderTitle>{subTitle}</SecondHeaderTitle> : null}
      </SecondElipse>
    </MainElipse>
    
  );
};

export default DynamicCircle;

const MainElipse = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  min-width: 360px;
  max-width: 700px;
  max-height: 350px;

  background: #f7f2e5c0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 400px){
    min-width: unset;
  }
`;

const SecondElipse = styled.div`
  height: 96%;
  width: 98%;
  border-radius: 50%;
  border: 5px solid #54342a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 250px){
    justify-content: space-evenly;
    border: 4px solid #54342a;
  }
`;

const FirstHeaderTitle = styled.h2`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 920px) {
    font-size: 30px;
    margin-bottom: 0;
  }

  @media (max-width: 820px) {
    font-size: 25px;
    margin-bottom: 0;
  }

  @media (max-width: 620px) {
    font-size: 25px;
    margin-bottom: 0;
  }

  @media (max-width: 520px) {
    font-size: 20px;
    margin-bottom: 0;
  }

  @media(max-width: 420px){
    font-size: 16px;
  }

  @media(max-width: 370px){
    font-size: 14px;
  }

  @media(max-width: 250px){
    font-size: 12px;
  }

  @media(max-width: 200px){
    font-size: 10px;
  }
`;

const SecondHeaderTitle = styled.h2`
  font-family: "Caramel";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  text-align: center;
  text-transform: uppercase;
  color: #03989e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -30px;
  
  @media (max-width: 920px) {
    font-size: 100px;
  }

  @media (max-width: 820px) {
    font-size: 70px;
  }

  @media (max-width: 620px) {
    font-size: 80px;
    margin-top: -20px;
  }

  @media (max-width: 520px) {
    font-size: 70px;
  }

  @media (max-width: 420px) {
    font-size: 60px;
  }

  @media(max-width: 370px){
    font-size: 38px;
  }

  @media(max-width: 250px){
    font-size: 28px;
  }

  @media(max-width: 200px){
    font-size: 22px;
  }
`;
