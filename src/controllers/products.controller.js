// controllers/products.controller.js
const Product = require('../models/products.model');

// Create a new product
const createProductHandler = async (req, res) => {
  try {
    const productData = req.body;

    // Create new product using the Product model
    const product = new Product(productData);
    await product.save();

    res.status(201).json({
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Get all products
const getAllProductsHandler = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Get a product by ID
const getProductByIdHandler = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Update a product
const updateProductHandler = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Product updated successfully',
      updatedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Delete a product
const deleteProductHandler = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
      message: 'Product deleted successfully',
      deletedProduct,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Get products by category
const getProductByCategoryHandler = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
const sortProductsHandler = async (req, res) => {
  const sortedProducts = req.body.products; // Products array with the new sorted order

  try {
    // Use Promise.all to handle concurrent updates
    const updatePromises = sortedProducts.map((product, index) => {
      return Product.findByIdAndUpdate(product._id, { order: index });
    });

    await Promise.all(updatePromises); // Wait for all updates to finish

    res.status(200).json({
      message: 'Product order updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update product order',
      error: error.message,
    });
  }
};

module.exports = {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
  deleteProductHandler,
  getProductByCategoryHandler,
  sortProductsHandler,
};
