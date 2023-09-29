import productImages, { changeSize } from "./ProductsImages";

export interface TShortApiProduct {
  id: string;
  productName: string;
  image: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface TShortApiResults {
  category: string;
  total?: number;
  products: Array<TShortApiProduct>;
}

const shortLocalCakes: TShortApiResults = {
  category: "Pasteles",
  products: [
    {
      id: "C101",
      productName: "Torta Tres Leches",
      image: changeSize(productImages.ThreeMilks.main, "medium"),
      minPrice: 90,
      maxPrice: 90,
    },
    {
      id: "C102",
      productName: "Torta Selva Negra",
      image: changeSize(productImages.BlackJungle.main, "medium"),
      minPrice: 120,
      maxPrice: 440,
    },
    {
      id: "C103",
      productName: "Torta Selva Negra clasica",
      image: changeSize(productImages.BlackJungle2.main, "medium"),
      minPrice: 120,
      maxPrice: 440,
    },
    {
      id: "C104",
      productName: "Torta Pasión por el chocolate",
      image: changeSize(productImages.ChocolatePassion.main, "medium"),
      minPrice: 120,
      maxPrice: 440,
    },
    {
      id: "C105",
      productName: "Torta Coco-Frutilla",
      image: changeSize(productImages.CocoBerry.main, "medium"),
      minPrice: 120,
      maxPrice: 440,
    },
    {
      id: "C106",
      productName: "Torta Chocolate con oro",
      image: changeSize(productImages.GoldChocolate.main, "medium"),
      minPrice: 120,
      maxPrice: 440,
    },
    {
      id: "C107",
      productName: "Torta Red Velvet",
      image: changeSize(productImages.RedVelvet.main, "medium"),
      minPrice: 120,
      maxPrice: 440,
    },
    {
      id: "C108",
      productName: "Torta Master descubierta",
      image: changeSize(productImages.Uncover.main, "medium"),
      minPrice: 120,
      maxPrice: 440,
    },
  ],
};

const shortLocalMousecakes: TShortApiResults = {
  category: "Mousecakes",
  products: [
    {
      id: "C201",
      productName: "Mouscake Moca-Chocolate",
      image: changeSize(productImages.MousecakeMoca.main, "medium"),
      minPrice: 130,
      maxPrice: 170,
    },
  ],
};

const shortLocalCupcakes: TShortApiResults = {
  category: "Cupcakes",
  products: [
    {
      id: "C301",
      productName: "Cupcakes de chocolate",
      image: changeSize(productImages.CupcakeGreen.main, "medium"),
      minPrice: 55,
      maxPrice: 100,
    },
    {
      id: "C302",
      productName: "Cupcakes de vainilla-chocolate",
      image: changeSize(productImages.CupcakePinkGreen.main, "medium"),
      minPrice: 55,
      maxPrice: 100,
    },
    {
      id: "C303",
      productName: "Cupcakes zanahoria-chocolate",
      image: changeSize(productImages.CupcakePinkWhite.main, "medium"),
      minPrice: 55,
      maxPrice: 100,
    },
  ],
};

const shortLocalCheesecakes: TShortApiResults = {
  category: "Cheesecakes",
  products: [
    {
      id: "C401",
      productName: "Cheesecake Frutilla Decor",
      image: changeSize(productImages.CheeseStrawberry.main, "medium"),
      minPrice: 135,
      maxPrice: 135,
    },
  ],
};

const shortLocalTarts: TShortApiResults = {
  category: "Tartas",
  products: [
    {
      id: "C501",
      productName: "Pie de Limón",
      image: changeSize(productImages.LemonPie.main, "medium"),
      minPrice: 75,
      maxPrice: 75,
    },
  ],
};

const shortLocalPastries: TShortApiResults = {
  category: "Bollería",
  products: [
    {
      id: "C601",
      productName: "Rollo de Queso",
      image: changeSize(productImages.CheeseRol.main, "medium"),
      minPrice: 65,
      maxPrice: 65,
    },
  ],
};



export const getProductsFromCategory = (type: string) => {
  switch (type) {
    case "cakes":
      return shortLocalCakes;
    case "mousecakes":
      return shortLocalMousecakes;
    case "cupcakes":
      return shortLocalCupcakes;
    case "cheesecakes":
      return shortLocalCheesecakes;
    case "tarts":
      return shortLocalTarts;
    case "pastries":
      return shortLocalPastries;
    default:
      return shortLocalCakes;
  }
};
