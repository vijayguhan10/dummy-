import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["expired", "pending", "availed"],
    default: "pending",
  },
  amount: {
    type: Number,
  },
});

const coupun = mongoose.model("Coupon", couponSchema);
export default coupun;
