import productImages from "./ProductsImages";

export interface TVariant {
  variantType: string;
  variantOptions: Array<string>;
}

export interface TOffer {
  variantType?: string;
  variantName?: string;
  variantType2?: string;
  variantName2?: string;
  variantType3?: string;
  variantName3?: string;
  price: number;
  availability: "BackOrder" | "InStock" | "OutOfStock" | "Discontinued" | "InStoreOnly" | "PreOrder" | "SoldOut";
}

export interface TMainInfo {
  productId: string;
  productName: string;
  description: string;
  image: string;
  images: Array<string>;
  variants: Array<string>;
  offers: Array<TOffer>;
}

export interface TReview {
  authorId: string;
  author: string;
  email: string;
  ratingValue: number;
  comment: string;
}

export interface TAggregateRating {
  ratingValue: number;
  reviewCount: number;
  reviews: Array<TReview>;
}

export interface TDatasheet {
  [key: string]: string;
}

export interface TProductInfo {
  productId: string;
  productName: string;
  description: string;
  information: string;
  image: string;
  images: Array<string>;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  variants: Array<TVariant>;
  offers: Array<TOffer>;
  aggregateRating?: TAggregateRating;
  datasheet?: TDatasheet;
  type?: string;
}

export interface TLocalProducts {
  [key: string]: TProductInfo;
}


export function selectDescription(productState: string) {
  switch (productState) {
    case "PreOrder":
      return "Este producto necesita reservarse con 24 horas de anticipacion";
    case "InStoreOnly":
      return "Este producto solo esta disponible para consumo en tienda";
    default:
      return "";
  }
}

