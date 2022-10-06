import { CartDatabase } from "../database/CartDatabase";
import { RequestError } from "../errors/RequestError";
import { UnprocessableError } from "../errors/UnprocessableError";
import { Cart, IcreateOrderDTO } from "../models/types";
import { IdGenerator } from "../services/IdGenerator";


export class CartBusiness {
    constructor (
        private cartDatabase:CartDatabase,
        private idGenerator:IdGenerator
    ) {}
        public createOrder = async (input:IcreateOrderDTO) => {
            const { name, date, products } = input
            if (!name || !date || !products) {
                throw new RequestError()
            }
            if (!Date.parse(date)) {
                throw new UnprocessableError()
            }
            const id = this.idGenerator.generate()
            const newList = products.map((item) => {
                return {id:this.idGenerator.generate(), id_product:item.id, id_order:id, qty_product:item.qty}
            })
            const newOrder = new Cart(id, name, new Date(date), newList)
            await this.cartDatabase.createOrder(newOrder)
        } 
}