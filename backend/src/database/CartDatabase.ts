import { Cart } from "../models/types";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";

export class CartDatabase extends BaseDatabase {
    public static tableOrder = "shopper_order"
    public static tableCart  = "shopper_cart"
    public createOrder = async (cart:Cart) => {
        const products = cart.getProducts()
        await BaseDatabase.connection(CartDatabase.tableOrder).insert({id:cart.getId(), 
                                                                       costumer_name:cart.getName(),
                                                                       due_date:cart.getDate()})
        await BaseDatabase.connection(CartDatabase.tableCart).insert(products)
        for ( let count = 0 ; count < products.length ; count ++ ) {
              await BaseDatabase.connection
              .raw(`update ${ProductDatabase.tableProduct} set qty_stock = qty_stock - ${products[count].qty_product} where id = ${products[count].id_product}`)   
        }

    }

}

