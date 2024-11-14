import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "../Model/AdminAuth.js";
import Customer from "../Model/CustomerAuth.js";

dotenv.config();
const secretKey = process.env.JWT_SECRET_TOKEN || "yourDefaultSecretKey";

export const registerAdmin = async (req, res) => {
  console.log("Signup running ....");
  const { name, email, password, phone } = req.body;

  try {
    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
      return res.status(401).json({
        message: "User ID already exists",
        userid: existingUser,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      name,
      email,
      password: hashedPassword,
      phone: String(phone),
    });

    await newAdmin.save();

    const token = jwt.sign(
      {
        email: newAdmin.email,
        name: newAdmin.name,
        role: newAdmin.role,
      },
      secretKey,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      message: "Admin registered successfully",
      token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error in registration", error: err });
  }
};

export const authenticateAdmin = async (req, res) => {
  console.log("Login running...");
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        userId: admin._id,
        email: admin.email,
        name: admin.name,
      },
      secretKey,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Admin login successful",
      token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error in authentication", error: err });
  }
};

export const registerCustomer = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const existingUser = await Customer.findOne({ email });

    if (existingUser) {
      return res.status(401).json({
        message: "User ID already exists",
        userid: existingUser,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCustomer = new Customer({
      name,
      email,
      password: hashedPassword,
      phone: String(phone),
    });

    await newCustomer.save();

    const token = jwt.sign(
      {
        email: newCustomer.email,
        name: newCustomer.name,
        role: newCustomer.role,
      },
      secretKey,
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      message: "Customer registered successfully",
      token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error in registration", error: err });
  }
};

export const authenticateCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isPasswordValid = await bcrypt.compare(password, customer.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        userId: customer._id,
        email: customer.email,
        name: customer.name,
      },
      secretKey,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Customer login successful",
      token,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error in authentication", error: err });
  }
};
