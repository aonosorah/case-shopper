import { ProductDatabase } from "../database/ProductDatabase";


export class ProductBusiness {
    constructor (
        private productDatabase:ProductDatabase,
    ) {}
    public getProduct = async () => {
        const result = await this.productDatabase.getProducts()
        return result
    }
}