const localCakes: TLocalProducts = {
  C101: {
    productId: "C101",
    productName: "Torta Tres Leches",
    description: "Bizcocho de vainilla humedecido con tres presentaciones de leche",
    information: `Descripcion:
    Bizcocho de vainilla con relleno humedecido con tres presentaciones de leche, cubierto con crema de leche y espolvoreado con canela


    Entrega:
    La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.ThreeMilks.main,
    images: productImages.ThreeMilks.options,
    minPrice: 90,
    maxPrice: 90,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 90,
        availability: "PreOrder",
      },
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Leche condensada, Crema de leche, Leche evaporada, Canela, Vainilla",
    },
    type: "cakes",
  },
  C102: {
    productId: "C102",
    productName: "Torta Selva Negra",
    description: "Bizcocho de chocolate con relleno de mousse de frutilla y ganache de chocolate blanco con coco",
    information: `Descripcion:
    Bizcocho de chocolate con relleno de mousse de frutilla y ganache de chocolate blanco con coco

    Customizacion gratuita:
    El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema o chocolate

    Entrega:
    La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.BlackJungle.main,
    images: productImages.BlackJungle.options,
    minPrice: 120,
    maxPrice: 440,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones", "20 porciones", "25 porciones", "30 porciones", "40 porciones", "50 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 120,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "20 porciones",
        price: 190,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "25 porciones",
        price: 225,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "30 porciones",
        price: 265,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "40 porciones",
        price: 355,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "50 porciones",
        price: 440,
        availability: "PreOrder",
      } /*,
      {
        variantType: "tamaño",
        variantName: "porcion",
        price: 10,
        availability: "InStoreOnly",
      }*/,
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cake",
  },
  C103: {
    productId: "C103",
    productName: "Torta Selva Negra clasica",
    description: "Bizcocho de chocolate con relleno de mousse de frutilla",
    information: `Descripcion:
    Bizcocho de chocolate con relleno de mousse de frutilla con un clasico decorado

    Customizacion gratuita:
    El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema o chocolate

    Entrega:
    La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.BlackJungle2.main,
    images: productImages.BlackJungle2.options,
    minPrice: 120,
    maxPrice: 440,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones", "20 porciones", "25 porciones", "30 porciones", "40 porciones", "50 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 120,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "20 porciones",
        price: 190,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "25 porciones",
        price: 225,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "30 porciones",
        price: 265,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "40 porciones",
        price: 355,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "50 porciones",
        price: 440,
        availability: "PreOrder",
      } /*,
        {
          variantType: "tamaño",
          variantName: "porcion",
          price: 10,
          availability: "InStoreOnly",
        }*/,
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cake",
  },
  C104: {
    productId: "C104",
    productName: "Torta Pasión por el chocolate",
    description: "Bizcocho de chocolate con relleno de mousse de cafe y ganache de chocolate",
    information: `Descripcion:
    Bizcocho de chocolate con relleno de mousse de cafe y ganache de chocolate, bañado con chocolate y adornado con trozos chocolatosos

    Customizacion gratuita:
    El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema o chocolate

    Entrega:
    La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.ChocolatePassion.main,
    images: productImages.ChocolatePassion.options,
    minPrice: 120,
    maxPrice: 440,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones", "20 porciones", "25 porciones", "30 porciones", "40 porciones", "50 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 120,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "20 porciones",
        price: 190,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "25 porciones",
        price: 225,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "30 porciones",
        price: 265,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "40 porciones",
        price: 355,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "50 porciones",
        price: 440,
        availability: "PreOrder",
      } /*,
        {
          variantType: "tamaño",
          variantName: "porcion",
          price: 10,
          availability: "InStoreOnly",
        }*/,
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cake",
  },
  C105: {
    productId: "C105",
    productName: "Torta Coco-Frutilla",
    description: "Bizcocho de vainilla con relleno de mousse de frutilla y ganache de chocolate blanco con coco",
    information: `Descripcion:
    Bizcocho de vainilla con relleno de mousse de frutilla y ganache de chocolate blanco con coco

    Customizacion gratuita:
    El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema o chocolate

    Entrega:
    La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.CocoBerry.main,
    images: productImages.CocoBerry.options,
    minPrice: 120,
    maxPrice: 440,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones", "20 porciones", "25 porciones", "30 porciones", "40 porciones", "50 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 120,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "20 porciones",
        price: 190,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "25 porciones",
        price: 225,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "30 porciones",
        price: 265,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "40 porciones",
        price: 355,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "50 porciones",
        price: 440,
        availability: "PreOrder",
      } /*,
        {
          variantType: "tamaño",
          variantName: "porcion",
          price: 10,
          availability: "InStoreOnly",
        }*/,
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cake",
  },
  C106: {
    productId: "C106",
    productName: "Torta Chocolate con oro",
    description: "Bizcocho de moca con relleno de mousse de coco y ganache de chocolate blanco",
    information: `Descripcion:
    Bizcocho de moca con relleno de mousse de coco y ganache de chocolate blanco, decorado con trozos chocolatosos y papel oro comestible

    Customizacion gratuita:
    El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema o chocolate

    Entrega:
    La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.GoldChocolate.main,
    images: productImages.GoldChocolate.options,
    minPrice: 120,
    maxPrice: 440,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones", "20 porciones", "25 porciones", "30 porciones", "40 porciones", "50 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 120,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "20 porciones",
        price: 190,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "25 porciones",
        price: 225,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "30 porciones",
        price: 265,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "40 porciones",
        price: 355,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "50 porciones",
        price: 440,
        availability: "PreOrder",
      } /*,
        {
          variantType: "tamaño",
          variantName: "porcion",
          price: 10,
          availability: "InStoreOnly",
        }*/,
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cake",
  },
  C107: {
    productId: "C107",
    productName: "Torta Red Velvet",
    description: "Bizcocho de red velvet con relleno de mousse de frutilla y ganache de chocolate blanco con coco",
    information: `Descripcion:
    Bizcocho de red velvet con relleno de mousse de frutilla y ganache de chocolate blanco con coco

    Customizacion gratuita:
    El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema o chocolate

    Entrega:
    La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.RedVelvet.main,
    images: productImages.RedVelvet.options,
    minPrice: 120,
    maxPrice: 440,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones", "20 porciones", "25 porciones", "30 porciones", "40 porciones", "50 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 120,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "20 porciones",
        price: 190,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "25 porciones",
        price: 225,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "30 porciones",
        price: 265,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "40 porciones",
        price: 355,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "50 porciones",
        price: 440,
        availability: "PreOrder",
      } /*,
        {
          variantType: "tamaño",
          variantName: "porcion",
          price: 10,
          availability: "InStoreOnly",
        }*/,
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cake",
  },
  C108: {
    productId: "C108",
    productName: "Torta Master descubierta",
    description: "Bizcocho de chocolate con relleno de mousse de maracuya y ganache de moca",
    information: `Descripcion:
    Bizcocho de chocolate con relleno de mousse de maracuya y ganache de moca, con una cubierta de maracuya en el tope y envuelto en papel acetato

    Customizacion gratuita:
    El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema o chocolate

    Entrega:
    La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.Uncover.main,
    images: productImages.Uncover.options,
    minPrice: 120,
    maxPrice: 440,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones", "20 porciones", "25 porciones", "30 porciones", "40 porciones", "50 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 120,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "20 porciones",
        price: 190,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "25 porciones",
        price: 225,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "30 porciones",
        price: 265,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "40 porciones",
        price: 355,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "50 porciones",
        price: 440,
        availability: "PreOrder",
      } /*,
        {
          variantType: "tamaño",
          variantName: "porcion",
          price: 10,
          availability: "InStoreOnly",
        }*/,
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cake",
  },
};

