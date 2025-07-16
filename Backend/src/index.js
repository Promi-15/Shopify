import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import { connectDb } from "./config/dbConnect.js";
import authRoutes from "../src/routes/authRoute.js"
import productRoute from "./routes/productRoute.js";
 dotenv.config()

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;



connectDb()

app.use("/api/auth", authRoutes)
app.use("/api/product",productRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


