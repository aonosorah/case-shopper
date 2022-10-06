import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";


export class ProductController {
    constructor (
        private productBusiness:ProductBusiness
    ) {}
    public getProduct =async(req:Request, res:Response) => {
        try {
            const result = await this.productBusiness.getProduct()
            res.status(200).send({message: "Produtos sendo exibidos", products:result})
        }
        catch (err:any) {
            res.status(404).send({message: "Algo deu errado no meio do caminho"})
        }
    }
}