const localMousecakes: TLocalProducts = {
  C201: {
    productId: "C201",
    productName: "Mouscake Moca-Chocolate",
    description: "Bizcocho de vainilla con mouse de moca y chocolate",
    information: `Descripcion:
      Bizcocho de vainilla con mouse de moca y chocolate
  
      Customizacion gratuita:
      El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema o chocolate
  
      Entrega:
      La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.MousecakeMoca.main,
    images: productImages.MousecakeMoca.options,
    minPrice: 130,
    maxPrice: 170,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["18 porciones", "25 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "18 porciones",
        price: 130,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "25 porciones",
        price: 170,
        availability: "PreOrder",
      }
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "MouseCake",
      "Ingredientes Principales": "Crema de leche, Moca, Chocolate",
    },
    type: "mousecakes",
  },
};

const localCupcakes: TLocalProducts = {
  C301: {
    productId: "C301",
    productName: "Cupcakes de chocolate",
    description: "Bizcocho de chocolate relleno con dulce de leche",
    information: `Descripcion:
      Bizcocho de chocolate decorado en verde con relleno de dulce de leche

      Customizacion:
      Es posible customizar la masas y colores de los cupcakes.
      para ello se debe coordinar mediante whatsapp al numero indicado al final de la pagina
  
      Entrega:
      La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.CupcakeGreen.main,
    images: productImages.CupcakeGreen.options,
    minPrice: 55,
    maxPrice: 100,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["Pack 6 cupcakes", "Pack 12 cupcakes"],
      },
      {
        variantType: "decoracion",
        variantOptions: ["Verde", "Rosa", "Blanco", "Azul", "Amarillo", "Floral"],
      }
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "Pack 6 cupcakes",
        variantType2: "decoracion",
        variantName2: "VerdeRosaBlancoAzulAmarillo",
        price: 55,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "Pack 12 cupcakes",
        variantType2: "decoracion",
        variantName2: "VerdeRosaBlancoAzulAmarillo",
        price: 100,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "Pack 6 cupcakes",
        variantType2: "decoracion",
        variantName2: "Floral",
        price: 55,
        availability: "PreOrder"
      },
      {
        variantType: "tamaño",
        variantName: "Pack 12 cupcakes",
        variantType2: "decoracion",
        variantName2: "Floral",
        price: 100,
        availability: "PreOrder"
      }
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cupcakes",
  },
  C302: {
    productId: "C302",
    productName: "Cupcakes Vainilla-Chocolate",
    description: "Bizcochos de vainilla y chocolate, decorado en verde y rosa",
    information: `
      Descripcion:
      Bizcochos de vainilla y chocolate decorado verde y rosa.

      Customizacion:
      Es posible customizar la masas de los cupcakes a moca, chocolate, vainilla, zanahoria, red velvet.
      para ello se debe coordinar mediante whatsapp al numero indicado al final de la pagina
  
      Entrega:
      La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.CupcakePinkGreen.main,
    images: productImages.CupcakePinkGreen.options,
    minPrice: 55,
    maxPrice: 100,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["Pack 6 cupcakes", "Pack 12 cupcakes"],
      },
      {
        variantType: "decoracion",
        variantOptions: ["Verde", "Rosa", "Blanco", "Azul", "Amarillo", "Floral"],
      }
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "Pack 6 cupcakes",
        variantType2: "decoracion",
        variantName2: "VerdeRosaBlancoAzulAmarillo",
        price: 55,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "Pack 12 cupcakes",
        variantType2: "decoracion",
        variantName2: "VerdeRosaBlancoAzulAmarillo",
        price: 100,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "Pack 6 cupcakes",
        variantType2: "decoracion",
        variantName2: "Floral",
        price: 55,
        availability: "PreOrder"
      },
      {
        variantType: "tamaño",
        variantName: "Pack 12 cupcakes",
        variantType2: "decoracion",
        variantName2: "Floral",
        price: 100,
        availability: "PreOrder"
      }
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cupcakes",
  },
  C303: {
    productId: "C303",
    productName: "Cupcakes Zanahoria-Chocolate",
    description: "Bizcocho de zanahoria y chocolate decorado en blanco y rosa",
    information: `
        Descripcion:
        Bizcocho de zanahoria y chocolate decorado en blanco y rosa.

        Customizacion:
        Es posible customizar la masas de los cupcakes a moca, chocolate, vainilla, zanahoria, red velvet.
        para ello se debe coordinar mediante whatsapp al numero indicado al final de la pagina
  
        Entrega:
        La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.CupcakePinkWhite.main,
    images: productImages.CupcakePinkWhite.options,
    minPrice: 55,
    maxPrice: 100,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["Pack 6 cupcakes", "Pack 12 cupcakes"],
      },
      {
        variantType: "decoracion",
        variantOptions: ["Verde", "Rosa", "Blanco", "Azul", "Amarillo", "Floral"],
      }
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "Pack 6 cupcakes",
        variantType2: "decoracion",
        variantName2: "VerdeRosaBlancoAzulAmarillo",
        price: 55,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "Pack 12 cupcakes",
        variantType2: "decoracion",
        variantName2: "VerdeRosaBlancoAzulAmarillo",
        price: 100,
        availability: "PreOrder",
      },
      {
        variantType: "tamaño",
        variantName: "Pack 6 cupcakes",
        variantType2: "decoracion",
        variantName2: "Floral",
        price: 55,
        availability: "PreOrder"
      },
      {
        variantType: "tamaño",
        variantName: "Pack 12 cupcakes",
        variantType2: "decoracion",
        variantName2: "Floral",
        price: 100,
        availability: "PreOrder"
      }
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cupcakes",
  },
};

