import coupunDetail from "../Model/CoupunDetail.js";
export const saveOrUpdateCoupon = async (req, res) => {
  try {
    const { amount, expiry } = req.body;
    const expiresAt = expiry;
    let coupon = await coupunDetail.findOne();

    if (coupon) {
      coupon.amount = amount;
      coupon.expiresAt = expiry;
      coupon.createdAt = Date.now();
      await coupon.save();
    } else {
      coupon = new coupunDetail({ amount, expiresAt });
      await coupon.save();
    }
    res.status(200).json({ success: true, coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getCoupon = async (req, res) => {
  try {
    const coupon = await coupunDetail.findOne();

    if (!coupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found" });
    }

    res.status(200).json({ success: true, coupon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};