import Coupon from "../Model/Coupun.js";
import couponCode from "coupon-code";
import coupunDetail from "../Model/CoupunDetail.js";
export const createCoupon = async (req, res) => {
  try {
    console.log("Coupon is being created...");

    let code;
    let couponExists = true;
    while (couponExists) {
      code = couponCode.generate();
      const existingCoupon = await Coupon.findOne({ code });

      if (!existingCoupon) {
        couponExists = false;
      }
    }

    const detail = await coupunDetail.findOne({});
    if (!detail) {
      return res
        .status(404)
        .json({ success: false, message: "CoupunDetail not found" });
    }

    const { amount, expiresAt } = detail;
    console.log("Coupon data from coupundetail: ", detail);
    const Expires_Date = new Date(Date.now() + expiresAt * 24 * 60 * 60 * 1000);
    const coupon = new Coupon({
      code,
      amount: amount,
      expiresAt: Expires_Date,
    });

    await coupon.save();

    res.status(201).json({ success: true, coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const checkCoupon = async (req, res) => {
  try {
    const { code } = req.query.body;
    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found" });
    }

    if (coupon.expiresAt < Date.now()) {
      coupon.status = "expired";
      await coupon.save();
      return res
        .status(400)
        .json({ success: false, message: "Coupon has expired" });
    }

    res.status(200).json({ success: true, coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const redeemCoupon = async (req, res) => {
  try {
    const { code } = req.query.body;
    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found" });
    }
    if (coupon.expiresAt < Date.now()) {
      coupon.status = "expired";
      await coupon.save();
      return res
        .status(400)
        .json({ success: false, message: "Coupon has expired" });
    }
    if (coupon.status === "availed") {
      return res
        .status(400)
        .json({ success: false, message: "Coupon already redeemed" });
    }

    coupon.status = "availed";
    await coupon.save();

    res.status(200).json({ success: true, coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
