import express from "express"
import mongoose from "mongoose"
import { createProduct ,deleteProduct,getProducts, updateProduct } from "../controller/productControllers.js"
import { verifyToken } from "../middlewares/authMiddlewares.js"



const router = express.Router()

router.post("/",verifyToken, createProduct)
router.get("/", getProducts)
router.patch("/:id", updateProduct)
router.delete("/id",deleteProduct)


export default router