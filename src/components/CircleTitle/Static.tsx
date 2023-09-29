import React from "react";
import styled from "styled-components";

interface TProps {
  title?: String;
  subTitle?: String;
}
const StaticCircle: React.FC<TProps> = ({ title, subTitle}) => {
  return (
    <MainElipse>
      <SecondElipse>
        {title && title.length ? <FirstHeaderTitle>{title}</FirstHeaderTitle> : null}
        {subTitle && subTitle.length ? <SecondHeaderTitle>{subTitle}</SecondHeaderTitle> : null}
      </SecondElipse>
    </MainElipse>
    
  );
};

export default StaticCircle;

const MainElipse = styled.div`
  margin: auto;
  height: 350px;
  width: 600px;

  background: #f7f2e5c0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 720px) {
    height: 200px;
    width: 400px;
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
`;

const FirstHeaderTitle = styled.h2`
  font-family: "Cabin";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 1280px) {
    font-size: 20px;
    margin-bottom: 0;
  }
`;

const SecondHeaderTitle = styled.h2`
  font-family: "Caramel";
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  text-align: center;
  text-transform: uppercase;
  color: #03989e;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;
