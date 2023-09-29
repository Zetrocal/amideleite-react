import React from "react";
import styled from "styled-components";

interface TProps {
  className: string,
  changeState: Function,
  currentState: boolean
}
const Burger: React.FC<TProps> = ({className, changeState, currentState}) => {
  const changeStateHandler = () => {changeState()};

  return (
    <div className={className || ""}>
      <ToggleCheckbox id="toggle" onChange={changeStateHandler} checked={currentState}/>
      <Hamburger htmlFor="toggle" className="cursor-pointer">
        <HamburgerLine className="bg-cream-400"/>
        <HamburgerLine className="bg-cream-400"/>
        <HamburgerLine className="bg-cream-400"/>
      </Hamburger>
    </div>
  );
};

export default Burger;

const Hamburger = styled.label`
  position: absolute;
  right: 5%;
  margin-left: -2em;
  width: 2em;
  height: auto;
  z-index: 5;
  
`;

const HamburgerLine = styled.div`
  position: relative;
  width: 2.5rem;
  height: 0.3rem;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  &:not(:first-of-type){
    margin-top: 8px;
  }
`;

const ToggleCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;

  &:checked + ${Hamburger} ${HamburgerLine}:nth-child(1) {
    transform-origin: center;
    transform: rotate(45deg);
  }

  &:checked + ${Hamburger} ${HamburgerLine}:nth-child(2) {
    opacity: 0;
    transform: rotate(45deg);
  }

  &:checked + ${Hamburger} ${HamburgerLine}:nth-child(3) {
    transform-origin: center;
    transform: rotate(-45deg);
    margin-top: -17.5px;
  }
`;