const localCheesecakes: TLocalProducts = {
  C401: {
    productId: "C401",
    productName: "Cheesecake Frutilla Decor",
    description: "Bizcocho con un relleno cremoso hecho de queso crema con mermelada de frutilla",
    information: `Descripcion:
      Bizcocho con un relleno cremoso hecho a base queso crema, con mermelada de frutilla en la parte superior junto con algunas frutillas y decoracion en crema de leche.
  
      Customizacion gratuita:
      El mensaje escrito en el pastel es opcional y se lo realiza de manera gratuita con crema.
  
      Entrega:
      La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.CheeseStrawberry.main,
    images: productImages.CheeseStrawberry.options,
    minPrice: 135,
    maxPrice: 135,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 135,
        availability: "PreOrder",
      }
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Frutilla, Crema de leche, Vainilla",
    },
    type: "cheesecakes",
  },
};

const localTarts: TLocalProducts = {
  C501: {
    productId: "C501",
    productName: "Pie de Limón",
    description: "Base semi crujiente con crema de limon y leche",
    information: `Descripcion:
      Base crujiente a base de galletas trituradas con una crema a base de limon, decorado con crema de leche y espolvoreado con ralladura de limon
  
      Customizacion gratuita:
      El mensaje escrito en el pie es opcional y se lo realiza de manera gratuita con crema;
  
      Entrega:
      La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.LemonPie.main,
    images: productImages.LemonPie.options,
    minPrice: 75,
    maxPrice: 75,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["12 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "12 porciones",
        price: 75,
        availability: "PreOrder",
      }
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Pastel",
      "Ingredientes Principales": "Galletas maria, Harina, Limon, Crema de leche ",
    },
    type: "tarts",
  },
};

const localPastries: TLocalProducts = {
  C601: {
    productId: "C601",
    productName: "Rollo de Queso",
    description: "Dulce rollo de pastel relleno de un suave y cremoso queso.",
    information: `Descripcion:
      Dulce rollo de pastel relleno de un suave y cremoso queso.
  
  
      Entrega:
      La entrega se la realiza en la calle Tumusla entre calle Mexico y J. Reza. entrando en el pasaje municipal.`,
    image: productImages.CheeseRol.main,
    images: productImages.CheeseRol.options,
    minPrice: 38,
    maxPrice: 38,
    variants: [
      {
        variantType: "tamaño",
        variantOptions: ["10 porciones"],
      },
    ],
    offers: [
      {
        variantType: "tamaño",
        variantName: "10 porciones",
        price: 38,
        availability: "PreOrder",
      }
    ],
    aggregateRating: {
      ratingValue: 5,
      reviewCount: 2,
      reviews: [
        {
          authorId: "a-1",
          author: "Cecilia Perez",
          email: "cecilia@gmail.com",
          ratingValue: 5,
          comment: "Muy Deliciosa! recomendado",
        },
        {
          authorId: "a-2",
          author: "Jose Villanueva",
          email: "joseV@gmail.com",
          ratingValue: 5,
          comment: "",
        },
      ],
    },
    datasheet: {
      Tipo: "Bolleria",
      "Ingredientes Principales": "Masa de bolleria, Queso",
    },
    type: "pastries",
  },
};



export function getCategoryFromProduct(code:string){
  switch(code){
    case "C1":
      return localCakes;
    case "C2":
      return localMousecakes;
    case "C3":
      return localCupcakes;
    case "C4":
      return localCheesecakes;
    case "C5":
      return localTarts;
    case "C6":
      return localPastries;
    default:
      return null;
  }
}


