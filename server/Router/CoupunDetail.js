import express from "express";
import {
  getCoupon,
  saveOrUpdateCoupon,
} from "../Controller/CoupunDetailController.js";
const CoupunDetail = express.Router();
CoupunDetail.post("/save", saveOrUpdateCoupon);
CoupunDetail.get("/", getCoupon);

export default CoupunDetail;
