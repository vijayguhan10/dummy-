import express from "express";
import {
  addToHistory,
  addToWishlist,
  getHistory,
  getWishlist,
} from "../Controller/CustomerController.js";

const CustomerRouter = express.Router();

CustomerRouter.post("/history", addToHistory);
CustomerRouter.post("/wishlist", addToWishlist);
CustomerRouter.get("/history", getHistory);
CustomerRouter.get("/wishlist", getWishlist);
export default CustomerRouter;
