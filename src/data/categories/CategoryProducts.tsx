let CakeImage = "Products/Cakes/GoldChocolate/1/medium.jpg";
let MouseCakesImage = "Products/MouseCakes/Moca/1/medium.jpg";
let CupcakesImage = "Products/CupCakes/PinkGreen/1/medium.jpg";
let CheeseCakesImage = "Products/CheeseCakes/Strawberry/1/medium.jpg";
let TartsImage = "Products/Tarts/LemonPie/1/medium.jpg";
let PastriesImage = "Products/Pastries/CheeseRol/1/medium.jpg";
let SpecialsImage = "Products/Specials/VioletButterfly/medium.jpg";
//let SeasonImage = "Products/Season/Mother1/Cupcake/big.jpg"

export const categories = [
  {
    title: "Pasteles",
    image: CakeImage,
    linkTo: "/Cakes",
  },
  {
    title: "Mousecakes",
    image: MouseCakesImage,
    linkTo: "/Mousecakes",
  },
  {
    title: "Cupcakes",
    image: CupcakesImage,
    linkTo: "/Cupcakes",
  },
  {
    title: "Cheesecakes",
    image: CheeseCakesImage,
    linkTo: "/Cheesecakes",
  },
  {
    title: "Tartas",
    image: TartsImage,
    linkTo: "/Tarts",
  },
  {
    title: "Bolleria",
    image: PastriesImage,
    linkTo: "/Pastries",
  },
  {
    title: "Pedido\nEspecial",
    image: SpecialsImage,
    linkTo: "/Specials",
  } /*
    {
        title: "Temporada",
        image: SeasonImage,
        linkTo: "/Season"
    }*/,
];

export function selectTitle(type: string) {
  switch (type) {
    case "cakes":
      return "Pasteles";
    case "mousecakes":
      return "Mousecakes";
    case "cupcakes":
      return "Cupcakes";
    case "cheesecakes":
      return "Cheesecakes";
    case "tarts":
      return "Tartas";
    case "pastries":
      return "Bolleria";
    case "specials":
      return "Especiales";
    case "season":
      return "Temporada";
    default:
      return "Error";
  }
}
