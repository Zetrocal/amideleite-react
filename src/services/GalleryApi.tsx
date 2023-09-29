import { newItemsApiReponseSample } from "../data/gallery/infoGallery"

//export function getGalleryItems(pageRequest:number, filter:string){
export function getGalleryItems(filter:string){

        if(filter === "todos") return (newItemsApiReponseSample);
        else{
            let filteredItems = newItemsApiReponseSample.items.filter(element=>element.category === filter);
            let newResponse = {...newItemsApiReponseSample};
            newResponse.items = filteredItems;
            newResponse.totalItems = filteredItems.length;
            return(newResponse)
        }
}