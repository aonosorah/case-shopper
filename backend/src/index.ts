import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { CartRouter } from './router/CartRouter'
import { ProductRouter } from './router/ProductRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/order", CartRouter )
app.use("/products", ProductRouter)