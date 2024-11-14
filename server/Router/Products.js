import express from "express";
import {
  addProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from "../Controller/ProductController.js";

const router = express.Router();

router.post("/products", addProduct); 
router.get("/products", getAllProducts);
router.get("/productsid", getProductById);
router.put("/products/:id", updateProduct); 
router.delete("/products/:id", deleteProduct); 

export default router;
