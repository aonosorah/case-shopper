import { Router } from "express"
import { CartBusiness } from "../business/CartBusiness"
import { CartController } from "../controller/CartController"
import { CartDatabase } from "../database/CartDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const CartRouter = Router()
    const cartController = new CartController(
        new CartBusiness(new CartDatabase(), new IdGenerator())
    )
    CartRouter.post("/create", cartController.createOrder)

