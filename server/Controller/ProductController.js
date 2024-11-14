import Product from "../Model/Product.js";
import multer from "multer";

const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const mimeType = fileTypes.test(file.mimetype);
  const extname = fileTypes.test(file.originalname.toLowerCase());

  if (mimeType && extname) {
    return cb(null, true);
  }
  return cb(
    new Error("Invalid file type. Only JPG, JPEG, PNG are allowed."),
    false
  );
};

const upload = multer({ storage, fileFilter });

export const addProduct = [
  upload.array("images", 5),
  async (req, res) => {
    try {
      const { name, description, price, category, stock, brand } = req.body;
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files were uploaded" });
      }
      const images = req.files.map((file) => ({
        data: file.buffer,
        contentType: file.mimetype,
        alt: name,
      }));

      const newProduct = new Product({
        name,
        description,
        price,
        category,
        stock,
        brand,
        images,
      });

      const savedProduct = await newProduct.save();
      return res.status(201).json(savedProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: error.message });
    }
  },
];
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.query.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const productWithImages = product.toObject();
    productWithImages.images = productWithImages.images.map((image) => {
      return {
        ...image,
        data: image.data.toString("base64"),
      };
    });

    return res.json(productWithImages);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productsWithImages = products.map((product) => {
      const productWithImages = product.toObject();
      productWithImages.images = productWithImages.images.map((image) => {
        return {
          ...image,
          data: image.data.toString("base64"),
        };
      });
      return productWithImages;
    });

    return res.json(productsWithImages);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ error: "Product not found" });
    return res.json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ error: "Product not found" });
    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
