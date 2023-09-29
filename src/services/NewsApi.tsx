import { TNewsItemsApi, newItemsApiReponseSample } from "../data/news/NewsItems";


//export function getNewsItems(pageRequest:number, filter:string){
export function getNewsItems(filter:string){
    
    return new Promise<TNewsItemsApi>((resolve) => {
        if(filter === "todos") resolve(newItemsApiReponseSample);
        else{
            let filteredItems = newItemsApiReponseSample.items.filter(element=>element.category === filter);
            let newResponse = {...newItemsApiReponseSample};
            newResponse.items = filteredItems;
            newResponse.totalItems = filteredItems.length;
            resolve(newResponse)
        }
    })
}