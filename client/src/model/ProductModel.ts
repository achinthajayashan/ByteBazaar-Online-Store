import {CategoryModel} from "./CategoryModel";
export interface ProductModel {
    id: number,
    name: string,
    price: number,
    currency: string,
    category:string
}
