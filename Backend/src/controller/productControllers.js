import mongoose from "mongoose";
import Product from "../models/productModels.js";

export const getProducts = async (req, res) => {
  try {
    // const {offset=0,limit=30} = req.body;
    const products = await Product.find({});

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

export const createProduct = async (req, res) => {
 
    const {
      name,
      image = "https://tse3.mm.bing.net/th/id/OIP.cMI8dMQqOLARcbHnNJFlLAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      price,
      category,
      subcategory,
      description,
    } = req.body;
    if (
      !name ||
      !image ||
      !price ||
      !category ||
      !subcategory ||
      !description
    ) {
      return res
        .status(400)
        .json({ success: false, message: "please Provide all fields" });
    }
    const newProduct = new Product({
      name,
      image,
      price,
      category,
      subcategory,
      description,
      user : req.user.id
    });
    try {
      await newProduct.save();
      res.status(201).json({ success: true, data: newProduct , message : "added successfully" });
    } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" })
    }
  
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid id" });
  }
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updateProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server Error" });
  }
};


export const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        // await Product.findByIdAndDelete(id)
        const product = await Product.findById(id)
        if (!product) {
            res.status(404).json({success : false , message : "Product not found"})
        }
        await Product.deleteOne(id)
        res.status(200).json({success : true , message : "Products deleted"})
    } catch (error) {
        res.status(500).json({success : false , message : " server error "})
    }
}