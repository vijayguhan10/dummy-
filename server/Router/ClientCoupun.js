import express from "express";
import { createCoupon,checkCoupon,redeemCoupon } from "../Controller/CoupunController.js";
const ClientCoupun = express.Router();
ClientCoupun.post("/create", createCoupon);
ClientCoupun.get("/check", checkCoupon);
ClientCoupun.post("/redeem", redeemCoupon);
export default ClientCoupun;
