import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Router/Authentication.js";
import ProductRouter from "./Router/Products.js";
import CustomerRouter from "./Router/Customer.js";
import CoupunDetail from "./Router/CoupunDetail.js";
import ClientCoupun from "./Router/ClientCoupun.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGODB_URI;
console.log("MongoDB URI:", mongoURI);
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
app.use("/api/sokkai", router);
app.use("/api/sokkai", ProductRouter);
app.use("/api/sokkai", CustomerRouter);
app.use("/api/sokkai/coupun", CoupunDetail);
app.use("/api/sokkai/coupun/client", ClientCoupun);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
