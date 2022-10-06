import { BaseDatabase } from "./BaseDatabase"

export class ProductDatabase extends BaseDatabase {
    public static tableProduct = "shopper_product"
    public getProducts = async () => {
        const products = await BaseDatabase.connection(ProductDatabase.tableProduct)
                                           .select(`*`)
                return products
    }
}