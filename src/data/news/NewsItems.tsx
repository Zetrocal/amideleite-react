import MilkRice from "../../assets/images/News/Blogs/ArrozConLeche/big.jpg";

export interface TBasicNew {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "avisos" | "blogs" | "eventos";
}

export const sampleNews: Array<TBasicNew> = [
	{
		id: "new2",
		title: "Receta arroz con leche",
		description:
			`Si hay un postre clásico y reconfortante que evoca recuerdos de la infancia, es el arroz con leche. Este delicioso y cremoso postre, con su sabor dulce y especiado, es un favorito en muchas culturas de todo el mundo. En este blog, te compartiremos una receta tradicional de arroz con leche.
            
            Ingredientes:

            1 taza de arroz de grano corto
            4 tazas de leche entera
            1 rama de canela
            1 tira de cáscara de limón (sin la parte blanca)
            1/2 taza de azúcar (ajusta al gusto)
            Una pizca de sal
            Canela en polvo para espolvorear (opcional)

            Instrucciones:

            1.- Enjuaga el arroz bajo agua fría para eliminar el exceso de almidón. Escúrrelo bien.

            2.- En una olla grande, agrega el arroz, la canela en rama y la tira de cáscara de limón. Cubre con agua y lleva a ebullición. Cocina durante unos 5 minutos. Esto ayuda a ablandar el arroz y a eliminar el almidón.

            3.- Escurre el arroz y descarta el agua, la canela y la cáscara de limón.

            4.- Agrega la leche a la olla junto con el arroz precocido. Añade una pizca de sal. Lleva la mezcla a ebullición a fuego medio-alto, revolviendo constantemente para evitar que el arroz se pegue al fondo.

            5.- Una vez que la mezcla esté hirviendo, reduce el fuego a bajo y cocina a fuego lento. Remueve con frecuencia para evitar que el arroz se pegue y la leche se queme en el fondo. Cocina durante aproximadamente 25-30 minutos o hasta que el arroz esté tierno y haya absorbido gran parte de la leche.

            6.- Agrega el azúcar y sigue cocinando durante otros 10-15 minutos, revolviendo regularmente, hasta que el arroz esté bien cocido y la mezcla tenga una textura cremosa.

            7.- Una vez que el arroz esté cocido y la mezcla tenga la consistencia deseada, retira la canela y la cáscara de limón.

            8.- Deja enfriar el arroz con leche a temperatura ambiente y luego refrigéralo durante al menos 2 horas antes de servir.

            9.- Sirve el arroz con leche en tazones individuales. Espolvorea canela en polvo por encima si lo deseas.

            ¡Disfruta de tu delicioso arroz con leche! Puedes comerlo frío o a temperatura ambiente, según tus preferencias.
            `,
		image: MilkRice,
		category: "blogs",
	}
];

export interface TNewsItemsApi {
	section: string;
	categories: Array<string>;
	categorySelected: string;
	totalItems: number;
	itemsPerRequest: number;
	pageNumber: number;
	totalPages: number;
	items: Array<TBasicNew>;
}
export const newItemsApiReponseSample: TNewsItemsApi = {
	section: "news",
	categories: ["avisos", "blogs", "eventos"],
	categorySelected: "todos",
	itemsPerRequest: 50,
	totalItems: sampleNews.length,
	pageNumber: 1,
	totalPages: 1,
	items: sampleNews,
};
