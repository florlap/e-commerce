const {Router}= require('express')
const router = Router();

const {productsRouter}= require("./productsRoute")

router.use("/products", productsRouter)

module.exports =router;