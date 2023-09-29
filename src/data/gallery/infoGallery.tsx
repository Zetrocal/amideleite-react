// Pasteleria
let AndinaBig = "Products/Bakery/Andina/big.jpg";
let Andina = "Products/Bakery/Andina/original.jpg";
let ChocolateBerryBig = "Products/Bakery/ChocolateBerry/big.jpg";
let ChocolateBerry = "Products/Bakery/ChocolateBerry/original.jpg";
let DripChocolateBig = "Products/Bakery/DripChocolate/big.jpg";
let DripChocolate = "Products/Bakery/DripChocolate/original.jpg";
let ElephantBig = "Products/Bakery/Elephant/big.jpg";
let Elephant = "Products/Bakery/Elephant/original.jpg";
let LionBig = "Products/Bakery/Lion/big.jpg";
let Lion = "Products/Bakery/Lion/original.jpg";
let LittleGuyBig = "Products/Bakery/LittleGuy/big.jpg";
let LittleGuy = "Products/Bakery/LittleGuy/original.jpg";
let RockBig = "Products/Bakery/Rock/big.jpg";
let Rock = "Products/Bakery/Rock/original.jpg";

//Especiales
let BaptismBoxBig = "Products/Specials/BaptismBox/big.jpg";
let BaptismBox = "Products/Specials/BaptismBox/original.jpg";
let BaptismCakeBig = "Products/Specials/BaptismCake/big.jpg";
let BaptismCake = "Products/Specials/BaptismCake/original.jpg";
let CorpseBrideBig = "Products/Specials/CorpseBride/big.jpg";
let CorpseBride = "Products/Specials/CorpseBride/original.jpg";
let DinnosaurBig = "Products/Specials/Dinnosaur/big.jpg";
let Dinnosaur = "Products/Specials/Dinnosaur/original.jpg";
let LittlePonyBig = "Products/Specials/LittlePony/big.jpg";
let LittlePony = "Products/Specials/LittlePony/original.jpg";
let MinyDinasourBig = "Products/Specials/MinyDinasour/big.png";
let MinyDinasour = "Products/Specials/MinyDinasour/original.png";
let PinkButterflyBig = "Products/Specials/PinkButterfly/big.jpg";
let PinkButterfly = "Products/Specials/PinkButterfly/original.jpg";
let VioletButterflyBig = "Products/Specials/VioletButterfly/big.png";
let VioletButterfly = "Products/Specials/VioletButterfly/original.png";
let WeddingBig = "Products/Specials/Wedding/big.jpg";
let Wedding = "Products/Specials/Wedding/original.jpg";
let ZodiacKnightsBig = "Products/Specials/ZodiacKnights/big.jpg";
let ZodiacKnights = "Products/Specials/ZodiacKnights/original.jpg";

//De Temporada
let ChocoPudinBig = "Products/Season/Christmas/ChocoPudin/1/big.jpg";
let ChocoPudin = "Products/Season/Christmas/ChocoPudin/1/original.jpg";
let ClasicPudinBig = "Products/Season/Christmas/ClasicPudin/1/big.jpg";
let ClasicPudin = "Products/Season/Christmas/ClasicPudin/1/original.jpg";
let ChristmasPackBig = "Products/Season/Christmas/Pack/big.jpg";
let ChristmasPack = "Products/Season/Christmas/Pack/original.jpg";
let Father1PackBig = "Products/Season/Father1/Pack/big.png";
let Father1Pack = "Products/Season/Father1/Pack/original.png";
let MotherCakeBig = "Products/Season/Mother1/Cake/big.jpg";
let MotherCake = "Products/Season/Mother1/Cake/original.jpg";
let MotherCupcakeBig = "Products/Season/Mother1/Cupcake/big.jpg";
let MotherCupcake = "Products/Season/Mother1/Cupcake/original.jpg";

export interface TImageGallery {
	id: string;
	name: string;
	smallImage: string;
	mainImage: string;
	category: string;
}

interface TImageInfo{
    category: string,
    imagesInfo: Array<any>
}

function addFormatedImages(currentList:Array<TImageGallery>, imageInfo:TImageInfo){
    const initialIndex = currentList.length;
    const mappedImages = imageInfo.imagesInfo.map((element, index) => {
        let currentIndex = initialIndex + index + 1;
        return {
            id: "gallery-image-"+ currentIndex,
            name: element[2],
            smallImage: element[0],
            mainImage: element[1],
            category: imageInfo.category,
        }
    })
    
    const initialList = [...currentList];
    return initialList.concat(mappedImages)

}


const pasteleriaImages = {
	category: "pasteleria",
	imagesInfo: [
		[AndinaBig, Andina, "Andina"],
		[ChocolateBerryBig, ChocolateBerry, "ChocolateBerry"],
		[DripChocolateBig, DripChocolate, "DripChocolate"],
		[ElephantBig, Elephant, "Elephant"],
		[LionBig, Lion, "Lion"],
		[LittleGuyBig, LittleGuy, "LittleGuy"],
		[RockBig, Rock, "Rock"],
	],
};

const especialesImages = {
	category: "especiales",
	imagesInfo: [
		[BaptismBoxBig, BaptismBox, "BaptismBox"],
		[BaptismCakeBig, BaptismCake, "BaptismCake"],
		[CorpseBrideBig, CorpseBride, "CorpseBride"],
		[DinnosaurBig, Dinnosaur, "Dinnosaur"],
		[LittlePonyBig, LittlePony, "LittlePony"],
		[MinyDinasourBig, MinyDinasour, "MinyDinasour"],
		[PinkButterflyBig, PinkButterfly, "PinkButterfly"],
		[VioletButterflyBig, VioletButterfly, "VioletButterfly"],
		[WeddingBig, Wedding, "Wedding"],
		[ZodiacKnightsBig, ZodiacKnights, "ZodiacKnights"],
	],
};

const temporadaImages = {
	category: "temporada",
	imagesInfo: [
		[ChocoPudinBig, ChocoPudin, "ChocoPudin"],
		[ClasicPudinBig, ClasicPudin, "ClasicPudin"],
		[ChristmasPackBig, ChristmasPack, "ChristmasPack"],
		[Father1PackBig, Father1Pack, "Father1Pack"],
		[MotherCakeBig, MotherCake, "MotherCake"],
		[MotherCupcakeBig, MotherCupcake, "MotherCupcakeBig"],
	],
};

let sampeGalleryItems: Array<TImageGallery> = [];
sampeGalleryItems = addFormatedImages(sampeGalleryItems, pasteleriaImages);
sampeGalleryItems = addFormatedImages(sampeGalleryItems, especialesImages);
sampeGalleryItems = addFormatedImages(sampeGalleryItems, temporadaImages);

export interface TGalleryItemsApi {
	section: string;
	categories: Array<string>;
	categorySelected: string;
	totalItems: number;
	itemsPerRequest: number;
	pageNumber: number;
	totalPages: number;
	items: Array<TImageGallery>;
}
export const newItemsApiReponseSample: TGalleryItemsApi = {
	section: "gallery",
	categories: ["pasteleria", "especiales", "temporada"],
	categorySelected: "todos",
	itemsPerRequest: 50,
	totalItems: sampeGalleryItems.length,
	pageNumber: 1,
	totalPages: 1,
	items: sampeGalleryItems,
};
