import Customer from "../Model/Customer.js";
import Product from "../Model/Product.js";
const createCustomerIfNotExists = async (customer_id) => {
  let customer = await Customer.findOne({ customer_id });
  if (!customer) {
    customer = new Customer({ customer_id });
    await customer.save();
  }
  return customer;
};

export const addToHistory = async (req, res) => {
  const { customer_id, productId, quantity, priceAtPurchase } = req.body;

  try {
    const customer = await createCustomerIfNotExists(customer_id);

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    customer.history.push({
      product: product._id,
      purchasedAt: new Date(),
      quantity,
      priceAtPurchase,
    });

    await customer.save();

    return res.status(200).json({
      message: "Product added to history successfully",
      history: customer.history,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error adding to history", error: err });
  }
};
export const addToWishlist = async (req, res) => {
  const { customer_id, productId } = req.body;

  try {
    const customer = await createCustomerIfNotExists(customer_id);

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    customer.wishlist.push({
      product: product._id,
      addedAt: new Date(),
    });

    await customer.save();

    return res.status(200).json({
      message: "Product added to wishlist successfully",
      wishlist: customer.wishlist,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error adding to wishlist", error: err });
  }
};

export const getHistory = async (req, res) => {
  const { customer_id } = req.query;

  try {
    const customer = await Customer.findOne({ customer_id }).populate(
      "history.product"
    );
    if (!customer) {
      return res
        .status(404)
        .json({ message: "Customer not found. Please register." });
    }

    return res.status(200).json({
      message: "Customer history retrieved successfully",
      history: customer.history,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error retrieving history", error: err });
  }
};

export const getWishlist = async (req, res) => {
  const { customer_id } = req.query;

  try {
    const customer = await Customer.findOne({ customer_id }).populate(
      "wishlist.product"
    );
    if (!customer) {
      return res
        .status(404)
        .json({ message: "Customer not found. Please register." });
    }

    return res.status(200).json({
      message: "Customer wishlist retrieved successfully",
      wishlist: customer.wishlist,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error retrieving wishlist", error: err });
  }
};
