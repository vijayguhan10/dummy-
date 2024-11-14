import express from "express";
import {
  registerAdmin,
  authenticateAdmin,
  registerCustomer,
  authenticateCustomer,
} from "./../Controller/AuthController.js";
const router = express.Router();

router.post("/admin/signup", registerAdmin);
router.post("/admin/login", authenticateAdmin);
router.post("/customer/signup", registerCustomer);
router.post("/customer/login", authenticateCustomer);

export default router;
