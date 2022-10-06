import { Request, Response } from "express";
import { CartBusiness } from "../business/CartBusiness";
import { IcreateOrderDTO } from "../models/types";

export class CartController {
    constructor (
        private cartBusiness:CartBusiness
    ) {}
        public createOrder = async (req:Request, res:Response) => {
            try {
                const input:IcreateOrderDTO = {
                    name:req.body.name,
                    date:req.body.date,
                    products:req.body.products
                }
                await this.cartBusiness.createOrder(input)
                res.status(201).send({message: "Pedido realizado com sucesso"})
            }
            catch (err:any) {
                res.status(404).send({message: "Verifique se todos os campos foram preenchidos."})
            }
        }

}