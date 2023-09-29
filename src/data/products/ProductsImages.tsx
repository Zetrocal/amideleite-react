//cakes
let ThreeMilksBig = '../Products/Cakes/3Milks/1/big.jpg';
let BlackJungleBig = '../Products/Cakes/BlackJungle/1/big.jpg';
let BlackJungle2Big = '../Products/Cakes/BlackJungle2/1/big.jpg';
let ChocolatePassionBig = '../Products/Cakes/ChocolatePassion/1/big.jpg';
let CocoBerryBig = '../Products/Cakes/CocoBerry/1/big.jpg';
let GoldChocolateBig = '../Products/Cakes/GoldChocolate/1/big.jpg';
let RedVelvetBig = '../Products/Cakes/RedVelvet/1/big.jpg';
let UncoverBig = '../Products/Cakes/Uncover/1/big.jpg';

//cheesecakes
let CheeseStrawberryBig = '../Products/CheeseCakes/Strawberry/1/big.jpg';

//cupcakes
let CupcakeGreenBig = '../Products/CupCakes/Green/1/big.jpg';
let CupcakePinkGreenBig = '../Products/CupCakes/PinkGreen/1/big.jpg';
let CupcakePinkWhiteBig = '../Products/CupCakes/PinkWhite/1/big.jpg';

//mousecakes
let MousecakeMocaBig = '../Products/MouseCakes/Moca/1/big.jpg';

//pastries
let CheeseRolBig = '../Products/Pastries/CheeseRol/1/big.jpg';

//Tarts
let LemonPieBig = '../Products/Tarts/LemonPie/1/big.jpg';



export const changeSizeOption = (urlPath: string, option:number, size:string) => {
    const productImageMatch = urlPath.match(/\/\d+\/\w+\.\w+$/);
    if(productImageMatch && productImageMatch.length){
        let currentExtension = productImageMatch[0].split(".").pop();
        let pathUpdated = urlPath.replace(productImageMatch[0], `/${option}/${size}.${currentExtension}`)
        return pathUpdated;
    }
    return urlPath;
}

export const changeSize = (urlPath: string, size:string) => {
    const productImageMatch = urlPath.match(/\/\d+\/\w+\.\w+$/);
    if(productImageMatch && productImageMatch.length){
        let currentOption = productImageMatch[0].split("/")[1];
        let currentExtension = productImageMatch[0].split(".").pop();
        let pathUpdated = urlPath.replace(productImageMatch[0], `/${currentOption}/${size}.${currentExtension}`)
        return pathUpdated;
    }
    return urlPath;
}

export const changeOption = (urlPath: string, option:number) => {
    const productImageMatch = urlPath.match(/\/\d+\/\w+\.\w+$/);
    if(productImageMatch && productImageMatch.length){
        let currentSizePath = productImageMatch[0].split("/").pop();
        let [currentSize, currentExtension] = currentSizePath? currentSizePath.split("."): ["big", "jpg"];
        let pathUpdated = urlPath.replace(productImageMatch[0], `/${option}/${currentSize}.${currentExtension}`)
        return pathUpdated;
    }
    return urlPath;
}


let productImages = {
    ThreeMilks:{
        main: ThreeMilksBig,
        options: [
            changeSize(ThreeMilksBig, "thumb"),
            changeSizeOption(ThreeMilksBig, 2,"thumb"),
            changeSizeOption(ThreeMilksBig, 3,"thumb"),
        ]
    },
    BlackJungle:{
        main: BlackJungleBig,
        options: [
            changeSize(BlackJungleBig, "thumb"),
            changeSizeOption(BlackJungleBig, 2,"thumb"),
        ]
    },
    BlackJungle2:{
        main: BlackJungle2Big,
        options: [
            changeSize(BlackJungle2Big, "thumb"),
            changeSizeOption(BlackJungle2Big, 2,"thumb"),
            changeSizeOption(BlackJungle2Big, 3,"thumb"),
        ]
    },
    ChocolatePassion:{
        main: ChocolatePassionBig,
        options: [
            changeSize(ChocolatePassionBig, "thumb"),
            changeSizeOption(ChocolatePassionBig, 2,"thumb"),
        ]
    },
    CocoBerry:{
        main: CocoBerryBig,
        options: [
            changeSize(CocoBerryBig, "thumb"),
            changeSizeOption(CocoBerryBig, 2,"thumb"),
            changeSizeOption(CocoBerryBig, 3,"thumb"),
        ]
    },
    GoldChocolate:{
        main: GoldChocolateBig,
        options: [
            changeSize(GoldChocolateBig, "thumb"),
        ]
    },
    RedVelvet:{
        main: RedVelvetBig,
        options: [
            changeSize(RedVelvetBig, "thumb"),
        ]
    },
    Uncover:{
        main: UncoverBig,
        options: [
            changeSize(UncoverBig, "thumb"),
            changeSizeOption(UncoverBig, 2,"thumb"),
            changeSizeOption(UncoverBig, 3,"thumb"),
        ]
    },
    CheeseStrawberry:{
        main: CheeseStrawberryBig,
        options: [
            changeSize(CheeseStrawberryBig, "thumb"),
        ]
    },
    CupcakeGreen:{
        main: CupcakeGreenBig,
        options: [
            changeSize(CupcakeGreenBig, "thumb"),
            changeSizeOption(CupcakeGreenBig, 2,"thumb"),
            changeSizeOption(CupcakeGreenBig, 3,"thumb"),
        ]
    },
    CupcakePinkGreen:{
        main: CupcakePinkGreenBig,
        options: [
            changeSize(CupcakePinkGreenBig, "thumb"),
            changeSizeOption(CupcakePinkGreenBig, 2,"thumb"),
            changeSizeOption(CupcakePinkGreenBig, 3,"thumb"),
        ]
    },
    CupcakePinkWhite:{
        main: CupcakePinkWhiteBig,
        options: [
            changeSize(CupcakePinkWhiteBig, "thumb"),
            changeSizeOption(CupcakePinkWhiteBig, 2,"thumb"),
            changeSizeOption(CupcakePinkWhiteBig, 3,"thumb"),
        ]
    },
    MousecakeMoca:{
        main: MousecakeMocaBig,
        options: [
            changeSize(MousecakeMocaBig, "thumb"),
        ]
    },
    CheeseRol:{
        main: CheeseRolBig,
        options: [
            changeSize(CheeseRolBig, "thumb"),
            changeSizeOption(CheeseRolBig, 2,"thumb"),
            changeSizeOption(CheeseRolBig, 3,"thumb"),
        ]
    },
    LemonPie:{
        main: LemonPieBig,
        options: [
            changeSize(LemonPieBig, "thumb"),
            changeSizeOption(LemonPieBig, 2,"thumb"),
        ]
    }
}

