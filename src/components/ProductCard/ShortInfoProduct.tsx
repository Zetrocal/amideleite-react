import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface TProps {
  productId: string;
  image: string;
  title: string;
  minPrice?: number;
  maxPrice?: number;
}
const ShortInfoProduct: React.FC<TProps> = ({ productId, image, title, minPrice, maxPrice }) => {
  return (
    <ShortInfoProductApp>
      <NavLink to={`./${productId}`}>
        <ProductImageContainer>
        <ProductImage src={image} alt="Bakery product" />
        </ProductImageContainer>
        
      </NavLink>

      <ProductInfo>
        <NavLink to={`/bakery/product/${productId}`}>
          <ProductTitle>{title}</ProductTitle>
        </NavLink>
        <ProductLine />
        {(minPrice && maxPrice) && (minPrice !== maxPrice) ? (
          <ProductPrice>
            {minPrice} Bs - {maxPrice} Bs
          </ProductPrice>
        ) : minPrice || maxPrice ? (
          <ProductPrice>{minPrice || maxPrice} Bs</ProductPrice>
        ) : (
          ""
        )}
      </ProductInfo>
    </ShortInfoProductApp>
  );
};

export default ShortInfoProduct;

const ShortInfoProductApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & a {
    text-decoration: none;
  }
`;

const ProductImageContainer = styled.div`
    border-radius: 20px;
    width: 345px;
    height: 288px;
    object-position: center;
    display: block;
    margin-bottom: 5px;
    cursor: pointer;
    position: relative;
    z-index: 10;
    overflow: hidden;

    @media(max-width: 380px){
      width: 80vw;
      height: 80vw;
    }
    
`

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
    position: relative;
    z-index: 1;
    transition: all 0.1s linear;

   &:hover{

        transform: scale(1.1);
    }
`

/* const ProductImage = styled.img`
  border-radius: 20px;
  width: 345px;
  height: 288px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    width: 355px;
    height: 295px;
  }
`; */

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const ProductTitle = styled.h2`
  font-family: "Alatsi";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;

	@media (max-width: 380px) {
    font-size: 14px;
  }

  @media (max-width: 250px) {
    font-size: 12px;
  }
`;

const ProductLine = styled.div`
  width: 40.59px;
  height: 0px;
  border: 1px solid #c9a66b;
`;

const ProductPrice = styled.p`
  margin: 0;
  font-family: "Cinzel Decorative";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;

  color: #000000;
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;
