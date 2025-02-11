const productService = require('../services/products.service');
const { createProduct, updateProduct, getProductById } = require('../validations/products.validation');
const Joi = require('joi'); // if you need Joi validation for category

// Create a new product
const createProductHandler = async (req, res) => {
  try {
    const { error } = createProduct.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Assuming the category is nested in the product details (based on the model)
    const product = await productService.createProduct(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Get all products
const getAllProductsHandler = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Get product by ID
const getProductByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = getProductById.validate({ id });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Get products by category
const getProductByCategoryHandler = async (req, res) => {
  try {
    const { category } = req.params;

    // Optionally, validate the category (as a string)
    const categorySchema = Joi.string().required();
    const { error } = categorySchema.validate(category);
    if (error) {
      return res.status(400).json({ message: 'Invalid category' });
    }

    // Fetch products that belong to the given category
    const products = await productService.getProductByCategory(category);
    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found for this category' });
    }

    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Update product by ID
const updateProductHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = updateProduct.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Update product with the provided ID
    const updatedProduct = await productService.updateProduct(id, req.body);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(updatedProduct);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Delete product by ID
const deleteProductHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  getProductByCategoryHandler,
  updateProductHandler,
  deleteProductHandler,
};
