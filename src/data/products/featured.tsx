let CocoBerry =  "Products/Cakes/CocoBerry/1/medium.jpg";
let Cupcakes =  "Products/CupCakes/PinkGreen/1/medium.jpg";
let Customized =  "Products/Specials/ZodiacKnights/big.jpg";

export interface TFeaturedProduct {
    id: number|string;
    name: string;
    image: string;
}

const featuredProducts: TFeaturedProduct[] = [
  {
    id: 0,
    name: "Torta Coco/Frutilla",
    image: CocoBerry,
  },
  {
    id: 1,
    name: "Cupcakes Verde/Rosa",
    image: Cupcakes,
  },
  {
    id: 2,
    name: "Torta Customizada",
    image: Customized,
  },
];

export default featuredProducts;