/* let productImages = {

    BlackJungle2:{
        main: BlackJungle2Big,
        options: [
            changeSize(BlackJungle2Big, "thumb"),
            changeSizeOption(BlackJungle2Big, 2,"thumb"),
            changeSizeOption(BlackJungle2Big, 3,"thumb"),
        ]
    },
    ChocolatePassion:{
        main: ChocolatePassionBig,
        options: [
            changeSize(ChocolatePassionBig, "thumb"),
            changeSizeOption(ChocolatePassionBig, 2,"thumb"),
        ]
    },
    CocoBerry:{
        main: CocoBerryBig,
        options: [
            changeSize(CocoBerryBig, "thumb"),
            changeSizeOption(CocoBerryBig, 2,"thumb"),
            changeSizeOption(CocoBerryBig, 3,"thumb"),
        ]
    },
    GoldChocolate:{
        main: GoldChocolateBig,
        options: [
            changeSize(GoldChocolateBig, "thumb"),
        ]
    },
    RedVelvet:{
        main: RedVelvetBig,
        options: [
            changeSize(RedVelvetBig, "thumb"),
        ]
    },
    Uncover:{
        main: UncoverBig,
        options: [
            changeSize(UncoverBig, "thumb"),
            changeSizeOption(UncoverBig, 2,"thumb"),
            changeSizeOption(UncoverBig, 3,"thumb"),
        ]
    },
    CheeseStrawberry:{
        main: CheeseStrawberryBig,
        options: [
            changeSize(CheeseStrawberryBig, "thumb"),
        ]
    },
    CupcakeGreen:{
        main: CupcakeGreenBig,
        options: [
            changeSize(CupcakeGreenBig, "thumb"),
            changeSizeOption(CupcakeGreenBig, 2,"thumb"),
            changeSizeOption(CupcakeGreenBig, 3,"thumb"),
        ]
    },
    CupcakePinkGreen:{
        main: CupcakePinkGreenBig,
        options: [
            changeSize(CupcakePinkGreenBig, "thumb"),
            changeSizeOption(CupcakePinkGreenBig, 2,"thumb"),
            changeSizeOption(CupcakePinkGreenBig, 3,"thumb"),
        ]
    },
    CupcakePinkWhite:{
        main: CupcakePinkWhiteBig,
        options: [
            changeSize(CupcakePinkWhiteBig, "thumb"),
            changeSizeOption(CupcakePinkWhiteBig, 2,"thumb"),
            changeSizeOption(CupcakePinkWhiteBig, 3,"thumb"),
        ]
    },
    MousecakeMoca:{
        main: MousecakeMocaBig,
        options: [
            changeSize(MousecakeMocaBig, "thumb"),
        ]
    },
    CheeseRol:{
        main: CheeseRolBig,
        options: [
            changeSize(CheeseRolBig, "thumb"),
            changeSizeOption(CheeseRolBig, 2,"thumb"),
            changeSizeOption(CheeseRolBig, 3,"thumb"),
        ]
    },
    LemonPie:{
        main: LemonPieBig,
        options: [
            changeSize(LemonPieBig, "thumb"),
            changeSizeOption(LemonPieBig, 2,"thumb"),
        ]
    }
} */

export default productImages;