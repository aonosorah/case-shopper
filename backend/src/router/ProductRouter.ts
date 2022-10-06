import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";


export const ProductRouter = Router()
    const productController = new ProductController (
        new ProductBusiness( new ProductDatabase() )
    )
ProductRouter.get("/", productController.getProduct)